import styles from './Title.module.css'

type Props = {
  text: string,
  handleClick?: () => void,
}

export function Title({ text, handleClick }: Props) {
  return (
    <h2
      className={`${styles.title} ${text.length > 10 && styles.small}`}
      onClick={handleClick}>
      {text}
    </h2>
  )
}
