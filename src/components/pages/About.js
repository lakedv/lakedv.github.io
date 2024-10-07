import imagePath2 from '../../resources/images/aboutphoto.jpeg'
import CV from '../../resources/docs/MGermanCVESP.pdf'


export default function About() {
    return (
        <>
        <h1 className='title-h1'>Sobre Mi</h1>
            <div className='row'>
            
                <div className='six columns'>
                    <div>
                        <h5>Quien soy</h5>
                        <p>Hola, mi nobmre es German Mirarchi, soy un Desarrollador Jr graduado como Analista de sistemas en el Instituto de Formacion Tecnica Superior n16 en 2019,<br />
                            actualmente desarrollando proyectos por mi cuenta con fin de aprender nuevos lenguajes e incrementar mi habilidad de programacion. Vivo en Buenos Aires, Capital Federal,<br />
                            con mi hermana y sus mascotas. Me encuentro abierto a nuevos desafios y dejo mi cv para futuras consultas: <a href={CV}>CV</a>
                        </p>
                    </div>
                    <div>
                        <h5>Tecnologias y Experiencias</h5>
                        <p>Actualmente mis habilidades principales recaen en React.Js y Node.js, pero tambien tengo leve experiencia en PHP y VB.Net. En lo que abarca a Base de datos<br />
                            tengo experiencia tanto en base de datos relacionales como no relacionales, para ser mas especifico MySQL, SQLServer y Firebase.<br />
                            Como experiencias laborales puedo mencionar que tuve una capacitacion en Cobol durante unos 3 meses en 2020 y ultimamente estuve trabajando de lo que se pueda.<br />
                            Mi ultimo contrato fue en el grupo ACC, como telemarketer, encargado de un equipo de 15 personas, organizando sus tiempos, breaks, metricas y bajadas tecnicas.<br />
                            Tambien tengo experiencia como vendedor y un poco de atencion al publico.</p>
                    </div>
                    <div>
                        <h5>Objetivos Laborales</h5>
                        <p>Mis objetivos son principalmente crecer como desarrollador, incrementar mi conocimiento sobre el oficio y tambien una estabilidad economica. <br />
                            No tengo ningun problema de tener que aprender un nuevo lenguaje, tengo la capacidad de tomarme tiempo fuera de un trabajo como para aprenderlo.</p>
                    </div>
                    <div>
                        <h5>Hobbies</h5>
                        <p>Para ser sinceros soy un gamer apasionado, desde joven no hay otra cosa que me guste mas que sentarme en la computadora y jugar videojuegos.<br />
                            Eso tambien me llevo a lo que es mi pasion por la programacion, por ver como funciona el detras de las cosas y tratar de hacerlo funcionar por cuenta.<br />
                            Tambien tengo que mencionar que soy un coleccionista apacionado de los Legos, de Star Wars para ser especificos ya que es una de mis sagas favoritas, tambien trato de ser lo mas Cinefilo posible.<br />
                            Otro hobbie para mencionar seria pintar minuaturas de Games Workshop, actualmente en el setting de w40k.</p>
                    </div>
                </div>
                <div className='six columns'>
                    <img
                        className="aboutImg"
                        src={imagePath2}
                        alt='Photo about me'
                        style={{ width: "500px" }}
                    />
                </div>
            </div>
        </>
    )
}