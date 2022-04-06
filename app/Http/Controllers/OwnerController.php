<?php

namespace App\Http\Controllers;

use App\Models\Owner;
use Illuminate\Http\Request;

class OwnerController extends Controller
{
    public function index()
    {
        return Owner::all();
    }

    public function show($id)
    {
        return Owner::find($id);
    }

    public function store(Request $request)
    {
        return Owner::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $owner = Owner::findOrFail($id);
        $owner->update($request->all());

        return $owner;
    }
}
