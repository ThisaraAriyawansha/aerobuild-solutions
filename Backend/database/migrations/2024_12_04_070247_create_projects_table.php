<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id(); // Auto-incrementing primary key
            $table->string('project_name'); // Column for project name
            $table->text('description'); // Column for project description
            $table->unsignedBigInteger('category_id'); // Foreign key for category
            $table->unsignedBigInteger('client_id'); // Foreign key for client
            $table->boolean('status')->default(true); // Status column with a default value
            $table->string('project_image'); // Column to store image path
            $table->timestamps(); // Created and updated timestamps
    
            // Defining foreign key relationships
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
            $table->foreign('client_id')->references('id')->on('clients')->onDelete('cascade');
        });
    }
    

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
