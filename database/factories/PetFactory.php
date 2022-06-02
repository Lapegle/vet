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
            'birth_date' => $this->faker->dateTimeBetween('-10 years', '-2 years'),
            'sex' => $this->faker->randomElement(['M', 'F']),
            'species' => $this->faker->randomElement(['Suns', 'Kaķis']),
            'breed' => $this->faker->randomElement(['Bīgls', 'Mopsis', 'Labradors', 'Nezināma', 'Britu īsspalvainais', 'Meikūns', 'Siāmietis']),
            'colour' => $this->faker->randomElement(['Melns', 'Balts', 'Brūns', 'Zeltains', 'Melns ar baltiem plankumiem', 'Ruds', 'Balts ar melnām ķepām']),
            'microchip' => $this->faker->numerify('################')
        ];
    }
}
