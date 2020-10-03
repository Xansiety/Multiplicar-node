const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en clg l tba de multiplicar', opts)
    .command('crear', 'Generar un rchivo con la tabla de multiplicar', opts)
    .help()
    .argv; //paquete quwe se instala


module.exports = {
    argv: argv
}