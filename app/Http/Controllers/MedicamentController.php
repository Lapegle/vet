<?php

namespace App\Http\Controllers;

use App\Models\Medicament;
use Illuminate\Http\Request;

class MedicamentController extends Controller
{
    public function index()
    {
        return Medicament::orderBy('name')->get();
    }

    public function show($id)
    {
        return Medicament::find($id);
    }

    public function store(Request $request)
    {
        $medicament = Medicament::create($request->all());
        return response()->json($medicament, 201);
    }

    public function update(Request $request, Medicament $medicament)
    {
        $medicament->update($request->all());
        return response()->json($medicament, 200);
    }

    public function delete(Medicament $medicament)
    {
        $medicament->delete();
        return response()->json(null, 204);
    }
}
