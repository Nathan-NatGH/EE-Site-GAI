import fs from 'fs';
const files = ['/public/adverbs-art.jpg', '/public/adverbs-freq-cover.jpg'];
files.forEach(f => {
  if (fs.existsSync('.' + f)) {
    console.log(f, fs.statSync('.' + f).size, 'bytes');
  } else {
    console.log(f, 'not found');
  }
});
