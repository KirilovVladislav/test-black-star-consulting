import { ReactNode } from 'react'
import styles from './List.module.css'

type Props = {
  list: any[],
  render: (item: string) => ReactNode,
}

export function List({list, render}: Props) {
  return (
    <ul className={styles.example}>
      {list.map(item => (
        <li key={item} className={styles.item}>
          {render(item)}
        </li>
      ))}
    </ul>
  )
}
