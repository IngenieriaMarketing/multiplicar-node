// El yargs es utilizado para validar los codigos en el terminal
const argv = require('yargs')
    .command('listar', 'Imprimir en consola la tabla de Multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Recibe un comando y crea la tabla con el limite', {
        base: {
            demand: true,
            alias: 'c'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;
// Importar la funcion crearArchivo y la ruta donde se encuentra
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// capturar el primer parametro incresado en el terminal
let comando = argv._[0];
// Validamos que el comando sea listar o crear 
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log(`Se creo el archivo con el nombre: ${archivo}`))
            .catch(e => console.log(e));
        //  console.log('Crear');
        break;
    default:
        console.log('Comando No reconocido');
}

/* let parametro = argv[2];
let base = parametro.split('=')[1]
 */
//console.log(comando);


/* crearArchivo(base)
    .then((archivo) => console.log(`archivo creado:${archivo}`))
    .catch(e => console.log(e)); */