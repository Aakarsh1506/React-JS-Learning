import profilePic from './assets/Profile.jpeg'

function Card(){
    return(
        <div className="Card">
            <img className="Card-Image" src={profilePic} alt="Profile Picture" width="150" height="150"></img>
            <h2 className="Card-Title">Aakarsh Singh</h2>
            <p className="Card-Desc">First Year B.Tech IT Student<br/> Hobby: Playing Football</p>
        </div>
    );
}

export default Card
