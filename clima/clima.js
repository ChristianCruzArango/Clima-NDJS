const axios = require('axios');




const getClima = async(lt, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lt}&lon=${lng}&appid=d5c4bb32a285e496eb68893fe40678c2&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}