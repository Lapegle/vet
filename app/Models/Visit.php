<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Visit extends Model
{
    use HasFactory;

    protected $fillable = ['temperature', 'heart_rate', 'breath_rate', 'mood', 'history', 'diagnosis', 'instructions', 'notes', 'price'];

    protected $with = ['pet_id'];

    public function pet()
    {
        return $this->belongsTo(Pet::class);
    }

    public function usedMedicaments()
    {
        return $this->hasMany(UsedMedicament::class);
    }

    public function usedManipulations()
    {
        return $this->hasMany(UsedManipulation::class);
    }
}
