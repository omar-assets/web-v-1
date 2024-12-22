import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import { LoadingScreen } from '@/components/ui/LoadingScreen';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { ROUTES } from '@/utils/constants';
import { publicRoutes, protectedRoutes } from './config';

export function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      {publicRoutes.map(({ path, component: Component }) => (
        <Route
          key={`public-${path}`}
          path={path}
          element={
            <Suspense fallback={<LoadingScreen />}>
              <Component />
            </Suspense>
          }
        />
      ))}

      {/* Protected Routes */}
      {protectedRoutes.map(({ path, component: Component }) => (
        <Route
          key={`protected-${path}`}
          path={path}
          element={
            <ProtectedRoute>
              <Suspense fallback={<LoadingScreen />}>
                <Component />
              </Suspense>
            </ProtectedRoute>
          }
        />
      ))}

      {/* Catch all route */}
      <Route 
        key="catch-all"
        path="*" 
        element={<Navigate to={ROUTES.NOT_FOUND} replace />} 
      />
    </Routes>
  );
}