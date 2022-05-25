<?php

namespace App\Http\Controllers;

use App\Models\Manipulation;
use Illuminate\Http\Request;

class ManipulationController extends Controller
{
    public function index()
    {
        return Manipulation::orderBy('id', 'desc')->get();
    }

    public function show($id)
    {
        return Manipulation::find($id);
    }

    public function store(Request $request)
    {
        $manipulation = Manipulation::create($request->all());
        return response()->json($manipulation, 201);
    }

    public function update(Request $request, Manipulation $manipulation)
    {
        $manipulation->update($request->all());
        return response()->json($manipulation, 200);
    }

    public function delete(Manipulation $manipulation)
    {
        $manipulation->delete();
        return response()->json(null, 204);
    }
}
