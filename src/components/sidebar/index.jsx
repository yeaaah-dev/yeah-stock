import React, { useState } from 'react';
import styles from '../sidebar/styles.module.css';
import logo from '../../assets/imgs/LOGO.svg';
import home from '../../assets/imgs/home.svg';
import trash from '../../assets/imgs/trash.svg';
import perfil from '../../assets/imgs/perfil.svg';
import config from '../../assets/imgs/config.svg';
import out from '../../assets/imgs/out.svg';

const buttonName = {
  START: 'start',
  TRASH: 'trash',
  PROFILE: 'profile',
  SETTINGS: 'settings',
  EXIT: 'exit'
};

export function Sidebar() {
  const [buttonSelected, setButtonSelected] = useState(buttonName.START);

  return (
    <div className={styles['container']}>
      <div className={styles['logo']}>
        <img src={logo} alt="Logo" />
      </div>

      <div className={styles['div-line']}>
        <div className={styles.line}></div>
      </div>

      <div className={styles['buttons']}>
        <button
          className={buttonSelected === buttonName.START ? styles['button-selected'] : styles['button-not-selected']}
          onClick={() => setButtonSelected(buttonName.START)}
        >
          <img src={home} alt="Home" />
          Inicio
        </button>
        <button   
        className={buttonSelected === buttonName.TRASH ? styles['button-selected'] : styles['button-not-selected']}
        onClick={() => setButtonSelected(buttonName.TRASH)}
        >
          <img src={trash} alt="Lixeira" />
          Lixeira
        </button>
        <button
        className={buttonSelected === buttonName.PROFILE ? styles['button-selected'] : styles['button-not-selected']}
        onClick={() => setButtonSelected(buttonName.PROFILE)}
        >
          <img src={perfil} alt="Perfil" />
          Perfil
        </button>
      </div>

      <div className={styles['div-line-two']}>
        <div className={styles['line']}></div>
      </div>

      <div className={styles['buttons']}>
        <button
        className={buttonSelected === buttonName.SETTINGS ? styles['button-selected'] : styles['button-not-selected']}
        onClick={() => setButtonSelected(buttonName.SETTINGS)}
        >
          <img src={config} alt="Configuração" />
          Configuração
        </button>
        <button
        
        className={`${buttonSelected === buttonName.EXIT ? styles['button-selected'] : styles['button-not-selected']} red`}
        onClick={() => setButtonSelected(buttonName.EXIT)}
        >
          <img src={out} alt="Sair" />
          Sair
        </button>
      </div>
    </div>
  );
}