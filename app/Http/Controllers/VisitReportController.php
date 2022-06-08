<?php

namespace App\Http\Controllers;

use App\Models\Visit;
use Illuminate\Http\Request;

class VisitReportController extends Controller
{
    public function showWith($id)
    {
        return Visit::with('pet.owner')->whereIn('id', [$id])->get();
    }
}
