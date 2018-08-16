const fs = require('fs');
const { spawn } = require('child_process');

const Params = require('yargs')
  .usage('Usage: $0 [options]')
  .describe('in', 'Ruta al fichero con la lista de urls')
  .alias('i', 'in')

  .describe('out', 'Ruta donde dejar los ficheros descagados')
  .alias('o', 'out')
  .default('out', './out')

  .demandOption(['in'])
  .help('h')
  .alias('h', 'help').argv;

const down = (urls, count = 0) => {
  const url = urls.shift();
  const cf = count < 10 ? `0${count}` : count;
  const wget = spawn('wget', ['-O', `${Params.out}/file_${cf}.jpg`, url]);
  wget.stdout.on('data', data => {
    console.log(`stdout: ${data}`);
  });
  wget.on('close', code => {
    console.log(`${url} descargada`);
    if (urls.length) down(urls, (count += 1));
  });
};

const down2 = (urls, count = 0) => {
};

fs.readFile(Params.in, 'utf8', (err, data) => {
  if (err) throw err;
  const urls = data.split('\n').filter(Boolean);
  console.log(`${urls.length} urls a descargar`);
  if (!fs.existsSync(Params.out)) {
    console.log(`Creado el directorio de salida ${Params.out}`);
    fs.mkdirSync(Params.out);
  }
  down(urls);
});
