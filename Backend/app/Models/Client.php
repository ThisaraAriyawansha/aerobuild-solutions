<?php

// app/Models/Client.php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'mobile', 'email'];

    public function projectsTable()
    {
        return $this->hasMany(Project::class);
    }
}
