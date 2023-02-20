import {Routes, Route, Link} from 'react-router-dom';
import logo from './images/logo.png';




function Footer() {
    return(
    <div className="footer">
        <div className='subfooter'>
        <div className="left_footer">
            <Link to="/"><img src={logo} className="fot logo"/></Link>
            <Link to="/producatori" className='fot'>Producatori</Link>
            <Link to="/nutriente" className="fot">Mediul Nutrient</Link>
        </div>
        <div className="right_footer">
            <Link to="/chromogenic" className="fot">Mediul Chromogenic</Link>
            <Link to="/laborator" className="fot">Echipament de Laborator</Link>
            <Link to="/diagnostica" className="fot">Diagnostica Moleculara</Link> 
        </div>
        </div>
        <span className="copiright">Copyright © 2023 Gmm Biotechnology All rights reserved.</span>
        
        
    </div>

    )
}
export default Footer;