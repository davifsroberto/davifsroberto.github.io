type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

export const GA_TRACKING_ID = 'G-H8BYG6E98W';

export const pageview = (url: URL): void => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }: GTagEvent): void => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
