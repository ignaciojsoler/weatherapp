//DOM variables:

//Intro screen
const $introScreen = document.querySelector(".intro-screen-box");
const $welcomeTitle = document.querySelector(".welcome-title");
const $searchButton = document.querySelector(".searcher__btn");
const $searchButtonBack = document.querySelector(".searcher__btn-back");
const $searcher__formControl = document.querySelector(".searcher__form-control");

//Todays weather
const $mainContainer = document.querySelector(".main-container");
const $location = document.querySelector(".location-and-date__location");
const $todaysDate = document.querySelector(".location-and-date__date");
const $currentTemperatureValue = document.querySelector(".current-temperature__value");
const $currentTemperatureDescription = document.querySelector(".current-temperature__summary");
const $currentTemperatureIcon = document.querySelector(".current-temperature__img-container");
const $currentStatsMax = document.querySelector(".current-stats__value-max");
const $currentStatsFeelsLike = document.querySelector(".current-stats__value-feels-like");
const $currentStatsHumidity = document.querySelector(".current-stats__value-humidity");
const $currentStatsMin = document.querySelector(".current-stats__value-min");
const $currentStatsPressure = document.querySelector(".current-stats__value-pressure");
const $currentStatsWind = document.querySelector(".current-stats__value-wind");

//Date variables
const today = new Date();
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let date = `${days[today.getDay()]} ${today.getDate()}, ${months[today.getMonth()]}`;




//Functions

//Function to display the weather right now
function displayTodaysWeather(weather) {
    //Variables
    const name = weather.name;
    const country = weather.sys.country;
    const currentTemperatureValue = parseInt(weather.main.temp);
    const currentTemperatureDescription = weather.weather[0].description;
    const currentTemperatureIcon = weather.weather[0].icon;
    const currentStatsMax = parseInt(weather.main.temp_max);
    const currentStatsFeelsLike = parseInt(weather.main.feels_like);
    const currentStatsHumidity = parseInt(weather.main.humidity);
    const currentStatsMin = parseInt(weather.main.temp_min);
    const currentStatsPressure = parseInt(weather.main.pressure);
    const currentStatsWind = weather.wind.speed;


    //innerHTML
    $location.innerHTML = `${name}, ${country}`;
    $todaysDate.innerHTML = date;
    $currentTemperatureValue.innerHTML = `${currentTemperatureValue}°`;
    $currentTemperatureDescription.innerHTML = currentTemperatureDescription;
    $currentTemperatureIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${currentTemperatureIcon}@2x.png" alt="" class="current-temperature__img img-fluid">`
    $currentStatsMax.innerHTML = `${currentStatsMax}°`;
    $currentStatsFeelsLike.innerHTML = `${currentStatsFeelsLike}°`;
    $currentStatsHumidity.innerHTML = `${currentStatsHumidity}%`;
    $currentStatsMin.innerHTML = `${currentStatsMin}°`;
    $currentStatsPressure.innerHTML = `${currentStatsPressure} mb`;
    $currentStatsWind.innerHTML = `${currentStatsWind} mph`;
}


//Display next 5 days weather
const displayNext5DaysWeather = async (weather) => {

    //Function to return the days of the week
    function showMeTheDays(date) {
        if (date > 6) {
            date = date - 7;
            return days[date];
        } else {
            return days[date];
        }
    }

    //Mobile next 5 days
    for (let i = 1; i < 6; i++) {
        //DOM Elements
        const $next5DaysMobileRow = document.querySelector(".next-5-days-mobile__row");
        const $next5DaysMobileCol = document.createElement("div");
        $next5DaysMobileCol.classList.add("next-5-days-mobile__col", "col", "rounded", "mx-1", "py-2", "text-center");
        const $next5DaysMobileDay = document.createElement("div");
        $next5DaysMobileDay.classList.add(".next-5-days-mobile__day")
        const $next5DaysMobileIcon = document.createElement("div");
        $next5DaysMobileIcon.classList.add(".next-5-days-mobile__icon")
        const $next5DaysMobileTemperature = document.createElement("div");
        $next5DaysMobileTemperature.classList.add(".next-5-days-mobile__temperature");

        //Variables
        const next5DaysMobileDay = showMeTheDays(today.getDay() + (i)).substr(0, 3);
        $next5DaysMobileDay.innerHTML = next5DaysMobileDay;
        const next5DaysMobileIcon = weather.list[i * 7].weather[0].icon;
        $next5DaysMobileIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${next5DaysMobileIcon}@2x.png" alt="" srcset="" class="img-fluid my-2">`;
        const next5DaysMobileTemperature = parseInt(weather.list[i * 7].main.temp) + '°';
        $next5DaysMobileTemperature.innerHTML = next5DaysMobileTemperature;

        //AppendChild
        $next5DaysMobileRow.appendChild($next5DaysMobileCol);
        $next5DaysMobileCol.appendChild($next5DaysMobileDay);
        $next5DaysMobileCol.appendChild($next5DaysMobileIcon);
        $next5DaysMobileCol.appendChild($next5DaysMobileTemperature);

    }


    //Desktop next 5 days
    for (let i = 1; i < 6; i++) {
        //DOM Elements
        const $next5DaysDesktopGrid = document.querySelector(".next-5-days__grid");
        const $next5DaysDesktopRow = document.createElement("div");
        $next5DaysDesktopRow.classList.add(".next-5-days__row", "next-5-days__row-bg", "rounded", "row", "align-items-center", "my-2");
        const $next5DaysDesktopDate = document.createElement("div");
        $next5DaysDesktopDate.classList.add("next-5-days__date", "text-center");
        const $next5DaysDesktopIcon = document.createElement("div");
        $next5DaysDesktopIcon.classList.add("next-5-days__icon", "text-center");
        const $next5DaysDesktopMin = document.createElement("div");
        $next5DaysDesktopMin.classList.add("next-5-days__min", "text-center")
        const $next5DaysDesktopMax = document.createElement("div");
        $next5DaysDesktopMax.classList.add("next-5-days__max", "text-center")
        const $next5DaysDesktopWind = document.createElement("div");
        $next5DaysDesktopWind.classList.add("next-5-days__wind", "text-center")
        const $next5DaysDesktopHumidity = document.createElement("div");
        $next5DaysDesktopHumidity.classList.add("next-5-days__humidity", "text-center");

        //Variables
        const next5DaysDesktopDate = showMeTheDays(today.getDay() + (i));
        $next5DaysDesktopDate.innerHTML = next5DaysDesktopDate;
        const next5DaysDesktopIcon = weather.list[i * 7].weather[0].icon;
        $next5DaysDesktopIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${next5DaysDesktopIcon}@2x.png" alt="" srcset="" class="img-fluid">`;
        const next5DaysDesktopMin = parseInt(weather.list[i * 7].main.temp_min);
        $next5DaysDesktopMin.innerHTML ="Min: " + next5DaysDesktopMin + "°";
        const next5DaysDesktopMax = parseInt(weather.list[i * 7].main.temp_max);
        $next5DaysDesktopMax.innerHTML ="Max: " + next5DaysDesktopMax + "°";
        const next5DaysDesktopWind = weather.list[i * 7].wind.speed;
        $next5DaysDesktopWind.innerHTML ="Wind: " + next5DaysDesktopWind + " mph";
        const next5DaysDesktopHumidity = weather.list[i * 7].main.humidity;
        $next5DaysDesktopHumidity.innerHTML ="Humidity: " + next5DaysDesktopHumidity + "%";

        const next5DaysArray = [$next5DaysDesktopDate, $next5DaysDesktopIcon, $next5DaysDesktopMin, $next5DaysDesktopMax, $next5DaysDesktopWind, $next5DaysDesktopHumidity]

        //AppendChild
        $next5DaysDesktopGrid.appendChild($next5DaysDesktopRow);
        next5DaysArray.forEach((e) => {
            const $next5DaysDesktopCol = document.createElement("div");
            $next5DaysDesktopCol.classList.add("next-5-days__col", "col-2");
            $next5DaysDesktopRow.appendChild($next5DaysDesktopCol);
            $next5DaysDesktopCol.appendChild(e)
        })
    }
}



//Display the todays weather by hour
function displayTodaysWeatherByHour(weather) {

    for (let i = 0; i < 8; i++) {
        //DOM Elements
        const $weatherByHourRow = document.querySelector(".weather-by-hour__row");
        const $weatherByHourCol = document.createElement("div");
        $weatherByHourCol.classList.add("weather-by-hour__col", "col", "rounded", "mx-1", "py-2", "text-center");
        const $weatherByHourTime = document.createElement("div");
        $weatherByHourTime.classList.add("weather-by-hour__hour");
        const $weatherByHourIcon = document.createElement("div");
        $weatherByHourIcon.classList.add("weather-by-hour__icon");
        const $weatherByHourTemperature = document.createElement("div");
        $weatherByHourTemperature.classList.add("weather-by-hour__temperature");

        //Variables
        const weatherByHourTimeCalc = () => {
            const weatherByHourTime = weather.list[i].dt_txt.split(" ")[1].split(":")[0];
            if (weatherByHourTime < 12) {
                return weatherByHourTime + " am";
            } else {
                return weatherByHourTime + " pm";
            }
        }

        const weatherByHourTime = weatherByHourTimeCalc();
        $weatherByHourTime.innerHTML = weatherByHourTime;
        const weatherByHourIcon = weather.list[i].weather[0].icon;
        $weatherByHourIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${weatherByHourIcon}@2x.png" alt="" srcset="" class="weather-by-hour__img img-fluid">`;
        const weatherByHourTemperature = parseInt(weather.list[i].main.temp);
        $weatherByHourTemperature.innerHTML = weatherByHourTemperature + "°";

        //AppendChild
        $weatherByHourRow.appendChild($weatherByHourCol);
        $weatherByHourCol.appendChild($weatherByHourTime);
        $weatherByHourCol.appendChild($weatherByHourIcon);
        $weatherByHourCol.appendChild($weatherByHourTemperature);
    }
}


//APIs
const getWeatherData = async (city) => {

    
    //Todays Weather data
    const apiKey = "a98150099f316586d687d5d4497c227a"
    const todayRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`, {
        "method": "GET",
    })
    const todayData = todayRes.json();
    displayTodaysWeather(await todayData);

    //Next 5 days weather data
    const next5DaysRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`, {
        "method": "GET",
    })
    const next5DaysData = next5DaysRes.json();
    displayNext5DaysWeather(await next5DaysData);
    displayTodaysWeatherByHour(await next5DaysData);

    //Hide intro title
    $welcomeTitle.classList.add("d-none");
    $introScreen.classList.remove("vh-100")
    $mainContainer.classList.remove("d-none");
    $searchButtonBack.classList.remove("d-none");
    $searcher__formControl.classList.add("d-none");
    $searchButton.classList.add("d-none");
}

//Button
const button = document.querySelector("#search-button");
button.addEventListener("click", () => {
    const city = document.querySelector(".searcher__form-control").value;
    const regexp = /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/;
    if (regexp.test(city)) {
        getWeatherData(city);
    } else {
        alert("Enter a valid city")
    }
})
