import { ReactNode } from 'react'
import styles from './Current-weather.module.css'

type Props = {
  children: ReactNode,
  tempMax: number,
  tempMin: number,
  icon: string,
  description: string,
}

const getIconUrl = (id: string) => `https://openweathermap.org/img/wn/${id}@2x.png`

export function CurrentWeather({ children, tempMax, tempMin, icon, description }: Props) {
  return (
    <>
      {children}
      <span className={styles.maxMin}>
        Макс.: {Math.round(tempMax)}º,
        Мин.: {Math.round(tempMin)}º
      </span>
      <div className={styles.weather}>
        <img
          src={getIconUrl(icon)}
          className={styles.icon} alt={description} />
        <span className={styles.descriplion}>
          {description}
        </span>
      </div>
    </>
  )
}
