<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\File;
use App\Models\Image;

class ImageController extends Controller
{
    public function index()
    {
        // Get all images with their associated project
        $images = Image::with(['project:id,project_name'])->get();
        
        // Return the images as a JSON response
        return response()->json($images);
    }

    public function destroy($id, Request $request)
    {
        try {
            // Find the image by ID
            $image = Image::findOrFail($id);

            // Get the image path from the request
            $imagePath = $request->input('image_path');

            // Log the details for debugging
            Log::info('Attempting to delete image', [
                'id' => $id,
                'image_path' => $imagePath
            ]);

            // Ensure the path is absolute or relative to public directory
            $fullPath = public_path(ltrim($imagePath, '/'));

            // Check if the file exists and delete it
            if ($imagePath && File::exists($fullPath)) {
                // Delete the file from local storage
                File::delete($fullPath);
                Log::info('Image file deleted from local storage', [
                    'path' => $fullPath
                ]);
            } else {
                Log::warning('Image file not found in local storage', [
                    'path' => $fullPath
                ]);
            }

            // Delete the image record from the database
            $image->delete();

            // Return a JSON response
            return response()->json([
                'message' => 'Image deleted successfully',
                'status' => 'success'
            ]);
        } catch (\Exception $e) {
            // Log the full error
            Log::error('Image deletion error', [
                'message' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);

            // Return a JSON response for the error
            return response()->json([
                'message' => 'Failed to delete image',
                'error' => $e->getMessage(),
                'status' => 'error'
            ], 500);
        }
    }
}