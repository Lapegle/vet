<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Medicament extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'price'];

    public $timestamps = false;

    public function usedMedicaments()
    {
        return $this->hasMany(UsedMedicament::class);
    }
}
