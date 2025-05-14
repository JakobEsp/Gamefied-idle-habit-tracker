<?php

namespace App\Models;

use App\Enums\ItemName;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    
    public function casts(): array
    {
        return [
            'name' => ItemName::class
        ];
    }
    
    public function getImagePath(): string{
        switch ($this->name){
            case ItemName::POTATO_BATTERY:
                return '/items/potato-battery-1.png';
            case ItemName::PROGRAMMING_INTERN:
                return '/item/programming-intern-1.png';
            case ItemName::RUBBER_DUCK:
                return '/item/rubber-duck-1.png';
            case ItemName::TOASTER_MINING_RIG:
                return '/item/toaster-mining-rig.png';
            case ItemName::LEPRECHAUN:
                return '/item/leprechaun-1.png';
            case ItemName::INFINITE_LOOP:
                return '/item/infinite-loop.png';
            default:
                return 'no-image';
        };
    }
}
