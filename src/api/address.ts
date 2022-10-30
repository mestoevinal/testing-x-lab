import axios from 'axios'

const $host = axios.create()

const token = "f162ee8b37b017a3659e51c71f6acab84518f0a4";

export const fetchAddress = async (query: string ="москва хабар") => {
    const {data} = await $host.get(`https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address?query=${query}`,{
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        }
    })
    return data.suggestions
}
