const { chromium } = require('playwright');

(async () => {
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('https://example.com');
await page.screenshot({ path: 'browser/example.png', fullPage: true });
console.log('Saved screenshot to browser/example.png');
await browser.close();
})();
