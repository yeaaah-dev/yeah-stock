import styles from './style.module.css';
import PencilEdit from '../../assets/images/pencilEdit.svg'
import Icon_image from '../../assets/images/icon_image.svg'

function Card() {

    return (

        <div className={styles['container_Card']}>

            <div className={styles['content_Card']}>
                <img src={Icon_image} alt="imageProduct" />
                <span>JPG</span>
            </div>

            <div className={styles['product_name']}>
                <span>Calabresa de Tubarão Leitoa</span>
                <button><img src={PencilEdit} alt="Edit" /></button>
            </div>
            <div className={styles['description_Product']}>
                <div>
                    Quantily: <span>106</span>
                </div>
                <div>
                    Mesure un.: <span>106</span>
                </div>
            </div>


        </div>
    )
}

export default Card
