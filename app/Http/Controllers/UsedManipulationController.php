<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UsedManipulation;

class UsedManipulationController extends Controller
{
    public function index($id)
    {
        return UsedManipulation::where('visit_id', '=', $id)->with('manipulation')->get();
    }

    public function show($id)
    {
        return UsedManipulation::find($id);
    }

    public function store(Request $request)
    {
        $manipulation = UsedManipulation::create($request->all());
        return response()->json($manipulation, 201);
    }

    public function update(Request $request, UsedManipulation $manipulation)
    {
        $manipulation->update($request->all());
        return response()->json($manipulation, 200);
    }

    public function delete(UsedManipulation $manipulation)
    {
        $manipulation->delete();
        return response()->json(null, 204);
    }
}
