<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\HabitCompletion;
use App\Http\Requests\StoreHabitCompletionRequest;
use App\Http\Requests\UpdateHabitCompletionRequest;

class HabitCompletionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreHabitCompletionRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(HabitCompletion $habitCompletion)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateHabitCompletionRequest $request, HabitCompletion $habitCompletion)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(HabitCompletion $habitCompletion)
    {
        //
    }
}
