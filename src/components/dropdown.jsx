import '../styles/dropdown.css';
import { useState } from 'react';

function Dropdown({ title, content, className }) {

    const [isShown, setIsShown] = useState(false);

    return (
        <li>
            <div className="dropdown_title_container">
                <div className="dropdown_title" onClick={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}>
                    {title}{' '}
                </div>
            </div>
            <div className={isShown ? 'dropdown_content' : 'dropdown_content_hidden'} onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}>
                {content}
            </div>
            </li>
    );
}

export default Dropdown;