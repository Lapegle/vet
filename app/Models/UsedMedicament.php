<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsedMedicament extends Model
{
    use HasFactory;

    protected $fillable = ['visit_id', 'medicament_id'];

    public $timestamps = false;

    public function medicament()
    {
        $this->belongsTo(Medicament::class);
    }

    public function visit()
    {
        $this->belongsTo(Visit::class);
    }
}
