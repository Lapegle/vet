<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pet extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'birth_date', 'sex', 'species', 'breed', 'colour', 'microchip'];

//    protected $with = ['owner_id'];


    public function visit()
    {
        return $this->hasMany(Visit::class);
    }

    public function owners()
    {
        return $this->belongsTo(Owner::class);
    }
}
