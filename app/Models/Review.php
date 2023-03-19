<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Review extends Model
{
    use HasFactory;

    protected $fillable = ['reviewable_id', 'reviewable_type', 'rating', 'content'];

    public function reviewable(): MorphTo
    {
        return $this->morphTo();
    }
}
