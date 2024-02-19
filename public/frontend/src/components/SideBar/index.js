import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Assurez-vous d'avoir un fichier CSS pour les styles

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <i className="far fa-calendar-alt calendar-icon"></i>
                <h2 className="sidebar-title">Planification des examens</h2>
            </div>
            <div className="sidebar-links">
                <Link to="planifier" className="link">
                    <i className="fas fa-calendar"></i>
                    Planifier
                </Link>
                <Link to="planifications" className="link">
                    <i class="fas fa-history"></i>
                    Les planifications
                </Link>
                <Link to="module" className="link">
                    <i class="fa fa-file"></i>
                    Module Exam
                </Link>
                <Link to="surveillant" className="link">
                    <i class="fa fa-user-tie"></i>
                    Surveillants Exam
                </Link>
                <Link to="fliliere" className="link">
                    <i className="fas fa-graduation-cap"></i>
                    Filière-Créneau
                </Link>
                <Link to="local" className="link">
                    <i class="fas fa-map-marker-alt"></i>
                    Local-Créneau
                </Link>
                <Link to="/" className="link">
                    <i class="fas fa-sign-out-alt"></i>
                    Déconexion
                </Link>
                
            </div>
            {/* Ajoutez les autres éléments de la barre latérale ici */}
        </div>
    );
};

export default SideBar;
