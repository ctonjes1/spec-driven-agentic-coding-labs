import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.cwd(), 'scorm-src');
const manifestPath = path.join(root, 'imsmanifest.xml');

if (!fs.existsSync(manifestPath)) {
  throw new Error(`Manifest not found: ${manifestPath}`);
}

const manifest = fs.readFileSync(manifestPath, 'utf8');
const hrefs = [...manifest.matchAll(/href="([^"]+)"/g)]
  .map((match) => match[1])
  .filter((href) => !href.endsWith('.xsd'));
const missing = [...new Set(hrefs)].filter((href) => !fs.existsSync(path.join(root, href)));
const modules = fs.readdirSync(root).filter((name) => /^module-\d\d\.html$/.test(name)).sort();
const external = [];

for (const file of ['index.html', ...modules]) {
  const content = fs.readFileSync(path.join(root, file), 'utf8');
  if (/https?:\/\//i.test(content)) external.push(file);
  if (!content.includes('shared/scorm.js') || !content.includes('shared/style.css')) {
    throw new Error(`Shared assets missing in ${file}`);
  }
}

if (missing.length) throw new Error(`Manifest references missing files: ${missing.join(', ')}`);
if (modules.length !== 11) throw new Error(`Expected 11 modules, found ${modules.length}`);
if (external.length) throw new Error(`External dependencies found: ${external.join(', ')}`);

const wrapper = fs.readFileSync(path.join(root, 'shared', 'scorm.js'), 'utf8');
for (const token of ['LMSInitialize', 'LMSSetValue', 'LMSCommit', 'LMSFinish', 'cmi.core.lesson_status', 'cmi.suspend_data']) {
  if (!wrapper.includes(token)) throw new Error(`Missing SCORM API token: ${token}`);
}

console.log(JSON.stringify({
  manifestResources: new Set(hrefs).size,
  modules: modules.length,
  missing,
  external,
  scormApi: 'present'
}, null, 2));

