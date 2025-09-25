<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = ['project_name', 'description', 'category_id', 'client_id', 'status', 'project_image'];


    // Relationship with Category
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    // Relationship with Client
    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function images()
    {
        return $this->hasMany(Image::class);
    }

    /**
     * Get the videos for the project.
     */
    public function videos()
    {
        return $this->hasMany(Video::class);
    }


}

