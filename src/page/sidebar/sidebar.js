import { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneUp, faUserCheck, faSquare } from '@fortawesome/free-solid-svg-icons';
import '../../styles/sidebar-style.css';

export function Sidebar() {
	const navRef = useRef();

	return (
		<header>
			<h3>USER</h3>
			<nav ref={navRef}>
				<div className="plane">
					<FontAwesomeIcon icon={faPlaneUp} />
				</div>
				<div className="user">
					<FontAwesomeIcon icon={faUserCheck} />
				</div>
				<div className="square-1">
					<FontAwesomeIcon icon={faSquare} />
				</div>
				<div className="square-2">
					<FontAwesomeIcon icon={faSquare} />
				</div>
				<div className="square-3">
					<FontAwesomeIcon icon={faSquare} />
				</div>
				<div className="square-4">
					<FontAwesomeIcon icon={faSquare} />
				</div>
				<a className="ovr-text" href="./home">Overview</a>
				<br>
				</br>
				<a className="att-text" href="./absen">Attendance</a>  
				<br>
				</br>
				<a className="lv-text" href="./leave">Leave</a>
				<br>
				</br>
                
			</nav>
			
		</header>
	);
}

export default Sidebar;