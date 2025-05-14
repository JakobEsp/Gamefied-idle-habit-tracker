<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CompleteUserHabitRequest;
use App\Models\UserHabit;
use App\Http\Requests\StoreUserHabitRequest;
use App\Http\Requests\UpdateUserHabitRequest;
use App\Models\HabitCompletion;
use App\Models\User;
use App\Models\UserItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserHabitController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json([
            'habits' => Auth::user()->habits
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserHabitRequest $request)
    {
        $request->user()->habits()->create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(UserHabit $userHabit)
    {
        return response()->json([
            'habit' => $userHabit
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserHabitRequest $request, UserHabit $userHabit)
    {
        
        $userHabit->update($request->all());
        return response()->json([
            'habit' => $userHabit
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserHabit $userHabit)
    {
        $userHabit->delete();
        return response()->json([
            'message' => 'Habit deleted successfully'
        ]);
    }


    public function complete(CompleteUserHabitRequest $request, UserHabit $habit)
    {
        if($habit->completed == true){
            return response()->json([
                'message' => 'Habit already completed'
            ]);
        }

        $habit->completions()->create($request->all());
    }

    public function uncomplete(Request $request, HabitCompletion $habitCompletion)
    {
        $habitCompletion->delete();
        return response()->json([
            'message' => 'Habit uncompleted successfully'
        ]);
    }
}
