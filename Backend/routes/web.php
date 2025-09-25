<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\VideoController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\API\ProjectApiController;


Route::get('/', function () {
    return view('welcome');
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    // Corrected route for the admin dashboard
    Route::get('/dashboard', function () {
        return view('Admin_Dashboard.admin_dashboard'); // Remove the .blade.php extension
    })->name('dashboard'); // Correct way to name the route
});


// Route for logging out
Route::post('/logout', function () {
    Auth::logout(); // Log the user out
    return response()->json(['success' => true]);
});

//Client Store
Route::post('/clients', [ClientController::class, 'store'])->name('clients.store');


//categories Store
Route::post('/categories', [CategoryController::class, 'store'])->name('categories.store');


Route::get('/categories_project', [CategoryController::class, 'index']);
Route::get('/clients_project', [ClientController::class, 'index']);
Route::post('/projects', [ProjectController::class, 'store']);


Route::get('/projects_image', [ProjectController::class, 'getProjects']);
Route::post('/add-image-to-project', [ProjectController::class, 'addImageToProject']);

Route::get('/projects_video', [ProjectController::class, 'getProjects']);
Route::post('/add-video-to-project', [ProjectController::class, 'storeVideo']);


Route::get('/projects_Table', [ProjectController::class, 'getProjectsTable']);


Route::patch('/projects/{id}/update-status', [ProjectController::class, 'updateStatus']);
Route::delete('/projects/{id}', [ProjectController::class, 'destroy']);

Route::get('/clientsManagement', [ClientController::class, 'index']); // Fetch all clients


Route::get('/images-with-projects', [ImageController::class, 'index']);


Route::get('/videos', [VideoController::class, 'index']);

Route::delete('/delete-image/{id}', [ImageController::class, 'destroy']);

Route::delete('/videos/{id}', [VideoController::class, 'destroy']);


// Route to Dashboard
Route::get('/api/dashboard-counts', [DashboardController::class, 'getCounts']);


Route::get('/categories', [CategoryController::class, 'index']);


// Define route for updating a category
Route::put('/categories/{id}', [CategoryController::class, 'update']);

//Api For Web Interface
Route::get('/projects_web', [ProjectApiController::class, 'getProjectsTable']);

Route::get('/projects_web_image_video/{projectId}', [ProjectApiController::class, 'getProjectsImageVideo']);


Route::post('/projects/update/{id}', [ProjectController::class, 'update']);
