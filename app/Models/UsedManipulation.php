<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsedManipulation extends Model
{
    use HasFactory;

    public function medicament()
    {
        $this->belongsTo(Medicament::class);
    }

    public function visit()
    {
        $this->belongsTo(Visit::class);
    }
}
