const capitalWeather = require('./capital_weather')
const yargs = require('yargs')

function run() {
    yargs.command({
        command: 'get',
        describe: 'The country to which the weather information of the capital will be brought',
        builder: {
            country: {
                describe: 'write the country in english',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            capitalWeather(argv.country)
        }
    })
    
    yargs.parse()
}

module.exports = run

