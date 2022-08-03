import React from 'react'
import './navbar.css'
import Logo from '../../images/main_image_1.jpg'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light custom">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={Logo} alt='logo' height={50} width={200} /> </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item dropdown ">
                                <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Current Projects
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/GolfView">Golf View</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/LakeView">Lake View</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/FortView">Fort View</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/TirupatiTempleTown">Tirupati Temple Town</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="https://3d-model-two.vercel.app/">3D Project</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown ">
                                <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Completed Projects
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/comProjects">Ambience Fort</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/comProjects">Swapnalok</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/comProjects">Indralok</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/comProjects">Avenue</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/comProjects">Whisper Valley</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/comProjects">Walden Club</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/comProjects">Ambience Canton</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/comProjects">Ambience Anthem</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/comProjects">Tirupati Temple Town</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/comProjects">@ Kukapally-Emami</Link></li>
                                   
                                </ul>
                            </li>
                            <li className="nav-item dropdown ">
                                <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Future Projects
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/ThemeFortVista">Theme Fort Vista</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/ThemeCrest">Theme Crest</Link></li>
                                   
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/feedback">Feedback</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar