const fetch = require('node-fetch')

module.exports = async function buscaCnpj(cnpj) {
    const response = await fetch(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`)
    const json = await response.json()

    return json 
}
