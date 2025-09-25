<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectApiController extends Controller
{
    public function getProjectsTable()
    {
        // Fetch projects with related category and client where status is 1
        $projects = Project::with('category', 'client')
                           ->select('id', 'project_name', 'description', 'category_id', 'client_id', 'status', 'project_image')
                           ->where('status', 1) // Only projects with status = 1
                           ->get();
    
        // Transform the result
        $projects = $projects->map(function ($project) {
            return [
                'id' => $project->id,
                'project_name' => $project->project_name,
                'description' => $project->description,
                'category_name' => $project->category ? $project->category->category_name : 'N/A', 
                'client_name' => $project->client ? $project->client->name : 'N/A',
                'status' => 'Active', // Since we filtered by status = 1, it's always active
                'project_image' => asset('' . $project->project_image), 
            ];
        });
    
        return response()->json($projects, 200); // Return JSON with HTTP 200 status
    }
    


    public function getProjectsImageVideo($projectId)
    {
        // Fetch the project by the provided project_id, along with related category, client, images, and videos
        $project = Project::with('category', 'client', 'images', 'videos')  // Eager load related images and videos
                          ->where('id', $projectId)
                          ->select('id', 'project_name', 'description', 'category_id', 'client_id', 'status', 'project_image')
                          ->first();  // Get the single project by ID

        if (!$project) {
            return response()->json(['error' => 'Project not found'], 404);
        }

        // Transform the result
        $project = [
            'id' => $project->id,
            'project_name' => $project->project_name,
            'description' => $project->description,
            'category_name' => $project->category ? $project->category->category_name : 'N/A',
            'client_name' => $project->client ? $project->client->name : 'N/A',
            'status' => $project->status ? 'Active' : 'Inactive',
            'project_image' => asset($project->project_image),
            'images' => $project->images->map(function ($image) {
                return [
                    'image_id' => $image->id,
                    'image_url' => asset($image->image_path) // Assuming 'image_path' stores the image location
                ];
            }),
            'videos' => $project->videos->map(function ($video) {
                return [
                    'video_id' => $video->id,
                    'video_url' => asset($video->video_path) // Assuming 'video_path' stores the video location
                ];
            }),
        ];

        return response()->json($project, 200); // Return JSON with HTTP 200 status
    }
}
