// function getWeather() {
//     const city = document.getElementById("cityInput").value.trim();
    
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "weather.json", true);
//     xhr.onload = function () {
//       if (xhr.status === 200) {
//         const data = JSON.parse(xhr.responseText);
//         const weather = data[city];
  
//         if (weather) {
//           const html = `
//             <h2>${city}</h2>
//             <p><strong>Temperature:</strong> ${weather.temp} °C</p>
//             <p><strong>Weather:</strong> ${weather.description}</p>
//             <p><strong>Humidity:</strong> ${weather.humidity}%</p>
//             <p><strong>Wind Speed:</strong> ${weather.wind} m/s</p>
//           `;
//           document.getElementById("weatherResult").innerHTML = html;
//         } else {
//           document.getElementById("weatherResult").innerHTML = "City not found in local data.";
//         }
//       }
//     };
//     xhr.send();
//   }
  
function getWeather(){
    const city = document.getElementById("cityInput").value
    console.log(city)
  const xmr = new XMLHttpRequest();
  
  xmr.open("GET","weather.json",true);

  xmr.onreadystatechange = function() {
    if(xmr.status == 200){
        const ele = document.getElementById("weatherResult")
        const res = JSON.parse(xmr.responseText);
        const data = res[city];
        const response = `<h1>${city}</h1>
        <h2>${data.temp}</h2>`;
        ele.innerHTML = response;
    }
  }

  xmr.send()
}