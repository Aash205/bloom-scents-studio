import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // use native scroll to top for instant behavior
        window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
        // fallback for browsers that don't support options
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (!window.scrollTo) window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
