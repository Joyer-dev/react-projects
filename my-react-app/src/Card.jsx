import profilePic from './assets/unnamed.jpg';
function Card(){
    return(
        <div className="card">
            <img  className="card-image" alt="profile-picture" src={profilePic}></img>
            <h2 className="card-title">Joyer</h2>
            <p className="card-text">Computer Science </p>

        </div>
    );
}
export default Card