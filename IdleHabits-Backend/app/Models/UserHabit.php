<?php

namespace App\Models;

use App\Enums\HabitEffort;
use App\Enums\HabitFrequency;
use App\Enums\HabitType;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Validation\Rule;

class UserHabit extends Model
{
    //
    protected $appends = [
        'completed',
    ];

    protected $fillable = [
        'user',
        'name',
        'effort',
        'frequency',
        'type',
    ];

    public function casts(): array
    {
        return [
            'effort' => HabitEffort::class,
            'frequency' => HabitFrequency::class,
            'type' => HabitType::class,
        ];
    }

    public static function rules(): array
    {
        return [
            'name' => 'required|string',
            'effort' => ['required',Rule::enum(HabitEffort::class)],
            'frequency' => ['required',Rule::enum(HabitFrequency::class)],
            'type' => [Rule::enum(HabitType::class)],
        ];
    }

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function completions(): HasMany
    {
        return $this->hasMany(HabitCompletion::class);
    }

    public function getCompletedAttribute(){
        switch ($this->frequency) {
            case HabitFrequency::DAILY:
                return $this->completions()->whereDate('created_at', now())->exists();
            case HabitFrequency::WEEKLY:
                return $this->completions()->whereDate('created_at', now()->startOfWeek())->exists();
        }
    }


}
