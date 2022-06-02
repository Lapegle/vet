<?php

namespace Database\Factories;

use App\Models\Pet;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Visit>
 */
class VisitFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'temperature' => $this->faker->randomFloat(1,28,42),
            'heart_rate' => $this->faker->numberBetween(40, 160),
            'breath_rate' => $this->faker->numberBetween(10, 60),
            'mood' => $this->faker->randomElement(['Agressīvs', 'Pasīvs', 'Apmulsis', 'Labs']),
            'history' => $this->faker->sentence(),
            'diagnosis' => $this->faker->sentence(),
            'instructions' => $this->faker->sentence(),
            'notes' => $this->faker->sentence(),
            'price' => $this->faker->randomFloat(2, 0, 500)
        ];
    }
}
