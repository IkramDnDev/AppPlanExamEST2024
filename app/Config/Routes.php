<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */

$route['api/login'] = 'AuthController@login';

// Route pour la vérification du rôle
$route['api/user/role'] = 'UserController@getRole';
