<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pet extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'owner_id', 'birth_date', 'sex', 'species', 'breed', 'colour', 'microchip'];

//    protected $with = ['owner_id'];


    public function visits()
    {
        return $this->hasMany(Visit::class);
    }

    public function owner()
    {
        return $this->belongsTo(Owner::class);
    }
}
