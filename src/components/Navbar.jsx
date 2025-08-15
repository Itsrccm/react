import '../index.css'

function Navbar(){
    const total = 25000;
const token = true;
    return(
        <div>
            <nav className="navbar">
        {token ? (
          <ul className="nav-list">
            <h2>Mamma Mia</h2>
            <li><a href="#">Home</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Logout</a></li>
            <li><a href="#">Total: {total.toLocaleString()}</a></li>
          </ul>
        ) : (
          <ul className="nav-list ">
            <h2>Mamma Mia</h2>
            <li><a href="#">Home</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Register</a></li>
            <li><a href="#">Total: {total.toLocaleString()}</a></li>
          </ul>
        )}
      </nav>


            
        </div>

 

)
}

export default Navbar