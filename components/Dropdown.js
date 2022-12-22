import { useState } from "react"

const Dropdown = ({ htmlfor, textValeurs, valeurs, valeur, setValeur, mainColor, secondColor, textColor }) => {

    const [scroll, setScroll] = useState(false)

    return (
        <>
            <style jsx>
                {
                    `
                    .dropdown {
                        position:relative;
                        cursor:pointer;
                        width:100%;
                        height:100%;
                        font-family: UniLight;
                        font-weight: bolder;
                    }
                    
                    .angleUp {
                        position:absolute;
                        top: 50%;
                        right: 5%;
                        height:20px;
                        width:20px;
                        rotate: -90deg;
                        translate: 0px -50%;
                        transition: rotate .2s ease-out;
                    }
                    
                    .angleUpFocus {
                        rotate: 90deg;
                    }
                    
                    input {
                        width:100%;
                        height: 100%;
                        font-size: 20px;
                        cursor:pointer;
                        color:#${textColor ? textColor : '000'};
                        border: none;
                        transition:background-color 0.2s, border 0.2s ease-out;
                    }
                    
                    
                    ul {
                        position:absolute;
                        top: 100%;
                        width: 100%;
                        overflow-y: hidden;
                        z-index: 1;
                        background-color:#${secondColor ? secondColor : 'fff'};
                        border-top:0px;
                        transition:height 0.2s,border 0.2s ease-out;
                    }
                    
                    li {
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        height: 100px;
                        font-size:20px;
                        cursor:pointer;
                        color:#${textColor ? textColor : '000'};
                        background-color:#${secondColor ? secondColor : 'fff'};
                        transition:background-color 0.1s ease-out;
                    }
                    
                    li:hover {
                        background-color:#${mainColor ? mainColor : '000'}2;
                    }
                    `
                }
            </style>
            <div className='dropdown' onClick={() => setScroll(!scroll)} onMouseLeave={() => setScroll(false)}>
                <svg className={`angleUp ${scroll ? 'angleUpFocus' : undefined}`} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" alt="">
                    <path d="m5.52 0 7.91 7.5-7.91 7.5-1.95-1.95 5.83-5.55-5.83-5.55z" />
                </svg>
                <input type='button' id={htmlfor} name={htmlfor} value={textValeurs ? textValeurs[valeur] : valeur} className={`valeur ${scroll || valeur !== '' ? 'inputFocus' : ''}`} />
                <ul className='liste' style={scroll ? { height: `${valeurs.length * 100 + 1}px` } : { height: '0px', border: '0px solid #0000' }}>
                    {
                        textValeurs ? (
                            valeurs.map((e, index) => {
                                return (
                                    <li key={index} onClick={() => { setValeur(e); setScroll(false) }}>
                                        {textValeurs[index]}
                                    </li>
                                )
                            })
                        ) : (
                            valeurs.map((e, index) => {
                                return (
                                    <li key={index} onClick={() => { setValeur(e); setScroll(false) }}>
                                        {e}
                                    </li>
                                )
                            })
                        )

                    }
                </ul>
            </div>
        </>
    )
}

export default Dropdown