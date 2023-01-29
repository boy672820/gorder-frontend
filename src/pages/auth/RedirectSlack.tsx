import { useEffect } from 'react';
import { useLocation } from '../../hooks';
import Page404 from '../Page404';

export default function RedirectSlack() {
  const { query } = useLocation();

  const code = query.get('code');

  useEffect(() => {}, [code]);

  if (!code) {
    return <Page404 />;
  }

  return <></>;
}
