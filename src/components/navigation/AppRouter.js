import { Route, Routes } from 'react-router-dom'
import Footer from '../shared/Footer'
import Home from '../pages/HomeP'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import About from '../pages/About'

import Todolist from '../projects/todolist/TodoList'

export default function AppRouter() {
    return (
        <main className='vh-100 overflow-y-auto w-100'>
            <Routes>
                <Route path="/"         element={<Home />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/About"    element={<About />} />
                <Route path="/Contact"  element={<Contact />} />
                <Route path="/Todolist" element={<Todolist />} />
            </Routes>
            <Footer />
        </main>
    )
}