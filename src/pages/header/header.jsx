import style from '../header/header.module.css'
import RickAndMoryPhoto from '../../assets/images/RickAndMory.png'

export function Header () {
    return(
        <header>
            <div className={style['input-wrapper']}>
                    <button className={style['button-search']}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                        <path d="M9.89286 9L14.0357 13M6.44048 10.3333C3.7711 10.3333 1.60715 8.244 1.60715 5.66667C1.60715 3.08934 3.7711 1 6.44048 1C9.10986 1 11.2738 3.08934 11.2738 5.66667C11.2738 8.244 9.10986 10.3333 6.44048 10.3333Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                <input type="text" className={style['input-header']} placeholder="Pesquisar produto"/>
            </div>

            <div className={style['div-header']}>
                <button className={style['button-add']}>
                    + Adicionar produto
                </button>

                <button className={style['button-notification']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                        <path d="M12.0308 14.9204V15.9143C12.0308 17.5611 10.6959 18.896 9.04911 18.896C7.40236 18.896 6.06741 17.5611 6.06741 15.9143V14.9204M12.0308 14.9204H6.06741M12.0308 14.9204H15.5994C15.9796 14.9204 16.1706 14.9204 16.3246 14.8685C16.6186 14.7693 16.8487 14.5384 16.9479 14.2443C17 14.0898 17 13.8982 17 13.515C17 13.3473 16.9998 13.2635 16.9867 13.1835C16.9619 13.0324 16.9033 12.8892 16.814 12.7649C16.7668 12.6992 16.7069 12.6392 16.5887 12.521L16.2015 12.1338C16.0766 12.0089 16.0064 11.8395 16.0064 11.6628V7.96311C16.0064 4.12068 12.8915 1.00579 9.04911 1.0058C5.2067 1.00581 2.0918 4.1207 2.0918 7.96311V11.6628C2.0918 11.8395 2.02148 12.0089 1.89657 12.1338L1.50944 12.5209C1.39086 12.6395 1.33151 12.6991 1.28426 12.7649C1.19496 12.8892 1.13581 13.0324 1.11102 13.1835C1.0979 13.2635 1.0979 13.3473 1.0979 13.515C1.0979 13.8982 1.0979 14.0897 1.15003 14.2443C1.24922 14.5384 1.48035 14.7693 1.77441 14.8685C1.92836 14.9204 2.11865 14.9204 2.49886 14.9204H6.06741" stroke="white" stroke-width="1.39565" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>

                    <img src={RickAndMoryPhoto} alt="Photo-user"/>
            </div>
        </header>
    )
}

