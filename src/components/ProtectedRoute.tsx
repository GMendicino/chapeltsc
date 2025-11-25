import React, { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebaseConfig';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("ProtectedRoute Listener: User is signed IN", user.uid);
        setIsAuthenticated(true);
      } else {
        console.log("ProtectedRoute Listener: User is signed OUT");
        setIsAuthenticated(false);
      }
    });

    return () => {
      console.log("ProtectedRoute: Cleaning up auth listener.");
      unsubscribe();
    }
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    console.log("ProtectedRoute: User not authenticated, redirecting to /login");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  console.log("ProtectedRoute: User authenticated, rendering children.");
  return <>{children}</>;
};

export default ProtectedRoute;