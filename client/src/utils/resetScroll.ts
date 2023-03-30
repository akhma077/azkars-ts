import * as React from "react";
import { useLocation } from "react-router-dom";

export function useResetScroll() {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
}
