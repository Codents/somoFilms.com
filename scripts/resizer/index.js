const fs = require('fs');
const sharp = require('sharp');

const Params = require('yargs')
  .usage('Usage: $0 [options]')
  .describe('in', 'Ruta donde estan los ficheros')
  .alias('i', 'in')

  .describe('out', 'Ruta donde dejar los ficheros redimensionados')
  .alias('o', 'out')
  .default('out', './out')

  .describe('width', 'Nuevo ancho al que redimensionar la foto')
  .alias('w', 'width')

  .describe('quality', 'Calidad de la foto jpeg en porcentaje 0-100')
  .alias('q', 'quality')
  .default('quality', '78')

  .describe('nametmpl', 'Texto platilla para los nombres de los ficheros procesados')
  .alias('nt', 'nametmpl')
  .default('nametmpl', 'out')

  .demandOption(['in', 'width'])
  .help('h')
  .alias('h', 'help').argv;

const splitPath = path => {
  const result = path
    .replace(/\\/g, '/')
    .match(/(.*\/)?(\..*?|.*?)(\.[^.]*?)?(#.*$|\?.*$|$)/);
  return {
    dirname: result[1] || '',
    filename: result[2] || '',
    extension: result[3] ? result[3].substr(1) : '',
    params: result[4] || ''
  };
};

const onlyJpeg = k =>
  splitPath(k).extension.toLowerCase() === 'jpg' ||
  splitPath(k).extension.toLowerCase() === 'jpeg';

const resize = (files, count = 0) => {
  const file = files.shift();
  const cf = count < 10 ? `0${count}` : count;
  sharp(`${Params.in}/${file}`)
    .resize(Params.width)
    .jpeg({
      quality: Number(Params.quality)
    })
    .toFile(`${Params.out}/${Params.nametmpl}_${cf}.jpg`)
    .then(info => {
      if (files.length) {
        return resize(files, count += 1);
      }
      return true;
    });
};

fs.readdir(Params.in, (err, files) => {
  if (err) throw err;
  const jpeg = files.filter(onlyJpeg);
  console.log(`Ficheros a tratar ${JSON.stringify(jpeg)}`);
  const size = jpeg.length;
  if (!fs.existsSync(Params.out)) {
    console.log(`Creado el directorio de salida ${Params.out}`);
    fs.mkdirSync(Params.out);
  }
  resize(jpeg);
  console.log(`${size} fichero procesados. Resultado en ${Params.out}`)
});

/*
sharp('5.jpg')
  .resize(200)
  .jpeg({
    quality: 78
  })
  .toFile('5-mod.jpg');
*/
