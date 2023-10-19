import React from "react";
import styles from './Modal.module.css';
import { X } from "@phosphor-icons/react";
import FOTO from '../../assets/FOTO.png';
import EDITICON from '../../assets/Edit.svg';
import TRASHICON from '../../assets/Trash.svg'

function Modal(
    {name, 
    quantity, 
    measureUnity, 
    purchasePrice, 
    salePrice, 
    currency, 
    provider, 
    active}
    ) {

    return(
        <section className={styles['modal_section']}>
            <div className={styles['modal_content']}>
                <div className={styles['modal_header']}>
                    <button>
                        <X size={19} color="#FFFFFF" />
                    </button>
                </div>

                <div className={styles['modal_title']}>
                    <h1>Detalhes do produto</h1>
                </div>

                <div className={styles['product_info']}>
                    <span>
                        Name: <span className={styles['info_value']}>{name ? name : 'Calabresa de Tubarão Leitoa'}</span>
                    </span>

                    <span>
                        Quantity: <span className={styles['info_value']}>{quantity ? quantity : 106}</span>
                    </span>

                    <span>
                        Measure unity: <span className={styles['info_value']}>{measureUnity ? measureUnity : 106}</span>
                    </span>

                    <span>
                        Purchase price: <span className={styles['info_value']}>{purchasePrice ? purchasePrice : 535}</span>
                    </span>

                    <span>
                        Sale Price: <span className={styles['info_value']}>{salePrice ? salePrice : 512}</span>
                    </span>

                    <span>
                        Currency: <span className={styles['info_value']}>{currency ? currency : 'Unity'}</span>
                    </span>

                    <span>
                        Fornecedor: <span className={styles['info_value']}>{provider ? provider : 'Hugostoso'}</span>
                    </span>

                    <span>
                        Active: <span className={styles['info_value']}>{active ? active : 'yes or no'}</span>
                    </span>
                </div>

                <div className={styles['product_image']}>
                    <img src={FOTO} alt="" />
                </div>

                <div className={styles['subtitle']}>
                    <h2>Descrição:</h2>
                </div>

                <div className={styles['product_description']}>
                    <textarea type="text" placeholder="Calabresa de tubarão leitoa enrolada com tripa de camarão boi, origem da Amazônia, perto do lago Ness." />
                </div>

                <div className={styles['buttons_div']}>
                    <button className={styles['edit_button']}>
                        <img src={EDITICON} alt="" /> Editar
                    </button>

                    <button className={styles['delete_button']}>
                        <img src={TRASHICON} alt="" /> Excluir
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Modal