<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CompleteUserHabitRequest;
use App\Models\UserHabit;
use App\Http\Requests\StoreUserHabitRequest;
use App\Http\Requests\UpdateUserHabitRequest;
use App\Http\Resources\HabitCollection;
use App\Models\HabitCompletion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class UserHabitController extends Controller
{
    /**
     * Get User Habits
     * @response{
     *  "habits": [
     *  {
     *       "id": 1,
     *       "name": "hit the griddy",
     *       "effort": 1,
     *       "frequency": "daily",
     *       "type": "checkbox",
     *       "created_at": "2025-05-15T07:16:52.000000Z",
     *       "updated_at": "2025-05-15T07:16:52.000000Z",
     *       "completed": false
     *  }
     * ]
     * }
     */
    public function index(Request $request)
    {
        return [
            "habits" => $request->user()->habits
        ];
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserHabitRequest $request)
    {
        $request->user()->habits()->create($request->all());
        return response()->json([
            'success' => true
        ]);
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
    public function destroy(Request $request, UserHabit $habit)
    {
        if ($habit->user_id !== $request->user()->id) {
            return response()->json([
                'message' => 'Unauthorized'
            ], 403);
        }

        $habit->delete();
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
