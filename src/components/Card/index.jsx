/* eslint-disable react/prop-types */

export const layoutType = {
    LIST: 'list',
    CARD: 'card'
}

/**
 * 
 * @param {layout} list 
 * @param {layout} card 
 * @returns 
 */
export function Card({ name, layout }) {
    return (
        <div>
            {layout === layoutType.CARD ?
              <h1 className="class do comoponete de cad">componente de card {name}</h1> : 
              <h1 className="class do componete de list">componente de list {name}</h1> 
            }
        </div>
    )
}