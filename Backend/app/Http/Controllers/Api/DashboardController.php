<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use App\Models\Project;
use App\Models\Client;
use App\Models\Category;
use App\Models\Image;
use App\Models\Video;

class DashboardController extends Controller
{
    public function getCounts()
    {
        $projects = Project::count();
        $clients = Client::count();
        $categories = Category::count();
        $images = Image::count();
        $videos = Video::count();
    
        return response()->json([
            'projects' => $projects,
            'clients' => $clients,
            'categories' => $categories,
            'images' => $images,
            'videos' => $videos,
        ]);
    }
    
}
