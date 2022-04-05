<?php

namespace Database\Factories;

use App\Models\Medicament;
use App\Models\Visit;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UsedMedicament>
 */
class UsedMedicamentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'medicament_id' => Medicament::factory()
        ];
    }
}
