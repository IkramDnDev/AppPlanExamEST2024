import React, { useState } from 'react';
import "./style.css"

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            // Effectuer une requête HTTP POST vers votre backend avec les données de connexion
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: username,
                    mot_de_passe: password
                })
            });
    
            // Vérifier la réponse du serveur
            if (response.ok) {
                // Si la réponse est OK, rediriger l'utilisateur vers la page d'accueil ou effectuer d'autres actions nécessaires
                window.location.href = '/home'; // Remplacez '/home' par l'URL de la page d'accueil
            } else {
                // Si la réponse n'est pas OK, afficher un message d'erreur à l'utilisateur
                alert('Identifiants incorrects');
            }
        } catch (error) {
            console.error('Erreur lors de la connexion :', error);
            // Afficher un message d'erreur générique à l'utilisateur en cas d'erreur
            alert('Une erreur est survenue lors de la connexion');
        }
    };
    

    return (
        <div className="body">
            <div className="login-container">
                <h1>Connexion</h1>
                <hr />
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Nom d'utilisateur" required />
                    
                    <label htmlFor="password">Mot de passe:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" required />
                    
                    <button type="submit">Connexion</button>
                </form>
            </div>
           
        </div>
    );
}


