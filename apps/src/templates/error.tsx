/**
 * Description : error.tsx - 📌 글로벌 페이지
 * Author : Shiwoo Min
 * Date : 2025-09-11
 */

import { useEffect } from 'react';
import { ErrorPage } from '../components/ErrorPage';

type ErrorType = '404' | '403' | '405' | '500' | '400';

interface GlobalErrorProps {
  error: Error & { digest?: string; statusCode?: number };
  reset: () => void;
}

function getErrorType(error: Error & { statusCode?: number }): ErrorType {
  const status = error.statusCode ?? 500;

  if (status === 404) return '404';
  if (status === 403) return '403';
  if (status === 405) return '405';
  if (status >= 500) return '500';
  if (status >= 400) return '400';
  return '500';
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error('Global Error:', error);
  }, [error]);

  return (
    <ErrorPage
      type={getErrorType(error)}
      error={error}
      onRetry={reset}
    />
  );
}