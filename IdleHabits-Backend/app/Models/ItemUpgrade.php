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
        'base_gold',
        'price_multiplieriplier',
    ];


    public function item(): BelongsTo 
    {
        return $this->belongsTo(Item::class);
    }
}
