const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '../public');

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.jpg')) {
    const filePath = path.join(dir, file);
    const data = fs.readFileSync(filePath);
    fs.writeFileSync(filePath + '.b64', data.toString('base64'));
    console.log('Encoded', file);
  }
});
