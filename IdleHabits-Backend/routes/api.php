<?php

use App\Http\Controllers\Api\ApiAuthController;
use App\Http\Controllers\Api\UserHabitController;
use App\Http\Controllers\Api\UserItemController;
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

    //fix prefix path if time allows
    Route::apiResource('/habits', UserHabitController::class);
    Route::prefix('/habits')->group(function() {
        Route::post('/{habit}/complete', [UserHabitController::class, 'complete']);
        Route::delete('/{habitCompletion}/uncomplete', [UserHabitController::class, 'uncomplete']);
    });
    
    Route::apiResource('/items', UserItemController::class);
});