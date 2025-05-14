<?php

namespace Database\Seeders;

use App\Enums\ItemName;
use App\Models\Item;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('items')->insert([
            [
                "name" => ItemName::POTATO_BATTERY,
                "base_price" => 500,
                "base_gold" => 1,
                "base_frequency" => 60000, // 1 per 60 seconds
                "price_multiplier" => 1.66
            ],
            [
                "name" => ItemName::PROGRAMMING_INTERN,
                "base_price" => 1500,
                "base_gold" => 2,
                "base_frequency" => 45000, // 2 per 45 seconds
                "price_multiplier" => 1.7
            ],
            [
                "name" => ItemName::RUBBER_DUCK,
                "base_price" => 4000,
                "base_gold" => 5,
                "base_frequency" => 30000, // 5 per 30 seconds
                "price_multiplier" => 1.75
            ],
            [
                "name" => ItemName::TOASTER_MINING_RIG,
                "base_price" => 10000,
                "base_gold" => 12,
                "base_frequency" => 20000, // 12 per 20 seconds
                "price_multiplier" => 1.8
            ],
            [
                "name" => ItemName::LEPRECHAUN,
                "base_price" => 25000,
                "base_gold" => 25,
                "base_frequency" => 15000, // 25 per 15 seconds
                "price_multiplier" => 1.85
            ],
            [
                "name" => ItemName::INFINITE_LOOP,
                "base_price" => 60000,
                "base_gold" => 60,
                "base_frequency" => 10000, // 60 per 10 seconds
                "price_multiplier" => 1.9
            ]]
        );


        //TODO create upgrades
    }
}
