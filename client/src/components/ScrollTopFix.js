import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTopFix = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return;
};

export default ScrollTopFix;
