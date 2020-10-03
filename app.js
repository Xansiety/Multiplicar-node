//required
const argv = require('./config/yargs').argv; // se exporta cn modulos la configuracion y se hce referencia al objeto

const colors = require('colors/safe');

/* modulo un ovjeto global para exportar funciones de ptro archivo */
const { crearArchivo, ListarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0]; //argv es un proceso se extrae el primer argumento del array que proviene de consola

switch (comando) {

    case 'listar':
        //console.log('listar');
        ListarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        console.log('crear');
        //para crear las tabala sde multiplicar
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado`, colors.green(archivo)))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');

}