
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg text-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold">Check your email</h1>
          <p className="text-muted-foreground mt-2">
            We've sent you a verification link to confirm your email address.
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Please check your inbox and click on the verification link to complete your registration.
          </p>
          <Link to="/auth/login">
            <Button variant="outline" className="w-full">
              Back to Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
