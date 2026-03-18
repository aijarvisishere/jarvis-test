const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const outputPath = path.join(__dirname, 'example.png');

(async () => {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });

  const browser = await chromium.launch({ headless: true });

  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto('https://example.com', { waitUntil: 'load' });
    await page.screenshot({ path: outputPath, fullPage: true });
    console.log('Saved screenshot to ' + outputPath);
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
