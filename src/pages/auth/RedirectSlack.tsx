import { useEffect } from 'react';
import { useLocation } from '../../hooks';
import Page404 from '../Page404';

export default function RedirectSlack() {
  const { query } = useLocation();

  const code = query.get('code');

  useEffect(() => {
    if (code) {
      window.opener.postMessage({ code }, '*');
      window.close();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!code) {
    return <Page404 />;
  }

  return <></>;
}
