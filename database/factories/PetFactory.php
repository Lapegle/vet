<?php

namespace Database\Factories;

use App\Models\Owner;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pet>
 */
class PetFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->firstName(),
            'owner_id' => Owner::factory(),
            'birth_date' => $this->faker->dateTimeBetween('-10 years', '-2 years'),
            'sex' => $this->faker->randomElement(['M', 'F']),
            'species' => $this->faker->randomElement(['Dog', 'Cat']),
            'breed' => $this->faker->randomElement(['Beagle', 'Pug', 'Golden Retriever', 'Aegean', 'American Curl']),
            'colour' => $this->faker->colorName(),
            'microchip' => $this->faker->numerify('################')
        ];
    }
}
