import React from 'react';
import { useLocation as useReactRouterLocation } from 'react-router';

export default function useLocation() {
  const location = useReactRouterLocation();

  const { search } = location;

  return React.useMemo(() => ({ query: new URLSearchParams(search) }), [search]);
}
