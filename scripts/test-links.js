/**
 * Link, Asset & SEO Validator for ООО «Уралгиб»
 * Verifies all 19 HTML pages in root and in dist/
 */

const fs = require('fs');
const path = require('path');

const targetDirs = [__dirname + '/..', __dirname + '/../dist'];

let totalFilesChecked = 0;
let totalLinksChecked = 0;
let errorsFound = 0;

function checkHtmlFile(filePath, baseFolder) {
  totalFilesChecked++;
  const content = fs.readFileSync(filePath, 'utf-8');
  const fileDir = path.dirname(filePath);
  const relFilePath = path.relative(baseFolder, filePath);

  // 1. Check title & meta
  if (!content.includes('<title>') || content.includes('<title></title>')) {
    console.error(`❌ [${relFilePath}] Missing or empty <title>!`);
    errorsFound++;
  }
  if (!content.includes('<meta name="description"')) {
    console.error(`❌ [${relFilePath}] Missing meta description!`);
    errorsFound++;
  }
  if (!content.includes('<meta name="viewport"')) {
    console.error(`❌ [${relFilePath}] Missing meta viewport!`);
    errorsFound++;
  }

  // 2. Extract all href and src attributes
  const linkRegex = /(?:href|src|data-lightbox-src)=["']([^"']+)["']/g;
  let match;

  while ((match = linkRegex.exec(content)) !== null) {
    const rawUrl = match[1];
    totalLinksChecked++;

    // Ignore anchors on current page, tel:, mailto:, http/https external links, and javascript:
    if (
      rawUrl.startsWith('#') ||
      rawUrl.startsWith('tel:') ||
      rawUrl.startsWith('mailto:') ||
      rawUrl.startsWith('http://') ||
      rawUrl.startsWith('https://') ||
      rawUrl.startsWith('javascript:')
    ) {
      continue;
    }

    // Split anchor if present
    const cleanUrl = rawUrl.split('#')[0];
    if (!cleanUrl) continue;

    // Resolve relative path against file directory
    const resolvedPath = path.resolve(fileDir, cleanUrl);

    if (!fs.existsSync(resolvedPath)) {
      console.error(`❌ [${relFilePath}] Broken link / asset: "${rawUrl}" -> Resolved to nonexistent: ${resolvedPath}`);
      errorsFound++;
    }
  }
}

function scanDirForHtml(dir, baseFolder) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (let entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === 'src') continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDirForHtml(fullPath, baseFolder);
    } else if (entry.name.endsWith('.html')) {
      checkHtmlFile(fullPath, baseFolder);
    }
  }
}

console.log('🔍 Starting Comprehensive Link & Asset Integrity Check...\n');

targetDirs.forEach(d => {
  const resolved = path.resolve(d);
  console.log(`📁 Scanning directory: ${resolved}`);
  scanDirForHtml(resolved, resolved);
});

console.log('\n========================================');
console.log(`Total HTML Files Verified: ${totalFilesChecked}`);
console.log(`Total Links & Assets Checked: ${totalLinksChecked}`);
console.log(`Total Errors / 404s: ${errorsFound}`);
console.log('========================================\n');

if (errorsFound > 0) {
  console.error(`❌ FAILED: ${errorsFound} broken link(s) or asset(s) detected!`);
  process.exit(1);
} else {
  console.log('🎉 100% SUCCESS: Zero broken links, zero 404s! All offline relative paths work flawlessly!');
}

