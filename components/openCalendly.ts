// utils/openCalendly.ts

declare global {
  interface Window {
    Calendly?: any;
  }
}

// utils/openCalendly.ts

export const openCalendly = (
  url: string = "https://calendly.com/info-simpmedia/30min"
) => {
  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );
};

