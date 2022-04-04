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
        Schema::create('pets', function (Blueprint $table) {
            $table->mediumIncrements('id');
            $table->timestamps();
            $table->string('name', 30);
            $table->foreignId('owner_id');
            $table->date('birth_date');
            $table->enum('sex',['M', 'F']);
            $table->string('species',45);
            $table->string('breed', 45);
            $table->string('colour', 45);
            $table->string('microchip', 16);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pets');
    }
};
