<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class HabitCompletion extends Model
{

    protected $fillable = [
        'value'
    ];


    public static function rules(): array
    {
        return [
            'value' => 'required|string',
        ];
    }


    public function userHabit(): BelongsTo
    {
        return $this->belongsTo(UserHabit::class);
    }
}
