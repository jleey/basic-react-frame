import Navigation from '../Navigation/Navigation';
import logo from '../../assets/img/logo.png'
import { Link} from 'react-router-dom';

const Header =()=>{
return(
<header className="header">
    <div className="container">
<div className="header__logo">
<Link to="/">
<img src={logo} alt="Logo"/>
<span className="header__title">
React basic frame!</span></Link>
</div>
<Navigation /></div>
</header>

)
}
export default Header