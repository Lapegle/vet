<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsedMedicament extends Model
{
    use HasFactory;

    public function manipulation()
    {
        $this->belongsTo(Manipulation::class);
    }

    public function visit()
    {
        $this->belongsTo(Visit::class);
    }
}
