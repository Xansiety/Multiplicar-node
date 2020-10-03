const { rejects } = require('assert');
//required
const colors = require('colors');
const fs = require('fs'); //ya existe en node
const { resolve } = require('path');


let ListarTabla = (base, limite = 10) => {

    console.log('=================================='.green);
    console.log(`Tabla de ${ base }`.green);
    console.log('=================================='.green);


    for (let i = 1; i <= limite; i++) {

        console.log(`${ base } * ${ i } = ${base * i} `);
        //data += `${ base } * ${ i } = ${base * i} \n`;
    }


}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`No es un numero ${ base }`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            //console.log(`${ base } * ${ i } = ${base * i} `);
            data += `${ base } * ${ i } = ${base * i} \n`;
        }
        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablasmultiplicar/tabla-${ base }.txt`, data, (err) => {
            if (err) reject(err); //si existe un error

            resolve(`tabla-${ base }-hasta-el-${limite}.txt`);
        });

    });

}


// let crearArchivo = (base) => {

//     return new Promise((resolve, reject) => {

//         if (!Number(base)) {
//             reject(`No es un numero ${ base }`);
//             return;
//         }
//         let data = '';

//         for (let i = 1; i <= 10; i++) {
//             //console.log(`${ base } * ${ i } = ${base * i} `);
//             data += `${ base } * ${ i } = ${base * i} \n`;
//         }
//         //const data = new Uint8Array(Buffer.from('Hello Node.js'));
//         fs.writeFile(`tablasmultiplicar/tabla-${ base }.txt`, data, (err) => {
//             if (err) reject(err); //si existe un error

//             resolve(`tabla-${ base }.txt`);
//         });

//     });

// }

module.exports = {
    crearArchivo: crearArchivo,
    ListarTabla: ListarTabla
}