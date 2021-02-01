const { response } = require('express')
const express = require ('express')
const app = express()
const port = 8000
const fetch = require('node-fetch')

// app.get('/', (request, response) => {
//     response.send('Hello World!')
// })

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })


fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)})
