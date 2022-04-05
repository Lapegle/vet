<?php

namespace Database\Factories;

use App\Models\Manipulation;
use App\Models\Medicament;
use App\Models\Visit;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UsedManipulation>
 */
class UsedManipulationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'manipulation_id' => Manipulation::factory()
        ];
    }
}
