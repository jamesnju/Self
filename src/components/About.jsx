import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'
import Image from '../images/james.jpg'
import Resume from '../images/Resume.pdf'


const About = () => {
  return (
    <div className='container-fluid about'>
        <div className="row d-block">
            <div className="col-sm-4">
            {/* <h2 className='text-center text-success text-underline'>About</h2> */}
            <img src={Image} className='img-responsive' alt="" />
            </div>
            <div className="aboutme col-sm-4">
            <h1 className='text-center text-success text-decoration-underline'>About Me</h1>
            <p>I am a passionate frontend developer commitment to creating engaging and user-friendly web experiences. With a foundation
                in HTML, CSS, JavaScript, and Reactjs framework I bring creativity and technical expertise to every project.
                I take pride in writing clean and maintainable code. User experience is paramount
                in my development philosophy, and I am dedicated to creating websites that not only meet but exceed user expectations.
            </p>
            </div>
            <div className="aboutme col-sm-4">
            <h2 className='text-center text-success text-decoration-underline'>Career Objective</h2>
            <p>                 
            As a creative and detail-oriented front-end developer, I'm driven to craft beautiful, user-centric web experiences. 
            I thrive on translating designs into pixel-perfect realities using the latest HTML, CSS, and JavaScript frameworks.
            My goal is to leverage my strong technical skills and problem-solving abilities to build
            innovative interfaces. I'm eager to collaborate
            with a forward-thinking team to push the boundaries of web development and shape the future of digital experiences              
            </p>
            </div>
                {/* text  to  animate */}
                <div className="moving-text-container">
                  <h4 className="moving-text text-danger">Click to download Resume</h4>
                </div>
            <div className="cv">
              <a href={Resume} download>
                  <button className="button s-button">Download Resume</button>
              </a>
            </div>
        </div>
       
    </div>
  )
}

export default About