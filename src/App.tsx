
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { Layout } from "./components/layout/Layout";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/auth/Login";
import RegisterPage from "./pages/auth/Register";
import ForgotPasswordPage from "./pages/auth/ForgotPassword";
import VerifyEmailPage from "./pages/auth/VerifyEmail";
import Marketplace from "./pages/Marketplace";
import BuyerDashboard from "./pages/buyer/Dashboard";
import SellerDashboard from "./pages/seller/Dashboard";
import AdminDashboard from "./pages/admin/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Auth Routes */}
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/register" element={<RegisterPage />} />
            <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/auth/verify-email" element={<VerifyEmailPage />} />
            
            {/* Public Routes with Layout */}
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/marketplace" element={<Marketplace />} />
              
              {/* Buyer Protected Routes */}
              <Route element={<ProtectedRoute allowedRoles={["buyer"]} />}>
                <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
              </Route>
              
              {/* Seller Protected Routes */}
              <Route element={<ProtectedRoute allowedRoles={["seller"]} />}>
                <Route path="/seller/dashboard" element={<SellerDashboard />} />
              </Route>
              
              {/* Admin Protected Routes */}
              <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
              </Route>
              
              {/* 404 Not Found */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
