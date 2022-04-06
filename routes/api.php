<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OwnerController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});
Route::get('owners', [OwnerController::class, 'index']);
Route::get('owners/{owner}', [OwnerController::class, 'show']);
Route::post('owners', [OwnerController::class, 'store']);
Route::put('owners', [OwnerController::class, 'update']);
Route::delete('owners', [OwnerController::class, 'delete']);
