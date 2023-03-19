<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\StoreReviewRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Mail\NewReview;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();
        return Inertia::render('Product/Index', ['products' => $products]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Product/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        $data = $request->validated();
        Product::create($data);

        return Redirect::route('products.create')->with('message', 'Produto cadastrado com sucesso.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return Inertia::render('Product/Show', ['product' => $product]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        return Inertia::render('Product/Edit', ['product' => $product]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        $data = $request->all();
        $product->update($data);

        return Redirect::back()->with('message', 'Produto editado com sucesso.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();

        return Redirect::route('products.index')->with('message', 'Produto excluído com sucesso.');
    }

    public function review(StoreReviewRequest $request, Product $product)
    {

        $data = $request->all();
        $product->reviews()->create($data);

        Mail::to(Auth::user()->email)->send(new NewReview(['name' => $product['name'], 'rating' => $data['rating']]));

        return Redirect::route('products.show', ['product' => $product])->with('message', 'Review criado com sucesso.');
    }
}
