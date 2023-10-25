/* eslint-disable react/prop-types */
import styles from './styles.module.css'
import { layoutType } from '../Card'

// o onchage é uma função que é chamado toda vez que eu clico nos botões
export function Toggle({ onChange }) {
    return (
        <div className={styles.container}>
            <button onClick={() => onChange(layoutType.CARD)}>card</button>
            <button onClick={() => onChange(layoutType.LIST)}>list</button>
        </div>
    )
}