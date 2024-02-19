<?php

namespace App\Models;

use CodeIgniter\Model;

class TeacherModel extends Model
{
    protected $table = 'surveillant'; // Nom de la table dans la base de données
    protected $primaryKey = 'id'; // Clé primaire de la table
    
    protected $allowedFields = ['role', 'email', 'mot_de_passe']; // Champs autorisés pour l'insertion et la mise à jour
    
    // Méthode pour récupérer le rôle du professeur
    public function getRole($id)
    {
        // Récupérer les informations du professeur en fonction de son ID
        $teacher = $this->find($id);
    
        if ($teacher) {
            // Si le professeur est trouvé, renvoyer son rôle
            return $teacher['role'];
        } else {
            // Si le professeur n'est pas trouvé, renvoyer null ou une valeur par défaut
            return null;
        }
    }
    
}
