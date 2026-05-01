const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '../public');

if (fs.existsSync(dir)) {
  fs.readdirSync(dir).forEach(file => {
    if (file.endsWith('.b64')) {
      const filePath = path.join(dir, file);
      const data = fs.readFileSync(filePath, 'utf8');
      const pngPath = filePath.replace('.b64', '');
      fs.writeFileSync(pngPath, Buffer.from(data, 'base64'));
      console.log('Decoded', file, 'to', path.basename(pngPath));
    }
  });
} else {
  console.log('Public folder not found.');
}
