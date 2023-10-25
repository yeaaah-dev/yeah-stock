import style from '../header/header.module.css'
import RickAndMoryPhoto from '../../assets/images/RickAndMory.png'
import {Bell, MagnifyingGlass} from 'phosphor-react'

export function Header () {
    return(
        <header>
            <div className={style['input-wrapper']}>
                    <button className={style['button-search']}>
                        <MagnifyingGlass size={16} />
                    </button>
                <input type="text" className={style['input-header']} placeholder="Pesquisar produto"/>
            </div>

            <div className={style['div-header']}>
                <button className={style['button-add']}>
                    + Adicionar produto
                </button>

                <button className={style['button-notification']}>
                    <Bell size={32} />        
                </button>

                    <img src={RickAndMoryPhoto} alt="Photo-user"/>
            </div>
        </header>
    )
}

