<?php

namespace Database\Seeders;

use App\Models\Owner;
use App\Models\Pet;
use App\Models\UsedManipulation;
use App\Models\UsedMedicament;
use App\Models\Visit;
use Database\Factories\VisitFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Owner::factory(5)->create()->each(function($owner) {
            $pets = Pet::factory(2)->make();
            $owner->pets()->saveMany($pets);

            $pets->each(function($pets) {
                $visits = Visit::factory(2)->make();
                $pets->visits()->saveMany($visits);

                $visits->each(function($visits) {
                    $usedMedicaments = usedMedicament::factory(2)->make();
                    $visits->usedMedicaments()->saveMany($usedMedicaments);

                    $usedManipulations = usedManipulation::factory(2)->make();
                    $visits->usedManipulations()->saveMany($usedManipulations);
                });
            });
        });

    }
}
