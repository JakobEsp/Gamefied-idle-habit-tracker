<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ItemUpgrade extends Model
{
    /** @use HasFactory<\Database\Factories\ItemUpgradeFactory> */
    use HasFactory;

    protected $fillable = [
        'item_id',
        'names',
        'base_gold',
        'price_multiplier',
    ];


    public function item(): BelongsTo 
    {
        return $this->belongsTo(Item::class);
    }
}
