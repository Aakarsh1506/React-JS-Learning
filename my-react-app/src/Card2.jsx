import GOAT from './assets/Goat.jpeg'

function Card2(){
    return(
        <div className="Card2">
            <img className="Card2-img" src={GOAT} alt="The Footballing GOAT Lionel Messi" Width="150" Height="150"></img>
            <h2 className="Card2-name">Lionel Messi</h2>
            <p className="Card2-desc">The Greatest Football Player <br/> Hobby: Winning trophies</p>
        </div>
    );
}

export default Card2