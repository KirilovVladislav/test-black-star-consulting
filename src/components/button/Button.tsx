import styles from './Button.module.css'

type Props = {
  handleClick?: () => void,
  secondary?: boolean,
  children: string,
}

export function Button({ handleClick, secondary, children }: Props) {
  return (
    <button
      onClick={handleClick}
      className={`${styles.button} ${secondary && styles.secondary}`}>
      {children}
    </button>
  )
}
