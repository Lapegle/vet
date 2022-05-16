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
        $this->belongsTo(Manipulation::class);
    }

    public function visit()
    {
        $this->belongsTo(Visit::class);
    }
}
