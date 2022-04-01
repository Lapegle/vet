<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('visits', function (Blueprint $table) {
            $table->mediumIncrements('id');
            $table->timestamps();
            $table->foreignId('pet_id');
            $table->decimal('temperature', 3, 1);
            $table->unsignedSmallInteger('heart_rate');
            $table->unsignedSmallInteger('breath_rate');
            $table->string('mood', 45);
            $table->text('history');
            $table->text('diagnosis');
            $table->text('instructions');
            $table->text('notes');
            $table->decimal('price', 6, 2);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('visits');
    }
};
