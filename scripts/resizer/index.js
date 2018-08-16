const fs = require('fs');
const sharp = require('sharp');
const ora = require('ora');


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

  .describe('filename', 'Nombre base para los fichero resdimensionados')
  .alias('fn', 'filename')
  .default('filename', 'out')

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

const extensions = ['jpeg', 'jpg', 'png', 'gif', 'tiff'];
const allowedExtensions = k =>
  extensions.includes(splitPath(k).extension.toLowerCase());

const resize = (files, count = 0) => {
  const file = files.shift();
  const cf = count < 10 ? `0${count}` : count;
  const spinner = ora(`${Params.out}/${Params.filename}_${cf}.jpg`).start();
  sharp(`${Params.in}/${file}`)
    .resize(Params.width)
    .jpeg({
      quality: Number(Params.quality)
    })
    .toFile(`${Params.out}/${Params.filename}_${cf}.jpg`)
    .then(info => {
      spinner.succeed();
      if (files.length) {
        return resize(files, count += 1);
      }
      return true;
    });
};

fs.readdir(Params.in, (err, files) => {
  if (err) throw err;
  const jpeg = files.filter(allowedExtensions);
  console.log(`${jpeg.length} ficheros a procesar`);
  const size = jpeg.length;
  if (!fs.existsSync(Params.out)) {
    console.log(`Creado el directorio de salida ${Params.out}`);
    fs.mkdirSync(Params.out);
  }
  console.log('Procesando: ');
  resize(jpeg);
});
