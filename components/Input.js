import { useState } from "react"

const Input = ({ type, textLabel, textError, required, htmlfor, valeur, setValeur, valeurError, setValeurError, errorPatern, firstSubmit, submitStatus, placeholder, mainColor, secondColor, textColor }) => {

    const [focus, setFocus] = useState(valeur === '' ? false : true)
    const [mainColorState] = useState(mainColor ? mainColor : '000')
    const [secondColorState] = useState(secondColor ? secondColor : 'fff')
    const [textColorState] = useState(textColor ? textColor : '000')

    return (
        <>
            <style jsx>
                {
                    `
                    .container {
                        display: flex;
                        flex-direction: column;
                        gap: 4px;
                    }

                    label{
                        width: fit-content;
                        color:#${textColorState}8;
                        line-height: 100%;
                        font-size: 14px;
                        font-family: UniLight;
                        cursor: text;
                        z-index: 0;
                        transform: translate(11px, 31px);
                        transition: transform .2s ease-out;
                    }
                    
                    #labelFocus {
                        color:#${textColorState};
                        cursor: default;
                        transform: translate(0px, 0px);
                    }
                    
                    .input {
                        width: 100%;
                        height: 40px;
                        padding: 12px 10px;
                        font-size: 14px;
                        font-family: UniLight;
                        outline: none;
                        color:#${textColorState};
                        background-color:#${secondColorState};
                        border:1px solid #${textColorState}6;
                        transition: border-radius .2s, border .2s, background-color .2s ease-out;
                        background-color: transparent;
                    }

                    .input:disabled{
                        background-color: #0001;
                        border: 1px solid #0059a7;
                    }
                    
                    .inputFocus {
                        border: 1px solid#${mainColorState};
                    }
                    .error{                        
                        color: #f00;
                        font-family: UniLight;
                        font-size: 12px;
                        line-height: 100%;
                        height:0px;
                        opacity:0;
                        transition: height .2s, opacity .2s ease-out
                    }
                    .errorVisible {
                        height:12px;
                        opacity:1;
                    }
                    .inputError {
                        border: 1px solid #f00;
                    }
                    `
                }
            </style>
            <div className='container'>
                <label id={focus ? 'labelFocus' : ''} htmlFor={htmlfor}>
                    {textLabel} {required ? '*' : ''}
                </label>
                {type === 'text' ?
                    <input required={required} type={type} id={htmlfor} name={htmlfor} disabled={submitStatus === 'valid' ? true : false} placeholder={placeholder ? placeholder : ''} onChange={e => { setValeur(e.target.value); !firstSubmit && (errorPatern.test(e.target.value) ? setValeurError(false) : setValeurError(true)) }} onFocus={() => setFocus(true)} onBlur={() => valeur === '' ? setFocus(false) : ''} value={valeur} className={`input ${valeurError && submitStatus === 'default' ? 'inputError' : focus && 'inputFocus'}`} />
                    :
                    <textarea required={required} type={type} id={htmlfor} name={htmlfor} disabled={submitStatus === 'valid' ? true : false} rows='5' placeholder={placeholder ? placeholder : ''} onChange={e => setValeur(e.target.value)} onFocus={() => setFocus(true)} onBlur={() => valeur === '' ? setFocus(false) : ''} value={valeur} className={`input ${focus && 'inputFocus'} `} style={{ resize: 'vertical', height: 'auto' }} />
                }
                <div className={`error ${valeurError && submitStatus === 'default' ? 'errorVisible' : ''}`}>{textError}</div>
            </div>
        </>

    )
}

export default Input