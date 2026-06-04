import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/**
 * Scroll behavior:
 *  - PUSH/REPLACE (genuine navigation to a new route): scroll to top.
 *  - POP (browser back/forward): preserve scroll position naturally.
 *  - Same-pathname interactions (FAQ toggles, tabs, filters, hash links): never scroll.
 */
export const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navType = useNavigationType();
  const prevPath = useRef(pathname);

  useEffect(() => {
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;
    if (navType === "POP") return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, navType]);

  return null;
};
