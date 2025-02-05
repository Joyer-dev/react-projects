import propTypes, { string } from 'prop-types'
function UserGreeting(props){

    return(props.isLoggedIn ? <h2 className="welcome-message">Welcome {props.name}</h2>:
        <h2 className="login-prompt">Please log in to continue</h2>
    );

}
UserGreeting.propTypes={
    isLoggedIn: propTypes.bool,
    name: propTypes.string
}
UserGreeting.defaultProps ={
    isLoggedIn: false,
    name: "Guest",
}
export default UserGreeting