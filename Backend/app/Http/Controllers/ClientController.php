<?php

// app/Http/Controllers/ClientController.php
namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function store(Request $request)
    {
        // Validate the incoming request
        $request->validate([
            'clientName' => 'required|string|max:255',
            'clientMobile' => 'required|digits:10|unique:clients,mobile',
            'clientEmail' => 'required|email|unique:clients,email',
        ]);

        // Create a new client in the database
        Client::create([
            'name' => $request->clientName,
            'mobile' => $request->clientMobile,
            'email' => $request->clientEmail,
        ]);

        // Return a success response
        return response()->json(['message' => 'Client added successfully!']);
    }

    public function index()
    {
        return Client::all();
    }
    
}

    

    

