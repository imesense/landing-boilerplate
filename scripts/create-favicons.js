const Jimp = require('jimp');

const sizes = [16, 32, 57, 60, 72, 76, 96, 114, 120, 144, 152, 180, 192];

Jimp.read('./public/images/favicons/base.png')
  .then(base => sizes.map(size => base.resize(size, size).write(`./public/images/favicons/${size}.png`)))
  .catch(console.error);