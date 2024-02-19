<?php

namespace App\Models;

use CodeIgniter\Model;

class AdminModel extends Model
{
    protected $table = 'admin'; 
    protected $primaryKey = 'id'; 
    
    protected $allowedFields = ['role', 'email', 'mot_de_passe']; 

    public function getRole($id)
    {
        $admin = $this->find($id);
    
        if ($admin) {
            return $admin['role'];
        } else {
            return null;
        }
    }
    
}
