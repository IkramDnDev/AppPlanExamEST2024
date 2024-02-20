<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use \Firebase\JWT\JWT;

class AuthController extends CI_Controller {

    public function login() {
        $email = $this->input->post('email');
        $mot_de_passe = $this->input->post('mot_de_passe');

        // Charger les modèles nécessaires
        $this->load->model('AdminModel');
        $this->load->model('TeacherModel');
        $this->load->model('StudentModel');

        $user = $this->authenticate($email, $mot_de_passe);

        if ($user) {
            $token = $this->generateJWT($user);
            $this->output->set_content_type('application/json')->set_output(json_encode(['token' => $token]));
        } else {
            $this->output->set_status_header(401)->set_output(json_encode(['error' => 'Invalid credentials']));
        }
    }

    private function authenticate($email, $mot_de_passe) {
        $admin = $this->AdminModel->where('email', $email)
                                  ->where('mot_de_passe', $mot_de_passe)
                                  ->first();

        if ($admin) {
            return $admin;
        }

        $teacher = $this->TeacherModel->where('email', $email)
                                      ->where('mot_de_passe', $mot_de_passe)
                                      ->first();

        if ($teacher) {
            return $teacher;
        }

        $student = $this->StudentModel->where('email', $email)
                                      ->where('mot_de_passe', $mot_de_passe)
                                      ->first();

        if ($student) {
            return $student;
        }

        return false;
    }

    private function generateJWT($user) {
        $this->load->model('AdminModel');
        $this->load->model('TeacherModel');
        $this->load->model('StudentModel');
        $payload = [
            'id' => $user->id,
            'email' => $user->email,
            'role' => $user->role
        ];

        $token = JWT::encode($payload, 'Plan@Exam2024');
    
        return $token;
    }
    
}
