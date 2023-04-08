import styles from './Title.module.css'

type Props = {
  text: string,
  handleClick?: () => void,
}

export function Title({ text, handleClick }: Props) {
  return (
    <h2 className={styles.title} onClick={handleClick}>
      {text}
    </h2>
  )
}
