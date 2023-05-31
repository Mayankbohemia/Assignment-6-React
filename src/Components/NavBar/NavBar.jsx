import "./NavBar.css"
function NavBar() {

    return (
        <div className="container">
            <img className="logo" src="https://seeklogo.com/images/H/hootsuite-logo-0B7A114A55-seeklogo.com.png" alt="" />
            <h4 className="nav__link">Platform</h4>
            <h4 className="nav__link">Plans</h4>
            <h4 className="nav__link">Enterprise</h4>
            <h4 className="nav__link">Resources</h4>
            <h4 className="nav__link">Education</h4>
            <div></div>
            <div className="nav__links">
            <h4 className="nav__link contact__info">Contact Us</h4>
            <h4 className="nav__link contact__info">Login</h4>
            <button className="signUp__button">Sign Up</button>

            </div>
        </div>
    )

}
export default NavBar