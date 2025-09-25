<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Category;
use App\Models\Project;
use App\Models\Image;
use App\Models\Video;

class DashboardController extends Controller
{
    public function index()
    {
        // Fetch counts from respective tables
        $projectCount = Project::count();
        $clientCount = Client::count();
        $categoryCount = Category::count();
        $imageCount = Image::count();
        $videoCount = Video::count();

        // Pass counts to the view
        return view('dashboard', compact('projectCount', 'clientCount', 'categoryCount', 'imageCount', 'videoCount'));
    }
}
