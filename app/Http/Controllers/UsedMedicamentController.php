<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UsedMedicament;

class UsedMedicamentController extends Controller
{
    public function index($id)
    {
        return UsedMedicament::where('visit_id', '=', $id)->with('medicament')->get();
    }

    public function show($id)
    {
        return UsedMedicament::find($id);
    }

    public function store(Request $request)
    {
        $medicament = UsedMedicament::create($request->all());
        return response()->json($medicament, 201);
    }

    public function update(Request $request, UsedMedicament $medicament)
    {
        $medicament->update($request->all());
        return response()->json($medicament, 200);
    }

    public function delete(UsedMedicament $medicament)
    {
        $medicament->delete();
        return response()->json(null, 204);
    }
}
