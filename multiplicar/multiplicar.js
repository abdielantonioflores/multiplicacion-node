const fs = require('fs')

let crearArchivo = (base) => {
  return new Promise((resolve, reject) => {

    if(!Number(base) ){
      reject(` el valor introducido ||--${base }--||  no es un numero `)
      return ; 
    }
    let data = "";

    for (let i = 0; i < 12; i++) {
      data += `${i}  x ${base} = ${i * base }\n`;

    }

    fs.writeFile(`tabla/tabla-${base}.text`, data, (err) => {
      if (err) reject (err);
      resolve(` tabla-${base}.text`);
    })
  })
}

module.exports = {
  crearArchivo
}