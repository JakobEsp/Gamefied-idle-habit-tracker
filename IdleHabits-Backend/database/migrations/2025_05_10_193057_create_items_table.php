<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('items', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedMediumInteger('base_price');
            $table->unsignedInteger('base_frequency'); // in milliseconds, how often the item will yield gold
            $table->unsignedInteger('base_gold'); // how much gold the item will yield
            $table->double('price_multiplier')->default(1); // how much the price of the item increases with each purchase
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('items');
    }
};
