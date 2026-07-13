// Vercel Speed Insights initialization
// This script loads and initializes Vercel Speed Insights for performance tracking
(function() {
  'use strict';
  
  // Import the Speed Insights script from the CDN (npm package via unpkg/jsdelivr)
  var script = document.createElement('script');
  script.type = 'module';
  script.textContent = `
    import { injectSpeedInsights } from 'https://cdn.jsdelivr.net/npm/@vercel/speed-insights@2.0.0/dist/index.mjs';
    injectSpeedInsights();
  `;
  document.head.appendChild(script);
})();
