var API_KEY = "d6fa2142a8d6dc8c627e9c16f3dffdfd";

function fetchWeather(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`)
        .then((response) => {
            return response.json();
        }).then((data) => {
            console.log("Data : ", data);

            let tempKelvin = data.main.temp;
            let tempCelsius = tempKelvin - 273.15;

            document.getElementById("temp").innerText = tempCelsius.toFixed(2) + "°C";
            
            document.getElementById("city").innerText = data?.name;
            document.getElementById("wind").innerText = data?.wind?.speed + " km/h";
            document.getElementById("humidity").innerText = data?.main?.humidity;
        })
}

let searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", () => {
    let city = document.getElementById("inputSearch").value;
    console.log(city);
    fetchWeather(city);
})