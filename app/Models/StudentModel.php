<?php

namespace App\Models;

use CodeIgniter\Model;

class StudentModel extends Model
{
    protected $table = 'etudiant'; // Nom de la table dans la base de données
    protected $primaryKey = 'codeapo'; // Clé primaire de la table
    
    protected $allowedFields = ['role', 'email', 'mot_de_passe']; // Champs autorisés pour l'insertion et la mise à jour
    
    // Méthode pour récupérer le rôle de l'étudiant
    public function getRole($codeapo)
    {
        // Récupérer les informations de l'étudiant en fonction du code apogée
        $student = $this->where('codeapo', $codeapo)->first();
    
        if ($student) {
            // Si l'étudiant est trouvé, renvoyer son rôle
            return $student['role'];
        } else {
            // Si l'étudiant n'est pas trouvé, renvoyer null ou une valeur par défaut
            return null;
        }
    }
    
}
