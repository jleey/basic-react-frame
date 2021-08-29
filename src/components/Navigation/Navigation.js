import { useState } from 'react';
import { Link} from 'react-router-dom';

const Navigation =(props)=>{
    const [isOpen, setOpen] =useState(false)
return(
    <nav className="navigation">
        <div className="navigation__trigger" onClick={e=>{setOpen(!isOpen)}}>
            Menü 
        </div>
        <div className={isOpen ? 'navigation__wrapper is-open': 'navigation__wrapper is-closed'} onClick={e=>{setOpen(!isOpen)}}>

        <ul className='navigation__list'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/styleguide">Styleguide</Link>
            </li>

        </ul></div>
    </nav>
)
}
export default Navigation