const axios = require('axios')

function findCapitalWeather(country) {
    axios.get('https://restcountries.com/v3.1/name/' + country).then(res => {

        const capital = res.data[0].capital[0]
    
        axios.get('https://goweather.herokuapp.com/weather/' + capital).then(res => {
            console.log(`Capital ${capital}'s Weather Forecast:\nTemperature: ${res.data.temperature}\nDescription: ${res.data.description}`)
        })
    })
}

module.exports = findCapitalWeather