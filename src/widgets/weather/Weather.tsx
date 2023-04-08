import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { fetchByCityName } from '../../services'
import { Button, List, Title } from '../../components'
import { CurrentWeather } from '../../features'
import styles from './Weather.module.css'

export function Weather() {
  const inputCityRef = useRef<HTMLInputElement>(null)
  const [favoritCitys, setFavoritCitys] = useState<string[]>(['москва', 'санкт-петербург'])
  const [weatherData, setWeatherData] = useState<any>(null)
  const [changeCity, setChangeCity] = useState(true)
  const [inputCityValue, setInputCityValue] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    if (!inputCityRef.current) return

    inputCityRef.current.focus()
  }, [changeCity])

  const handleChangeInputCityValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputCityValue(e?.target?.value)

    setErrorMessage(null)
  }

  const handleSubmit = (e: FormEvent, value = inputCityValue) => {
    e.preventDefault()
    const city = value.trim().toLowerCase()

    if (city) {
      fetchByCityName(city)
        .then(data => {
          setWeatherData(data)
          setChangeCity(false)
          setFavoritCitys(prev => {
            if (prev.includes(city)) return prev
            if (prev.length >= 4) prev.splice(0, 1)
            return [...prev, city]
          })
        })
        .catch(e => {
          setErrorMessage('Такой город не найден')
        })
    } else {
      setErrorMessage('Поле обязательно для заполнения')
    }
  }

  return (
    <section className={styles.card}>
      {!changeCity ? (
        <CurrentWeather
          tempMax={+weatherData.main.temp_max}
          tempMin={+weatherData.main.temp_min}
          icon={weatherData.weather[0].icon}
          description={weatherData.weather[0].description}>
          <Title text={weatherData.name} handleClick={() => setChangeCity(true)} />
          <span className={styles.degree}>{Math.round(weatherData.main.temp)}℃</span>
        </CurrentWeather>
      ) : (
        <form
          onSubmit={handleSubmit}
          className={styles.form}>
          <div>
            <label>
              <input
                ref={inputCityRef}
                value={inputCityValue}
                onChange={handleChangeInputCityValue}
                className={styles.input} />
              <p className={`${errorMessage ? styles.error : styles.descriplion}`}>
                {errorMessage || 'Введите название города'}
              </p>
            </label>
            <Button>
              Проверить погоду
            </Button>
          </div>
          <div>
            <List list={favoritCitys} render={(city) => (
              <Button handleClick={() => setInputCityValue(city)} secondary>{city}</Button>
            )} />
          </div>
        </form>
      )}
    </section>
  )
}
