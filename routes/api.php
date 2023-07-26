<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MovieController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('movies', [MovieController::class, 'index']);

Route::get('movie/{id}', [MovieController::class, 'show']);

Route::post('movie', [MovieController::class, 'store']);

Route::put('movie/{id}', [MovieController::class, 'update']);

Route::delete('movie/{id}', [MovieController::class,'destroy']);