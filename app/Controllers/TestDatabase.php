<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class TestDatabase extends CI_Controller {

    public function index() {
        $this->load->database();
        $db = $this->db;
        $query = $db->query('SELECT COUNT(*) as total FROM ma_table');


        if ($query) {

            echo "La base de données est connectée !\n";
        } else {

            echo "Échec de la connexion à la base de données.\n";
            echo $db->error();
        }
    }

}

?>