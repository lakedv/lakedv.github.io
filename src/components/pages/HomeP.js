import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import { faHtml5 } from "@fortawesome/free-brands-svg-icons"
import { faCss3 } from "@fortawesome/free-brands-svg-icons"

export default function Home() {
    return (
        <span>
            <div>
                <h1 className='title-h1'>German Mirarchi Portfolio</h1>
                <div>
                <p className='home-text'>
                    Bienvenidos a mi Portfolio, el cual fue realizado con las herramientas React.JS<FontAwesomeIcon icon={faReact} />, HTML5 <FontAwesomeIcon icon={faHtml5} /> y CSS<FontAwesomeIcon icon={faCss3} />.<br/>
                    Aqui estare subiendo mis ultimos proyectos, mi curriculum vitae, mis ultimas experiencias laborales y un formulario de contacto para ofertas de trabajo.<br/>
                </p>
                </div>
            </div>
        </span>
    )
}