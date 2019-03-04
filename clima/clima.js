const axios = require('axios');

const ID_API = 'a3fbaeaaf985ccc814eb5a3dd0eb03b9';

const getClima = async ({lat, lng})=>{

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${ID_API}`);

    if(resp.status != 200){
        throw new Error(`No se han encontrado resultados`);
    }

    return resp.data.main.temp;
}

module.exports = {
    getClima
}