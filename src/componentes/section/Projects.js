import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card'
import lpdnc from '../../Image/projects/lpdnc.svg'
import portfolio from '../../Image/projects/portfolio.svg'

function Projects(){
    return(
        <div className={styles.projects} id='Projects'>
            <h1> Projetos </h1>
            
            <Card
                img={lpdnc} 
                title="  LP - DNC" 
                tech="HTML, CSS e JS" 
                description="Desenvolvmento de uma landing page para o lançamento da formação de tecnologia" 
                repo="https://github.com" 
                site="https://google.com"
            />
            
            <Card
            img={portfolio} 
            title="Portfólio React" 
            tech="React" 
            description="..." 
            repo="https://github.com" 
            site="https://google.com"
            />

            
            
            <ButtonB text='Acesse meu reptório' link='https://github.com'></ButtonB>
        </div>
    )
}

export default Projects