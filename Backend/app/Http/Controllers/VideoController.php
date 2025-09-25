<?php

namespace App\Http\Controllers;

use App\Models\Video;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class VideoController extends Controller
{
    public function index()
    {
        // Get all videos with only the 'id' and 'project_name' from the associated project
        $videos = Video::with(['project:id,project_name'])->get();

        // Return the videos as a JSON response
        return response()->json($videos);
    }

    public function destroy($id)
    {
        // Find the video
        $video = Video::findOrFail($id);

        // Delete the video file from storage
        if (File::exists(public_path($video->video_path))) {
            File::delete(public_path($video->video_path));
        }

        // Delete the video record from database
        $video->delete();

        // Return a JSON response
        return response()->json([
            'message' => 'Video deleted successfully',
            'id' => $id
        ]);
    }
}