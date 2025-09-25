<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = ['category_name']; // Allow mass assignment for category_name

    public function projectsTable()
    {
        return $this->hasMany(Project::class);
    }
}
