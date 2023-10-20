import styles from '../sidebar/styles.module.css'
import logo from '../../assets/imgs/LOGO.svg'
import home from '../../assets/imgs/home.svg'
import trash from '../../assets/imgs/trash.svg'
import perfil from '../../assets/imgs/perfil.svg'
import config from '../../assets/imgs/config.svg'
import out from '../../assets/imgs/out.svg'

export function Sidebar() {

    return(
        <div className={styles['container']}>
           <div className={styles['logo']}>
              <img src={logo}/>  
           </div>
            
            <div className={styles['div-line']}>
              <div  className={styles['line']}>
              </div>  
            </div>

            

            <button className={styles['home']}> <img src={home} />Inicio</button>
            <div className={styles['buttons']}>
               <button className={styles['others']}> <img src={trash} /> Lixeira</button>              <button className={styles['others']}> <img src={perfil} /> Perfil</button>
            </div>
           
           
             <div className={styles['div-line-two']}>
                <div  className={styles['line']}>
                </div>  
             </div>
            
             <div className={styles['buttons']}>
                <button className={styles['others']}> <img src={config} /> Configuração</button>
                <button className={styles['othersRed']}> <img src={out} /> Sair</button>
             </div>

        </div>
    )
}