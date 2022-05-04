<?php

namespace App\Http\Controllers;

use App\Models\Pet;
use Illuminate\Http\Request;

class PetController extends Controller
{
    public function index()
    {
        return Pet::all();
    }

    public function showVisits($id)
    {
        return Pet::with('visits')->find($id)->visits;
    }

    public function show($id)
    {
        return Pet::find($id);
    }

    public function store(Request $request)
    {
        $pet = Pet::create($request->all());
        return response()->json($pet, 201);
    }

    public function update(Request $request, Pet $pet)
    {
        $pet->update($request->all());
        return response()->json($pet, 200);
    }

    public function delete(Pet $pet)
    {
        $pet->delete();
        return response()->json(null, 204);
    }
}
