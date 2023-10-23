/* eslint-disable react/prop-types */
import { useState } from 'react'
import styles from '../../components/Input/input.module.css'
import { List, SquaresFour } from '@phosphor-icons/react'

const buttonType = {
    typeOne: 'typeOne',
    typeTwo: 'typeTwo',
    typeThree: 'typeThree',
}

const iconType = {
    columns: 'columns',
    list: 'list',
}

export function Tab() {
    const [typeSelected, setTypeSelected] = useState(buttonType.typeOne)
    const [diplaySelected, setDisplaySelected] = useState(iconType.columns)

    return (
        <div className={styles['conteiner']}>
            <div className={styles['tabs']}>
                <button
                    className={typeSelected === buttonType.typeOne ? styles['btn-active-style'] : styles['btn-not-active-style']}
                    onClick={() => { setTypeSelected(buttonType.typeOne) }}
                >Tipo 1
                </button>
                <button
                    className={typeSelected === buttonType.typeTwo ? styles['btn-active-style'] : styles['btn-not-active-style']}
                    onClick={() => { setTypeSelected(buttonType.typeTwo) }}
                >Tipo 2
                </button>
                <button
                    className={typeSelected === buttonType.typeThree ? styles['btn-active-style'] : styles['btn-not-active-style']}
                    onClick={() => { setTypeSelected(buttonType.typeThree) }}
                > Tipo 3
                </button>
                {/* <div> 
                     <Card>
              </div>  */}
                {/* <div>
                       <Card>
                </div> */}
                {/* <div>
                    <Card>
                </div> */}
                <div className={styles['nav-list']}>
                    <SquaresFour
                        className={diplaySelected === iconType.columns ? styles['icon-active'] : styles['icon-not-active']}
                        onClick={() => { setDisplaySelected(iconType.columns) }}
                        size={28}>
                    </SquaresFour>
                    <List
                        className={diplaySelected === iconType.list ? styles['icon-active'] : styles['icon-not-active']}
                        onClick={() => { setDisplaySelected(iconType.list) }}
                        size={28}></List>
                </div>
            </div>

        </div>
    )
}