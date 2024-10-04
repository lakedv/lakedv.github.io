import { Link } from 'react-router-dom';
import imagePath from "../../resources/images/toDoList.png"

export default function Projects() {

    return (
            <div>
                <h1 className='title-h1'>Projects</h1>
                <div>
                    <h5>To do List:</h5>
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