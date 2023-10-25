/* eslint-disable react/prop-types */
import styles from './style.module.css'

export function Button({ icon: Icon }) {
    return (
        <button className={styles.container}>
            <Icon />
            Button Component
        </button>
    )
}