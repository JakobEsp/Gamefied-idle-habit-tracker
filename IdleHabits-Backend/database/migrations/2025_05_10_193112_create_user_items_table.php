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
        Schema::create('user_items', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Item::class);
            $table->string('image_path');
            $table->unsignedInteger('quantity'); // how many of this item the user has
            $table->unsignedBigInteger('gold_yield');
            $table->unsignedInteger('frequency'); // in milliseconds, how often the item will yield gold
            $table->unsignedInteger('level')->default(1); // the level of the item
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_items');
    }
};
