import './components.css'

function Header () {
    return (
        <div className='header'>
            <div className="logo">Ticket<span>Wave</span></div>
            <ul>
                <li>Find Events</li>
                <li>Create Events</li>
                <li>Help Center</li>
            </ul>
            <div className="pushToTheRight">
            <div className="inputWrapper">
                <input type="text" placeholder='Search...'/>
            </div>
            <div className="loginSignup">
                <div className="login">
                    Log In
                </div>
                <div className="signup">
                    Sign Up
                </div>
            </div>
            </div>
        </div>
    )
}

export default Header