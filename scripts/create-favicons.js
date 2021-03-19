const Jimp = require('jimp');

const sizes = [192, 180, 152, 144, 120, 114, 96, 76, 72, 60, 57, 32, 16];

Jimp.read('./public/images/favicons/base.png')
  .then(base => sizes.map(size => base.resize(size, size).write(`./public/images/favicons/${size}.png`)))
  .then(
    base => sizes.map(size => base.resize(size, size).write(`./public/images/favicons/${size}.png`))
  )
  .catch(console.error);
