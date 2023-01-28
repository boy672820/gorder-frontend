import React from 'react';
import { useLocation as useReactRouterDomLocation } from 'react-router';

export default function useLocation() {
  const location = useReactRouterDomLocation();

  const { search } = location;

  return React.useMemo(() => ({ query: new URLSearchParams(search) }), [search]);
}
