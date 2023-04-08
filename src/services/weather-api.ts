const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather'
const APP_ID = 'a9059859f0a00f01809bb7e91eaca69b'

export const fetchByCityName = async (city: string) => {
  const res = await fetch(`${WEATHER_URL}?q=${city}&lang=ru&units=metric&appid=${APP_ID}`)

  if (res.ok) {
    const data = await res.json()
    return data
  }

  throw new Error(`HTTP error! status: ${res.status}`)
}
