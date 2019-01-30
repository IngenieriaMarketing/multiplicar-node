// requireds el paquete instalado fs
const fs = require('fs');

let listarTabla = (base, limite = 10) => {
    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${i*base}`);
    }
};

//Funcion para crear la tabla
let crearArchivo = (base, limite = 10) => {
        return new Promise((resolve, reject) => {
            // Validar si es un numero
            if (!Number(base)) {
                reject(`El valor " ${base} " No es un Numero `);
                return;
            }
            if (!Number(limite)) {
                reject(`El valor " ${limite} " No es un Numero `);
                return;
            }
            //Crear la tabla de multiplicar
            let data = '';

            for (let i = 0; i <= limite; i++) {
                data += `${base} * ${i} = ${i*base} \n`;
            }
            // Guarda la informacion de data en el archivo " multiplicar/tabla-${base}.txt "
            fs.writeFile(`multiplicar/tabla-${base}-con limite de ${limite}.txt`, data, (err) => {
                if (err)
                    reject(err)
                else
                    resolve(`tabla-${base}-con limite de ${limite}.txt`);
                //console.log(`la tabla numero ${base} fue creado satisfactoriamente!`);
            });
        });
    }
    // permitir utilizar la funcion de manera global
module.exports = {
    crearArchivo,
    listarTabla
}