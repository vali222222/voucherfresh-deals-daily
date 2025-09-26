export const mountOgadsCaptcha = (el: HTMLElement): void => {
  console.log("🔧 mountOgadsCaptcha called", el);
  
  // Remove any existing scripts
  document.querySelectorAll<HTMLScriptElement>('script[src*="pagelocked.org/cp/js"]')
    .forEach((script) => script.remove());
  
  // Set the required attribute
  el.setAttribute("data-captcha-enable", "true");
  console.log("✅ Set data-captcha-enable on element", el);
  
  // Add body class for iOS fix
  document.body.classList.add("captcha-active");
  console.log("✅ Added captcha-active class to body");
  
  // Create and append new script
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = `https://pagelocked.org/cp/js/n0kjm?t=${Date.now()}`;
  
  script.onload = () => console.log("✅ OGAds script loaded");
  script.onerror = () => console.log("❌ OGAds script failed to load");
  
  document.body.appendChild(script);
  console.log("✅ OGAds script added to body");
};