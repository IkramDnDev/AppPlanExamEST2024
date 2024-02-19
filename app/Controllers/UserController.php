<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class UserController extends CI_Controller {

    public function getRole() {
        // Vérifier si la variable de session contient le rôle de l'utilisateur
        $role = $this->session->userdata('role');
    
        // Charger le modèle correspondant en fonction du rôle de l'utilisateur
        switch ($role) {
            case 'admin':
                $this->load->model('AdminModel');
                $role_data = $this->AdminModel->getRole($this->session->userdata('user_id'));
                break;
            case 'surveillant':
                $this->load->model('TeacherModel');
                $role_data = $this->TeacherModel->getRole($this->session->userdata('user_id'));
                break;
            case 'etudiant':
                $this->load->model('StudentModel');
                $role_data = $this->StudentModel->getRole($this->session->userdata('user_id'));
                break;
            default:
                $role_data = null;
        }
        
        // Renvoyer le rôle à l'application React.js
        $this->output->set_content_type('application/json')->set_output(json_encode(['role' => $role_data]));
    }
    
}
