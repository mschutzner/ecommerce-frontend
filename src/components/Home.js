import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import imageOne from '../images/slide-one.jpg';
import imageTwo from '../images/slide-two.jpg';
import imageThree from '../images/slide-three.jpg';
import { Link } from 'react-router-dom';

export default function Home(){
    return (
        <div className="home-wrapper">
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={imageOne}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={imageTwo}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={imageThree}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <h1 className="home-header">Your Logo</h1>
            <p className="home-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus, nunc id blandit auctor, velit elit bibendum diam, at egestas nulla urna non enim. Nunc laoreet orci pellentesque sem suscipit facilisis. Sed efficitur quam a purus venenatis consequat.
            </p>
            <Link to="/products" className="get-started-button">Get Started</Link>
        </div>
    )
}