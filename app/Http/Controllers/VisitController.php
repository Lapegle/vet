<?php

namespace App\Http\Controllers;

use App\Models\Visit;
use Illuminate\Http\Request;

class VisitController extends Controller
{
    public function index()
    {
        return Visit::orderBy('created_at', 'desc')->get();
    }

    public function show($id)
    {
        return Visit::find($id);
    }

    public function store(Request $request)
    {
        $visit = Visit::create($request->all());
        return response()->json($visit, 201);
    }

    public function update(Request $request, Visit $visit)
    {
        $visit->update($request->all());
        return response()->json($visit, 200);
    }

    public function delete(Visit $visit)
    {
        $visit->delete();
        return response()->json(null, 204);
    }
}
