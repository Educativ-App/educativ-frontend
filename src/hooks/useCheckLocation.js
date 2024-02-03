import { useLocation } from "react-router-dom";

export function useCheckLocation(path = "/dashboard") {
  const { pathname } = useLocation();
  return pathname.includes(path) || pathname.includes('/teacher');
}
