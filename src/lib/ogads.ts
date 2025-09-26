export const mountOgadsCaptcha = (el: HTMLElement): void => {
  // Remove any existing scripts
  document.querySelectorAll<HTMLScriptElement>('script[src*="pagelocked.org/cp/js"]')
    .forEach((script) => script.remove());
  
  // Set the required attribute
  el.setAttribute("data-captcha-enable", "true");
  
  // Add body class for iOS fix
  document.body.classList.add("captcha-active");
  
  // Create and append new script
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = `https://pagelocked.org/cp/js/n0kjm?t=${Date.now()}`;
  document.body.appendChild(script);
};