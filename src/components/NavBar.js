var React = require('react');

var NavBar = React.createClass({
    render: function (){
        return<div>
            navbar
        </div>
    }
});

module.exports = NavBar;

function NavBar() {
    return (
             <div className="Navbar">
                <header className="App-header">
                <a
            className="NavBar-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
                >
                <div id="root"></div>
         <ul id="dropdown1" class="dropdown-content">
    <li><a href="#!">Sombras</></li>
    <li><a href="#!">Bases</a></li>
    <li class="divider"></li>
    <li><a href="#!">Pinceles</a></li>
        </ul>
        <nav>
        <div class="nav-wrapper">
            <a href="#!" class="brand-logo">Shulai TIENDA</a>
            <ul class="right hide-on-med-and-down">
                <li><a href="#">Paletas Nacionales</a></li>
                <li><a href="#">Pre Makeup</a></li>
                <li><a href="#">Pinceles</a></li>
                <li><a href="#">Stock</a></li>

            </ul>
      
      </div>
    </nav>

</a>
        </header>
      </div>
    );
  export default NavBar;

