<?php

use App\Models\Item;
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
        Schema::create('item_upgrades', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Item::class);
            $table->unsignedInteger('base_price'); // base price of the upgrade
            $table->double('price_multiplier');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('item_upgrades');
    }
};
