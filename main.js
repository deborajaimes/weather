import weather from "./weather.js"


let inputCidade = document.getElementById("inputCidade");
let btnVerificarTemperatura = document.getElementById("btnVerificarTemperatura");


btnVerificarTemperatura.addEventListener("click", async() =>{
    let temperature;
    let description;
    let wind;

   
    let resultado = await weather.tempoCidade(inputCidade.value)
        temperature = resultado.temperature;
        description = resultado.description;
        wind = resultado.wind;

       if (description ==="Partly cloudy") {
        let divWeather = document.getElementById("weatherResult");
      divWeather.innerHTML = `        
      <div id="weatherData">
          <div class="partlyCloudy" id="partlyCloudy">
          <img id="imagePartyCloudy" src="./partlyCloudy.png" alt="Icone de partlyCloudy">
            <div id="temperature">${temperature}</div>
            <div id="temperatureDescription">${description}</div>
            <div id="temperatureWind"> Vento: + ${wind}</div>
          </div>
      </div>
          ` 
        } if (description ==="clear") {
          let divWeather = document.getElementById("weatherResult");
        divWeather.innerHTML = `        
        <div id="weatherData">
            <div class="clear" id="clear">
              <div id="temperature">${temperature}</div>
              <div id="temperatureDescription">${description}</div>
              <div id="temperatureWind"> Vento: + ${wind}</div>
            </div>
        </div>
            `  

        } if (description ==="Sunny") {
          let divWeather = document.getElementById("weatherResult");
        divWeather.innerHTML = `        
        <div id="weatherData">
            <div class="sunny" id="sunny">
              <div id="temperature">${temperature}</div>
              <div id="temperatureDescription">Ensolarado</div>
              <div id="temperatureWind"> Vento: + ${wind}</div>
            </div>
        </div>
            `
           
             
        }else{
        let divWeather = document.getElementById("weatherResult");
        divWeather.innerHTML = `        
        <div id="weatherData">
            <div class="other" id="other">
              <div id="temperature">${temperature}</div>
              <div id="temperatureDescription">${description}</div>
              <div id="temperatureWind"> Vento: + ${wind}</div>
        </div>
            `
}})


0-x
