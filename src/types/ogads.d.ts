declare global {
  interface Window {
    OGAds?: {
      init?: () => void;
      scan?: () => void;
      refresh?: () => void;
      reinit?: () => void;
    };
  }
}