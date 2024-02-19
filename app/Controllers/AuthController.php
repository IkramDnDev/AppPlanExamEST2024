<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use \Firebase\JWT\JWT;

class AuthController extends CI_Controller {

    public function login() {
        // Récupérer les données d'authentification envoyées par l'application React.js
        $email = $this->input->post('email');
        $mot_de_passe = $this->input->post('mot_de_passe');

        // Charger les modèles nécessaires
        $this->load->model('AdminModel');
        $this->load->model('TeacherModel');
        $this->load->model('StudentModel');

        // Vérifier les informations d'identification dans la base de données
        $user = $this->authenticate($email, $mot_de_passe);

        if ($user) {
            // Générer un token JWT
            $token = $this->generateJWT($user);
            // Renvoyer le token à l'application React.js
            $this->output->set_content_type('application/json')->set_output(json_encode(['token' => $token]));
        } else {
            // Informer l'application React.js que les informations d'identification sont incorrectes
            $this->output->set_status_header(401)->set_output(json_encode(['error' => 'Invalid credentials']));
        }
    }

    private function authenticate($email, $mot_de_passe) {
        // Vérifier si l'utilisateur est un admin
        $admin = $this->AdminModel->where('email', $email)
                                  ->where('mot_de_passe', $mot_de_passe)
                                  ->first();

        if ($admin) {
            return $admin;
        }

        // Vérifier si l'utilisateur est un professeur
        $teacher = $this->TeacherModel->where('email', $email)
                                      ->where('mot_de_passe', $mot_de_passe)
                                      ->first();

        if ($teacher) {
            return $teacher;
        }

        // Vérifier si l'utilisateur est un étudiant
        $student = $this->StudentModel->where('email', $email)
                                      ->where('mot_de_passe', $mot_de_passe)
                                      ->first();

        if ($student) {
            return $student;
        }

        return false;
    }

    private function generateJWT($user) {
         // Charger le modèle AdminModel
        $this->load->model('AdminModel');
        // Charger le modèle TeacherModel
        $this->load->model('TeacherModel');
        // Charger le modèle StudentModel
        $this->load->model('StudentModel');
        // Configuration du payload du token JWT
        $payload = [
            'id' => $user->id,
            'email' => $user->email,
            'role' => $user->role
            // Ajoutez d'autres données utilisateur au besoin
        ];
    
        // Générer le token JWT en utilisant la clé secrète
        $token = JWT::encode($payload, 'Plan@Exam2024');
    
        return $token;
    }
    
}
