import { useEffect } from 'react';
import { useLocation } from '../../hooks';

export default function RedirectSlack() {
  const { query } = useLocation();

  useEffect(() => {
    const code = query.get('code');

    console.log(code);

    window.close();
  }, []);

  return <></>;
}
