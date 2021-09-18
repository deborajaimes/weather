export default {
    tempoCidade: async (regiao) => {
        let resultado = await axios.get(`https://goweather.herokuapp.com/weather/${regiao}`)
        return resultado.data
    }
}