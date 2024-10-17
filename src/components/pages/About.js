import imagePath2 from '../../resources/images/aboutphoto.jpeg'
import CV from '../../resources/docs/MGermanCVESP.pdf'


export default function About() {
    return (
        <div className="container">
        <h1 className='title-h1'>Sobre Mi</h1>
            <div className='row'>  
                <div  className="col w-50 col-md-auto">
                    <div>
                        <h5>Quien soy</h5>
                        <p>Hola, mi nombre es Germán Mirarchi. Soy un Desarrollador Jr. graduado como Analista de Sistemas en el Instituto de Formación Técnica Superior N° 16 en 2019. 
                            He estado desarrollando proyectos por mi cuenta para aprender nuevos lenguajes y mejorar mis habilidades de programación. 
                            Me encuentro abierto a nuevos desafíos y dejo mi CV para futuras consultas: <a href={CV} target="_blank" rel="noopener noreferrer">CV</a>
                        </p>
                    </div>
                    <div>
                        <h5>Tecnologias y Experiencias</h5>
                        <p>Mis habilidades principales son React.js y Node.js, aunque también tengo experiencia en PHP y VB.Net. En cuanto a bases de datos, tengo conocimientos tanto en bases de datos relacionales como no relacionales, específicamente en MySQL, SQL Server y Firebase.<br/>
                            En términos de experiencia laboral, puedo mencionar que tuve una capacitación en COBOL durante tres meses en 2020. 
                            Mi último contrato fue en el Grupo ACC, donde trabajé como telemarketer, liderando un equipo de 15 personas, organizando sus tiempos, descansos, métricas y descargas técnicas. 
                            También tengo experiencia como vendedor y en atención al público.</p>
                    </div>
                    <div>
                        <h5>Objetivos Laborales</h5>
                        <p>Mi objetivo principal es crecer como desarrollador, aumentar mi conocimiento en el campo y lograr una estabilidad económica. Me gustaría incursionar en nuevos lenguajes.</p>
                    </div>
                    <div>
                        <h5>Hobbies</h5>
                        <p>Para ser sincero, soy un apasionado de los videojuegos. Desde joven, no hay nada que me guste más que sentarme frente a la computadora y jugar. 
                            Esta pasión me llevó a interesarme por la programación, ya que me fascina entender cómo funcionan las cosas y tratar de replicarlo por mi cuenta. <br/>
                            También soy un coleccionista apasionado de Legos, especialmente de Star Wars, que es una de mis sagas favoritas. Además, trato de ser lo más cinéfilo posible. Otro de mis hobbies es pintar miniaturas de Games Workshop, actualmente en el universo de Warhammer 40k.</p>
                    </div>
                </div>
                <div className='col col-md-auto'>
                    <img
                        className="aboutImg"
                        src={imagePath2}
                        alt='about me'
                        style={{ width: "500px" }}
                    />
                </div>
            </div>
        </div>
    )
}