<?php

namespace App\Enums;

enum HabitType: string 
{
    case TIMER = 'timer';
    case COUNTER = 'counter';
    case CHECKBOX = 'checkbox';
    CASE TEXT = 'text';
}