<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function store(Request $request)
    {
        try {
            // Validate incoming request
            $validated = $request->validate([
                'category_name' => 'required|string|max:255',
            ]);

            // Check if the category already exists
            $existingCategory = Category::where('category_name', $validated['category_name'])->first();

            if ($existingCategory) {
                // If the category already exists, return a failure response
                return response()->json(['success' => false, 'message' => 'Category with this name already exists.']);
            }

            // Save the category to the database
            Category::create([
                'category_name' => $validated['category_name'],
            ]);

            // Return a success response
            return response()->json(['success' => true, 'message' => 'Category added successfully!']);

        } catch (\Exception $e) {
            // If something goes wrong, return a failure response
            return response()->json(['success' => false, 'message' => 'An error occurred while adding the category: ' . $e->getMessage()]);
        }
    }

    public function index()
    {
        return Category::all();
    }


    public function update(Request $request, $id)
{
    try {
        // Validate incoming request
        $validated = $request->validate([
            'category_name' => 'required|string|max:255',
        ]);

        // Find the category by ID
        $category = Category::findOrFail($id);

        // Update the category name
        $category->category_name = $validated['category_name'];
        $category->save();

        // Return a success response
        return response()->json(['success' => true, 'message' => 'Category updated successfully!']);

    } catch (\Exception $e) {
        // If something goes wrong, return a failure response
        return response()->json(['success' => false, 'message' => 'An error occurred while updating the category: ' . $e->getMessage()]);
    }
}

}
