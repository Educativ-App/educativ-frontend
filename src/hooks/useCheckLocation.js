import { useLocation } from 'react-router-dom';

export function useCheckLocation(path = '/dashboard') {
    const { pathname } = useLocation();
    console.log(pathname);
    return pathname == path;
  }