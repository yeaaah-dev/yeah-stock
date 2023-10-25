import styles from '../Button/Button.module.css'

export function Button(
    {label, buttonBackgroundOff, icon: Icon}
) {
    return (
        <div>
            <button className={buttonBackgroundOff === 'yes' ? `${styles['normal_button']} ${styles['background_off']}` : styles['normal_button'] }>

                <Icon /> 
                
                {label}

            </button>
        </div>
    )
}

