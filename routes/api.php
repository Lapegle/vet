<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PetController;
use App\Http\Controllers\OwnerController;
use App\Http\Controllers\VisitController;
use App\Http\Controllers\MedicamentController;
use App\Http\Controllers\ManipulationController;
use App\Http\Controllers\UsedMedicamentController;
use App\Http\Controllers\UsedManipulationController;


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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('owners', [OwnerController::class, 'index']);
Route::get('owners/{owner}', [OwnerController::class, 'show']);
Route::get('owner/{owner}', [OwnerController::class, 'showPets']);
Route::post('owners', [OwnerController::class, 'store']);
Route::put('owners/{owner}', [OwnerController::class, 'update']);
Route::delete('owners/{owner}', [OwnerController::class, 'delete']);

Route::get('pets', [PetController::class, 'index']);
Route::get('pets/{pet}', [PetController::class, 'show']);
Route::get('pet/{pet}', [PetController::class, 'showVisits']);
Route::post('pets', [PetController::class, 'store']);
Route::put('pets/{pet}', [PetController::class, 'update']);
Route::delete('pets/{pet}', [PetController::class, 'delete']);

Route::get('visits', [VisitController::class, 'index']);
Route::get('visits/{visit}', [VisitController::class, 'show']);
Route::post('visits', [VisitController::class, 'store']);
Route::put('visits/{visit}', [VisitController::class, 'update']);
Route::delete('visits/{visit}', [VisitController::class, 'delete']);

Route::get('medicaments', [MedicamentController::class, 'index']);
Route::get('medicaments/{medicament}', [MedicamentController::class, 'show']);
Route::post('medicaments', [MedicamentController::class, 'store']);
Route::put('medicaments/{medicament}', [MedicamentController::class, 'update']);
Route::delete('medicaments/{medicament}', [MedicamentController::class, 'delete']);

Route::get('manipulations', [ManipulationController::class, 'index']);
Route::get('manipulations/{manipulation}', [ManipulationController::class, 'show']);
Route::post('manipulations', [ManipulationController::class, 'store']);
Route::put('manipulations/{manipulation}', [ManipulationController::class, 'update']);
Route::delete('manipulations/{manipulation}', [ManipulationController::class, 'delete']);

Route::get('usedmanipulations/{id}', [UsedManipulationController::class, 'index']);
//Route::get('usedmanipulations/{manipulation}', [UsedManipulationController::class, 'show']);
Route::post('usedmanipulations', [UsedManipulationController::class, 'store']);
Route::put('usedmanipulations/{manipulation}', [UsedManipulationController::class, 'update']);
Route::delete('usedmanipulations/{manipulation}', [UsedManipulationController::class, 'delete']);

Route::get('usedmedicaments/{id}', [UsedMedicamentController::class, 'index']);
//Route::get('usedmedicaments/{manipulation}', [UsedMedicamentController::class, 'show']);
Route::post('usedmedicaments', [UsedMedicamentController::class, 'store']);
Route::put('usedmedicaments/{medicaments}', [UsedMedicamentController::class, 'update']);
Route::delete('usedmedicaments/{medicaments}', [UsedMedicamentController::class, 'delete']);

Route::get('dailyvisits', [DashboardController::class, 'dailyVisits']);
Route::get('allpets', [DashboardController::class, 'allpets']);
Route::get('visitreport', [DashboardController::class, 'visitReport']);
Route::get('newclients', [DashboardController::class, 'newclients']);
