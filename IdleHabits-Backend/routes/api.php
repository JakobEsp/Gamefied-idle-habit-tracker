<?php

use App\Http\Controllers\Api\ApiAuthController;
use Illuminate\Support\Facades\Route;



Route::prefix('/user')->group(function(){
    Route::post('/login', [ApiAuthController::class, 'login']);
    Route::post('/register', [ApiAuthController::class, 'register']);

    Route::group(['middleware' => 'auth:sanctum'], function () {
        Route::post('/logout', [ApiAuthController::class, 'logout']);
        Route::get('/', [ApiAuthController::class, 'user']);
    });

});