import React, { createContext, useState } from 'react';
import axios from 'axios';

// Création du contexte
export const AuthContext = createContext();

// Provider de contexte pour gérer l'authentification
export const AuthProvider = ({ children }) => {
  // État pour stocker si l'utilisateur est connecté ou non
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // État pour stocker le rôle de l'utilisateur
  const [userRole, setUserRole] = useState(null);

  // Fonction pour effectuer la connexion
  const login = async (userData) => {
    try {
      // Effectuer la requête HTTP vers votre backend pour l'authentification
      const response = await axios.post('http://localhost:8080/login', userData);

      // Vérifier si la réponse contient le token JWT ou le rôle de l'utilisateur
      const { token, role } = response.data;

      // Mettre à jour l'état isLoggedIn et userRole en fonction de la réponse de l'API
      if (token) {
        setIsLoggedIn(true);
        setUserRole(role);
      } else {
        setIsLoggedIn(false);
        setUserRole(null);
      }
    } catch (error) {
      console.error('Erreur lors de l\'authentification :', error);
      setIsLoggedIn(false);
      setUserRole(null);
    }
  };

  // Fonction pour effectuer la déconnexion
  const logout = () => {
    // Mettre à jour l'état isLoggedIn et userRole
    setIsLoggedIn(false);
    setUserRole(null);
    // Effectuer d'autres opérations de déconnexion si nécessaire
  };

  return (
    // Fournir les états et fonctions aux composants enfants via le contexte
    <AuthContext.Provider value={{ isLoggedIn, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
