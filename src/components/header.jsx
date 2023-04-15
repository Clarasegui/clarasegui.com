import '../styles/header.css';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="title_container">
                <Link to="/"><h1>c l a r a s e g u i</h1></Link>
            </div>
            <Navbar />
        </header>
    );
}

export default Header;