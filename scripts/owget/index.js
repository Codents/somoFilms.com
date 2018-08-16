const fs = require('fs');
const Axios = require('axios');
const ora = require('ora');

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


const down = async (urls, path = '/tmp/', count = 0) => {
  const url = urls.shift();
  const ext = url.substr(url.lastIndexOf('.') + 1);
  const fn = count < 10 ? `0${count}` : count;;
  const resp = await Axios({
    method: 'GET',
    responseType: 'stream',
    url
  });
  const spinner = ora(`${Params.out}/file_${fn}.${ext}`).start();
  resp.data.pipe(fs.createWriteStream(`${Params.out}/file_${fn}.${ext}`));
  resp.data.on('end', () => {
    spinner.succeed();
    if (urls.length) down(urls, path, (count += 1));
  });
  resp.data.on('error', () => {
    spinner.fail();
  });
};

fs.readFile(Params.in, 'utf8', (err, data) => {
  if (err) throw err;
  const urls = data.split('\n').filter(Boolean);
  console.log(`${urls.length} urls a descargar`);
  if (!fs.existsSync(Params.out)) {
    console.log(`Creado el directorio de salida ${Params.out}`);
    fs.mkdirSync(Params.out);
  }
  console.log('Descargando: ');
  down(urls);
});
