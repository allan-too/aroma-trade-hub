
import { AuthForm } from '@/components/auth/AuthForm';

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary">
      <AuthForm mode="forgot-password" />
    </div>
  );
}
