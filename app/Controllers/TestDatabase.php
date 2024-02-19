<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class TestDatabase extends CI_Controller {

    public function __construct() {
        parent::__construct();
        // Charger la bibliothèque de base de données
        $this->load->database();
    }

    public function index() {
        // Tester la connexion à la base de données
        if ($this->db->initialize()) {
            echo "Connexion à la base de données réussie.";
        } else {
            echo "Échec de la connexion à la base de données.";
        }
    }
}
