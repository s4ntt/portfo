import styles from './Skills.module.css'
import javascript from '../../Image/skills/javascript.svg'
import html from '../../Image/skills/html.svg'
import css from '../../Image/skills/css.svg'
import react from '../../Image/skills/react.svg'

function Skills(){
    return(
        <div className={styles.skill} id='Skills'>
            <h1> Habilidades </h1>
            <p>Conheça um pouco das minhas habilidades e conhecimentos.</p>
            <div>
                <img src={javascript} alt="Error"/>
                <img src={html} alt="Error"/>
                <img src={css} alt="Error"/>
                <img src={react} alt="Error"/>
            </div>
        </div>
    )
}

export default Skills