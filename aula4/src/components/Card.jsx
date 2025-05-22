import screen from '../assets/crazyfrog.jpg'
import './Card.css'

export default function Card() {
    
    return (
        <div>
            <figure>
                <img src={screen} alt="Crazy Frog"></img>
                <figcaption>Crazy Frog</figcaption>
            </figure>
        </div>
    )
}