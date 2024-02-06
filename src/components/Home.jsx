import React from 'react'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import About from './About'
import Achievement from './Achievement'
import Footer from './Footer'
const Home = () => {
return (
    <>
        <div className='container-fluid'>
        <div className="row home">
            <p className='m-auto w-20rem'>Hi, I'm James a Passionate Software DEVELOPER</p>
        </div>
    </div>
        <About/>
        <Skills/>
        <Projects/>
        <Achievement/>
        <Contact/>
        <Footer/>
        
    </>
)
}
export default Home