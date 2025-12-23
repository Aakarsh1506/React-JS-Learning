

function UserGreetings(props){
    
    if(props.isLoggedIn){
        return <h2 className="Welcome">Welcome {props.name}</h2>
    }
    else{
        return <h2 className="Log-In">Please Log In!</h2>
    }
    return null;
}

export default UserGreetings