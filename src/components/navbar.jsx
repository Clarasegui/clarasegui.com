import '../styles/navbar.css';
import Dropdown from '../components/dropdown';
import { Link } from 'react-router-dom';
import clientsList from '../datas/clients.js';
import editorialList from '../datas/editorials';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Navbar() {

    return (
        <div className="nav_container">
            <nav>
                <ul>
                    <li>
                        <Link to="/personnal_work">personnal work</Link>
                    </li>
                        <Dropdown
                            title="commissioned"
                            content={clientsList.map((client) => {
                                return (<li className="dropdown_li">{client.title}
                                </li>
                                )
                            })} />
                        <Dropdown
                            title="editorial"
                            content={editorialList.map((editorial) => {
                                return (<li className="dropdown_li">{editorial.title}
                                </li>
                                )
                            })} />
                    <li>
                        <Link to="/diary">diary</Link>
                    </li>
                    <li>
                        <Link to="/contact">contact</Link>
                    </li>
                    <FontAwesomeIcon icon={faInstagram} />
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;