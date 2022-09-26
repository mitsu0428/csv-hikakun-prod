import Router from 'next/router';
import { useEffect } from "react";
import { GA_ID, pageview } from "../lib/gtag";

export const usePageView = () => {
  useEffect(() => {
    if (!GA_ID) {
      return;
    }


    const handleRouteChange = (url: string, { shallow }: any) => {
      if (!shallow) {
        pageview(url);
      }
    };

    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [Router.events]);
};
