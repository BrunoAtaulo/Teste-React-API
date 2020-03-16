import React from 'react';
import './styles.css';

/* Mesma coisa que o Stateless component abaixo
class Header extends Component{
    render(){
        return <h1>Hello</h1>
    }
} */

// Stateless components
const Header = () => <header id="main-header"> JSHunt</header>;

export default Header;