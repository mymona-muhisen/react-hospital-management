import { House, Hospital, MagnifyingGlass } from '@phosphor-icons/react'; 

import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <button className="icon" onClick={() => navigate("/")}>
                <House size={32} />
            </button>
            <button className="icon" onClick={() => navigate("/patients")}>
                <Hospital size={32} />
            </button>
            <div>
                <button className="icon">
                    <MagnifyingGlass size={32} />
                </button>
            </div>
        </div>
    );
}