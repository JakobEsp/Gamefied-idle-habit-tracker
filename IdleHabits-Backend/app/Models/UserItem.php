<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class UserItem extends Model
{
    //
    protected $fillable = [
        'item_id',
        'quantity',
        'gold_yield',
        'frequency',
        'level',
        'image_path'
    ];



    public function item(): BelongsTo 
    {
        return $this->belongsTo(Item::class);
    }

}
