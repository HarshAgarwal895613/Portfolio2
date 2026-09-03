const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const htmlPath = path.resolve(__dirname, 'public', 'assets', 'resume_template.html');
const pdfPath = path.resolve(__dirname, 'public', 'assets', 'Harsh_Agarwal_Resume.pdf');
const pdfCopy = path.resolve(__dirname, 'public', 'assets', 'resume.pdf');

const fileUrl = 'file:///' + htmlPath.split(path.sep).join('/');
const cmd = `"${edgePath}" --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="${pdfPath}" "${fileUrl}"`;
console.log('Rendering PDF from:', fileUrl);
execSync(cmd, { stdio: 'inherit' });
fs.copyFileSync(pdfPath, pdfCopy);
console.log('PDF generated successfully!');
console.log('Harsh_Agarwal_Resume.pdf size:', fs.statSync(pdfPath).size, 'bytes');
