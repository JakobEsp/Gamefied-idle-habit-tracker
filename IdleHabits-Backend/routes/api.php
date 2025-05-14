<?php

use App\Http\Controllers\Api\ApiAuthController;
use App\Http\Controllers\Api\UserHabitController;
use Illuminate\Support\Facades\Route;



Route::prefix('/user')->group(function(){
    Route::post('/login', [ApiAuthController::class, 'login']);
    Route::post('/register', [ApiAuthController::class, 'register']);

    Route::group(['middleware' => 'auth:sanctum'], function () {
        Route::post('/logout', [ApiAuthController::class, 'logout']);
        Route::get('/', [ApiAuthController::class, 'user']);
    });
});

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::apiResource('/habits', UserHabitController::class);
    Route::apiResource('/items', \App\Http\Controllers\Api\UserItemController::class);
});