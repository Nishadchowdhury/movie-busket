import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MovieList from './components/MovieList'
import Footer from './components/Footer'
import { useContext } from 'react'
import { ThemeContext } from './contexts'

export default function Page() {

    const { darkMode, setDarkMode } = useContext(ThemeContext);

    return (
        <div className={`${darkMode ? "dark" : ""}`}>

            <Header />

            <main>
                <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                    <Sidebar />
                    <MovieList />
                </div>
            </main>
            <Footer />

        </div>
    )
}
