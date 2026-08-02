import profilePic from './assets/me.jpg';

function Card() {
    return (
        <div className='card'>
            {/* <img src="https://via.placeholder.com/150" alt="My own pic" /> */}

            <img className='card-image' src={profilePic} alt="My own pic" />
            <h2 className='card-title'>Arun Pandey</h2>
            <p className='card-text'>I love Java coding</p>
        </div>
    );
}

export default Card;