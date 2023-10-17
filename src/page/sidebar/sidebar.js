import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneUp, faUserCheck, faSquare } from '@fortawesome/free-solid-svg-icons';
import '../../styles/sidebar-style.css';
import jwt_decode from 'jwt-decode';
import { Link } from 'react-router-dom';

export function Sidebar() {
	const navRef = useRef();
	const jwtToken = localStorage.getItem('token');

	const getUserNameFromToken = () => {
		if (jwtToken) {
			const decodedToken = jwt_decode(jwtToken);
			return decodedToken.name;
		}
		return '';
	};

	const getRoleFromToken = () => {
		const jwtToken = localStorage.getItem('token');
		if (jwtToken) {
			const decodedToken = jwt_decode(jwtToken);
			return decodedToken.role;
		}
		return '';
	};

	const userName = getUserNameFromToken();

	// Role user didapatkan dari token atau dari API
	const userRole = getRoleFromToken(); 

	const menus = [
		{ name: 'Home', url: '/home', roles: ['staff', 'hr', 'hd'] },
		{ name: 'Attendance', url: '/absen', roles: ['staff', 'hd', "hr"] },
		{ name: 'Leave', url: '/leave', roles: ['staff', "hr"] },
		{ name: 'Home', url: '/home-hr', roles: ['hr'] },
		{ name: 'Leave', url: '/leave-hd', roles: ['hd'] },
		// Tambahkan menu sesuai peran pengguna di sini
	];

	return (
		<header>
			<h3 className="h3h3">{userName || 'USER'}</h3>
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
				{/* Tampilkan menu sesuai peran pengguna */
					menus.map((menu, index) => {
						let className = '';

						if (menu.roles.includes(userRole)) {
							// Tentukan class name berdasarkan menu
							if (menu.url === '/absen') {
								className = 'att-text';
							} else if (menu.url === '/leave' || menu.url === '/request') {
								className = 'lv-text';
							} else if (menu.url === '/leave-hd') {
								className = 'lv-text';
							} else {
								className = 'ovr-text';
							}

							return (
								<Link key={index} to={menu.url} className={className}>
									{menu.name}
								</Link>
							);
						} else {
							return null;
						}
					})}
			</nav>
		</header>
	);
}

export default Sidebar;
