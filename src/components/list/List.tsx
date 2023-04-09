import { ReactNode } from 'react'
import styles from './List.module.css'

type Props = {
  list: any[],
  render: (item: string) => ReactNode,
  row?: boolean,
}

export function List({list, render, row}: Props) {
  return (
    <ul
      className={`${styles.example} ${row && styles.rowDir}`}>
      {list.map(item => (
        <li key={item} className={styles.item}>
          {render(item)}
        </li>
      ))}
    </ul>
  )
}
