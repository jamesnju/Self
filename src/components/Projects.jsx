import Carousel from 'react-bootstrap/Carousel';
import Data from './Data';


const Projects = () => {
  return (
    <div className='container-fluid'>
      <h2 className='text-center text-success'>Projects</h2>
        <Carousel data-bs-theme="light bold">
          {
            Data.map((items)=>(
              <Carousel.Item>
                <img
                className="d-block w-100 projImage"
                src={items.image}
                alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
                <h5>{items.title}</h5>
                <a href={items.link}>Click to view</a>
            
            </Carousel.Item>
            ))
          }
    </Carousel>
    </div>
)
}

export default Projects