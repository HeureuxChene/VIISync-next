import style from '../styles/error404.module.css'

const error404 = () => {
    return (
        <div id={style.error}>
            <div id={style.glitchContainer}>
                <h1 id={style.invisible404}>404</h1>
                <h1 className={style.glitched404}>404</h1>
                <h1 className={style.glitched404}>404</h1>
                <h1 className={style.glitched404}>404</h1>
            </div>
            <p id={style.textError}>Oups, cette page n'existe pas</p>
        </div>
    )
}

export default error404