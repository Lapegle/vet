<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsedManipulation extends Model
{
    use HasFactory;

    protected $fillable = ['visit_id', 'manipulation_id'];

    public $timestamps = false;

    public function manipulation()
    {
        return $this->belongsTo(Manipulation::class);
    }

    public function visit()
    {
        return $this->belongsTo(Visit::class);
    }
}
