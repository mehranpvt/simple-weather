const API_KEY = 'cdf1f0fe0f5829bc3589735cf23f2d54';
const makeIcons = (iconId) => {
    return `https://openweathermap.org/img/wn/${iconId}@2x.png`;
}
export async function formattedWeatherData(city, units) {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

    const data = await fetch(URL).then((res) => res.json()).then((data) => data);

    const {
        weather, 
        main:{temp, feels_like, temp_min, temp_max, pressure, humidity}, 
        wind: {speed}, 
        sys: {country}, 
        name
    } = data

    const {description, icon} = weather[0]

    return {description, iconURL: makeIcons(icon), temp, feels_like, temp_min, temp_max, pressure, humidity, speed, country, name}
}