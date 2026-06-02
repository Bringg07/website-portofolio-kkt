// Google Analytics tracking utility
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// Log page view
export const pageView = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_ID, {
      page_path: url,
    });
  }
};

// Log custom event
export const logEvent = (action: string, params?: Record<string, any>) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, params);
  }
};

// Extend Window for gtag
declare global {
  interface Window {
    gtag: any;
  }
}
