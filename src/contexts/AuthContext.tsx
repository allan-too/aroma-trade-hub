
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { supabase, createUserProfile } from '../lib/supabase';
import { AuthContextType, User, SignupData, LoginData } from '../types/auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Check if user is logged in on initial load
  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session?.user) {
          const { data: profile, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .single();
            
          if (error) throw error;
          
          if (profile) {
            setUser({
              id: session.user.id,
              email: profile.email,
              name: profile.name,
              role: profile.role,
              isVerified: profile.is_verified,
              createdAt: profile.created_at,
              avatarUrl: profile.avatar_url
            });
          }
        }
      } catch (error) {
        console.error('Error checking user:', error);
      } finally {
        setLoading(false);
      }
    };
    
    checkUser();
    
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session) {
        // User has signed in
        const { data: profile, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();
          
        if (!error && profile) {
          setUser({
            id: session.user.id,
            email: profile.email,
            name: profile.name,
            role: profile.role,
            isVerified: profile.is_verified,
            createdAt: profile.created_at,
            avatarUrl: profile.avatar_url
          });
        }
      } else if (event === 'SIGNED_OUT') {
        // User has signed out
        setUser(null);
      }
    });

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  const signup = async ({ email, password, name, role }: SignupData) => {
    try {
      setLoading(true);
      setError(null);
      
      // Create auth user
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/verify`,
          data: {
            name,
            role
          }
        }
      });
      
      if (error) throw error;
      
      if (data.user) {
        // Create profile record
        await createUserProfile(
          data.user.id,
          email,
          name,
          role
        );
        
        toast.success('Account created! Please verify your email.');
        navigate('/auth/verify-email');
      }
    } catch (err: any) {
      console.error('Signup error:', err);
      setError(err.message || 'Failed to sign up. Please try again.');
      toast.error(err.message || 'Failed to sign up');
    } finally {
      setLoading(false);
    }
  };

  const login = async ({ email, password }: LoginData) => {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) throw error;
      
      if (data.user) {
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', data.user.id)
          .single();
          
        if (profileError) throw profileError;
        
        setUser({
          id: data.user.id,
          email: profile.email,
          name: profile.name,
          role: profile.role,
          isVerified: profile.is_verified,
          createdAt: profile.created_at,
          avatarUrl: profile.avatar_url
        });
        
        toast.success('Login successful!');
        
        // Redirect based on role
        if (profile.role === 'buyer') {
          navigate('/marketplace');
        } else if (profile.role === 'seller') {
          navigate('/seller/dashboard');
        } else if (profile.role === 'admin') {
          navigate('/admin/dashboard');
        }
      }
    } catch (err: any) {
      console.error('Login error:', err);
      setError(err.message || 'Failed to log in. Please try again.');
      toast.error(err.message || 'Failed to log in');
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      });
      
      if (error) throw error;
      
      // No need to set user here as the auth state listener will handle it
    } catch (err: any) {
      console.error('Google login error:', err);
      setError(err.message || 'Failed to log in with Google. Please try again.');
      toast.error(err.message || 'Failed to log in with Google');
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signOut();
      
      if (error) throw error;
      
      setUser(null);
      toast.success('Logged out successfully');
      navigate('/');
    } catch (err: any) {
      console.error('Logout error:', err);
      toast.error(err.message || 'Failed to log out');
    } finally {
      setLoading(false);
    }
  };

  const sendPasswordResetEmail = async (email: string) => {
    try {
      setLoading(true);
      setError(null);
      
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      });
      
      if (error) throw error;
      
      toast.success('Password reset email sent!');
    } catch (err: any) {
      console.error('Password reset error:', err);
      setError(err.message || 'Failed to send password reset email. Please try again.');
      toast.error(err.message || 'Failed to send password reset email');
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => setError(null);

  const value = {
    user,
    loading,
    error,
    signup,
    login,
    loginWithGoogle,
    logout,
    sendPasswordResetEmail,
    clearError
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
