<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->unique()->name(),
            'description' => fake()->sentence($nbWords = 6, $variableNbWords = true),
            'price' => fake()->randomFloat(2, 10, 90),
            'quantity' => fake()->randomNumber(2),
        ];
    }
}
