import { Link } from 'react-router-dom';
import imagePath from "../../resources/images/toDoList.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';


export default function Projects() {

    return (
            <div>
                <h1 className='title-h1'>Projects</h1>
                <div>
                    <h5>To do List:</h5>
                    <p>Consta de un organizador de tareas por realizar con multiples funciones.
                        <br/>
                        Herramientas utilizadas: 
                        <ul>
                            React JS <FontAwesomeIcon icon={faReact} /><br/>
                            HTML5 <FontAwesomeIcon icon={faHtml5} /> <br/>
                            CSS <FontAwesomeIcon icon={faCss3} /><br/>
                            Local Storage
                        </ul>
                    </p>

                    <Link to='/Todolist'>
                        <img 
                        className="todoImg"
                        src={imagePath}
                        alt='To Do List Application Screenshot'
                        style={{ width: "500px", height: '250px', }}
                        />
                    </Link>
                </div>
            </div>
    )
}