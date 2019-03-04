const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: '-d',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
})
.help()
.argv;

const getInfo = async (direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors);

        return `El clima en ${coors.direccion} es de ${temp}`;
    } catch(e){
        // console.log(e);
        console.log(`No se pudo determinar el clima en ${direccion}`);
    }    
}

getInfo(argv.direccion)
    .then(resp =>  console.log(resp))
    .catch(e => console.log(e));

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
        
//         console.log(resp.direccion);
//         console.log(`Latitud: ${resp.lat}\nLongitud: ${resp.lng}`);

//         clima.getClima(resp)
//             .then(temp => console.log(temp))
//             .catch(e => console.log(e));
//     })
//     .catch(e => console.log(e));

console.log(argv.direccion);

// clima.getClima(35, 139)
//     .then(temp => console.log(temp))
//     .catch(e => console.log(e));