import { Link } from 'react-router-dom';

export default function Projects() {

    return (
        <>
            <h1>Projects</h1>
            <div className="projectContainer">
                <div>
                    <Link to='/Todolist'>To do List</Link>
                </div>
            </div>
        </>
    )
}