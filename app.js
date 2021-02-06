const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const buscaCep = require('./src/functions/buscaCep')
const buscaCnpj = require('./src/functions/buscaCnpj')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.set('view engine', 'ejs')

app.set('views', './src/views')

app.get('/', (req, res) => {

  res.render('./home/index')

})

app.get('/cnpj', (req, res) => {
  res.render('./cnpj/index')
})

app.get('/cep', (req, res) => {
  res.render('./cep/index')
})

// pegando os dados da minha view
app.post('/envia-cnpj', async (req, res) => {
  const { cnpj } = req.body
  const resultadoCnpj = await buscaCnpj(cnpj)

   res.render('./cnpj/resultadoCnpj', {dadoCnpj: resultadoCnpj})

})


// pegando os dados da minha view
app.post('/envia-cep', async (req, res) => {
    const { cep } = req.body
    const resultadoCep = await buscaCep(cep)

    res.render('./cep/resultado', {dadoCep: resultadoCep})
})




app.listen(3000)