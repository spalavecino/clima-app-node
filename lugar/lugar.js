const axios = require('axios');

const getLugarLatLng = async (direccion) =>{

    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyC2bl6SHXXp_P5HGatcuiPysX1guZfTp1U`);
    

    if(resp.data.status === 'ZERO_RESULTS'){
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    let location = resp.data.results[0]; 
    let address = location.formatted_address;
    let latitud = location.geometry.location.lat;
    let longitud = location.geometry.location.lng;

    return {
        direccion: address,
        lat: latitud,
        lng: longitud
    }
}

module.exports = {
    getLugarLatLng
}
