import Carousel from 'react-bootstrap/Carousel';
import Achievements from './Achievements';
const Achievement = () => {
  return (
    <div className='container-fluid'>
           <h2 className='text-center text-success'>Achievements</h2>
        <Carousel data-bs-theme="light bold">
          {
            Achievements.map((items)=>(
              <Carousel.Item>
                <img
                className="d-block w-100 projImage"
                src={items.pic}
                alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
                <h5>{items.name}</h5>
                <p>{items.summary}</p>
            </Carousel.Item>
            ))
          }
    </Carousel>
    </div>
  )
}

export default Achievement