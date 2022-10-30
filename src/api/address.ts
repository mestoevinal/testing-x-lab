// import axios from 'axios'
const axios = require('axios')
// const $host = axios.create({
//     baseURL: 'https://suggestions.dadata.ru/'
// })
const $host = axios.create()

const token = "f162ee8b37b017a3659e51c71f6acab84518f0a4";

const fetchAddress = async (query="москва хабар") => {
    const {data} = await $host.get(`https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address?query=${query}`,{
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        }
    })
    // return data.suggestions
    console.log(data)
}


fetchAddress()