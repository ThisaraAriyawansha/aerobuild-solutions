<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use App\Models\Image;
use App\Models\Video;


class ProjectController extends Controller
{
    public function store(Request $request)
    {
        try {
            // Validate the request
            $validated = $request->validate([
                'project_name' => 'required|string|max:255',
                'description' => 'required|string',
                'category_id' => 'required|exists:categories,id',
                'client_id' => 'required|exists:clients,id',
                'project_image' => 'required|image|max:2048', // Limit image size to 2MB
            ], [
                'project_image.required' => 'Please upload an image for the project.',
                'project_image.image' => 'The file must be an image.',
                'project_image.max' => 'The image size must not exceed 2MB.',
                'category_id.exists' => 'The selected category does not exist.',
                'client_id.exists' => 'The selected client does not exist.',
            ]);
    
            // Define the folder where the image will be stored
            $destinationPath = public_path('assets/project_images');
    
            // Ensure the directory exists
            if (!file_exists($destinationPath)) {
                mkdir($destinationPath, 0755, true);
            }
    
            // Get the image and generate a unique name for the file
            $image = $request->file('project_image');
            $imageName = uniqid() . '.' . $image->getClientOriginalExtension();
    
            // Move the image to the public/assets/project_images folder
            $image->move($destinationPath, $imageName);
    
            // Create the project with the validated data and the image path
            Project::create([
                'project_name' => $validated['project_name'],
                'description' => $validated['description'],
                'category_id' => $validated['category_id'],
                'client_id' => $validated['client_id'],
                'status' => true,
                'project_image' => 'assets/project_images/' . $imageName,
            ]);
    
            // Return success response
            return response()->json(['success' => true, 'message' => 'Project added successfully!']);
    
        } catch (ValidationException $e) {
            // Return validation errors in JSON format
            return response()->json(['success' => false, 'errors' => $e->validator->errors()], 422);
        }
    }
    
    
    



    public function addImageToProject(Request $request)
    {
        // Validate the image data with custom error messages
        try {
            $validated = $request->validate([
                'project_id' => 'required|exists:projects,id',
                'image' => [
                    'required',
                    'image',
                    'max:2048', // Maximum size of 2048 KB (2MB)
                ],
            ], [
                'image.max' => 'The image size must not exceed 2MB.', // Custom error message
                'image.required' => 'Please upload an image.',
                'project_id.required' => 'The project ID is required.',
                'project_id.exists' => 'The selected project does not exist.',
            ]);
    
            // Define the destination path
            $destinationPath = public_path('assets/project_images');
    
            // Ensure the directory exists
            if (!file_exists($destinationPath)) {
                mkdir($destinationPath, 0755, true);
            }
    
            // Get the uploaded file and generate a unique name
            $image = $request->file('image');
            $imageName = uniqid() . '.' . $image->getClientOriginalExtension();
    
            // Move the image to the assets folder
            $image->move($destinationPath, $imageName);
    
            // Save the image record
            Image::create([
                'project_id' => $validated['project_id'],
                'image_path' => 'assets/project_images/' . $imageName,
            ]);
    
            return response()->json(['success' => true, 'message' => 'Image added to project successfully!']);
    
        } catch (\Illuminate\Validation\ValidationException $e) {
            // Return validation errors in JSON format
            return response()->json(['success' => false, 'errors' => $e->validator->errors()], 422);
        }
    }

    
    

    public function getProjects()
    {
        $projects = Project::select('id', 'project_name')->get();
        return response()->json($projects);
    }


    public function storeVideo(Request $request)
    {
        $validated = $request->validate([
            'project_id' => 'required|exists:projects,id',
            'video' => 'required|mimes:mp4,avi,mkv|max:50000', // Max 50MB
        ]);
    
        // Generate a unique filename for the video
        $videoExtension = $request->file('video')->getClientOriginalExtension();
        $videoName = time() . '_' . uniqid() . '.' . $videoExtension;  // Using current timestamp and a unique ID for the filename
    
        // Ensure the 'Assets/project_videos' folder exists, then store the video
        $videoPath = $request->file('video')->move(public_path('Assets/project_videos'), $videoName);
    
        // Create a new record in the Video model
        Video::create([
            'project_id' => $validated['project_id'],
            'video_path' => 'Assets/project_videos/' . $videoName,
        ]);
    
        return response()->json(['success' => true, 'message' => 'Video added successfully!']);
    }
    
    
    


    public function getProjectsTable()
    {
        // Fetch projects along with the related category, client, and project image
        $projects = Project::with('category', 'client')
                           ->select('id', 'project_name', 'description', 'category_id', 'client_id', 'status', 'project_image')
                           ->get();

        // Transform the result to include category, client names, and project image
        $projects = $projects->map(function ($project) {
            return [
                'id' => $project->id,
                'project_name' => $project->project_name,
                'description' => $project->description,
                'category_name' => $project->category ? $project->category->category_name : 'N/A',  // Assuming 'name' is the category field
                'client_name' => $project->client ? $project->client->name : 'N/A',  // Assuming 'name' is the client field
                'status' => $project->status ? 'Active' : 'Inactive',
                'project_image' => asset('' . $project->project_image),  // Assuming the images are stored in public/storage
            ];
        });

        return response()->json($projects);
    }



    public function updateStatus($id, Request $request)
    {
        $request->validate(['status' => 'required|boolean']);

        $project = Project::findOrFail($id);
        $project->status = $request->status;
        $project->save();

        return response()->json(['success' => true]);
    }

    public function destroy($id)
{
    // Find the project by ID
    $project = Project::findOrFail($id);

    // Fetch associated images and videos
    $images = $project->images;
    $videos = $project->videos;

    // Delete each image file from local storage
    foreach ($images as $image) {
        // Assuming 'image_path' contains the path to the image file
        if (file_exists(public_path($image->image_path))) {
            unlink(public_path($image->image_path)); // Delete the file
        }
        
        // Delete the image record from the database
        $image->delete();
    }

    // Delete each video file from local storage
    foreach ($videos as $video) {
        // Assuming 'video_path' contains the path to the video file
        if (file_exists(public_path($video->video_path))) {
            unlink(public_path($video->video_path)); // Delete the file
        }
        
        // Delete the video record from the database
        $video->delete();
    }

    // Delete project image file from local storage
    if (isset($project->project_image) && file_exists(public_path($project->project_image))) {
        unlink(public_path($project->project_image)); // Delete the project image file
    }

    // Delete the project
    $project->delete();

    // Return a success response
    return response()->json(['success' => true]);
}


    public function getImagesWithProjects()
        {
            $images = Image::with('project:id,project_name')->get();
            return response()->json($images);
        }




        public function update(Request $request, $id)
{
    try {
        // Validate inputs
        $validated = $request->validate([
            'project_name' => 'required|string|max:255',
            'description' => 'required|string',
            'project_image' => 'nullable|image|max:2048',
        ]);

        // Find the project
        $project = Project::findOrFail($id);

        // Update the name and description
        $project->project_name = $validated['project_name'];
        $project->description = $validated['description'];

        // Check if there's an image to update
        if ($request->hasFile('project_image')) {
            $destinationPath = public_path('assets/project_images');
            if (!file_exists($destinationPath)) {
                mkdir($destinationPath, 0755, true);
            }

            $image = $request->file('project_image');
            $imageName = uniqid() . '.' . $image->getClientOriginalExtension();
            $image->move($destinationPath, $imageName);

            // Delete old image if exists
            if ($project->project_image && file_exists(public_path($project->project_image))) {
                unlink(public_path($project->project_image));
            }

            $project->project_image = 'assets/project_images/' . $imageName;
        }

        // Save the project
        $project->save();

        return response()->json(['success' => true, 'message' => 'Project updated successfully!']);
    } catch (ValidationException $e) {
        return response()->json(['success' => false, 'errors' => $e->validator->errors()], 422);
    } catch (ModelNotFoundException $e) {
        return response()->json(['success' => false, 'message' => 'Project not found'], 404);
    } catch (\Exception $e) {
        return response()->json(['success' => false, 'message' => 'An error occurred while updating the project'], 500);
    }
}

        

}
