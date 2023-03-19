<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;

class PdfController extends Controller
{
    public function products()
    {
        $products = Product::all();
        $pdf = Pdf::loadView('pdf.products', ['products' => $products]);
        return $pdf->stream();
    }
}
