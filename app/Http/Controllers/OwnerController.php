<?php

namespace App\Http\Controllers;

use App\Models\Owner;
use Illuminate\Http\Request;

class OwnerController extends Controller
{
    public function index()
    {
        return Owner::orderBy('id', 'desc')->get();
    }

    public function show($id)
    {
        return Owner::find($id);
    }

    public function showPets($id)
    {
        return Owner::with('pets')->find($id)->pets;
    }

    public function store(Request $request)
    {
        $owner = Owner::create($request->all());
        return response()->json($owner, 201);
    }

    public function update(Request $request, Owner $owner)
    {
        $owner->update($request->all());
        return response()->json($owner, 200);
    }

    public function delete(Owner $owner)
    {
        $owner->delete();
        return response()->json(null, 204);
    }
}
