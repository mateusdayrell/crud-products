<?php

use App\Http\Controllers\PdfController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ReviewController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });
// Route::get('/', function () {
//     return Inertia::render('Product/Index', []);
// });

Route::resource('/products', ProductController::class);
Route::resource('/reviews', ReviewController::class);
Route::post('/products/{product}/reviews', [ProductController::class, 'review'])->name("products.review");

Route::get('/pdf', [PdfController::class, 'products'])->name("pdf.products");

