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
        $second = 1000;
        DB::table('items')->insert([
            [
                "id" => 1,
                "name" => ItemName::POTATO_BATTERY,
                "base_price" => 500,
                "base_gold" => 1,
                "base_frequency" => 60 * $second,
                "price_multiplier" => 1.66
            ],
            [
                "id" => 2,
                "name" => ItemName::PROGRAMMING_INTERN,
                "base_price" => 1500,
                "base_gold" => 2,
                "base_frequency" => 90 * $second,
                "price_multiplier" => 1.7
            ],
            [
                "id" => 3,
                "name" => ItemName::RUBBER_DUCK,
                "base_price" => 4000,
                "base_gold" => 5,
                "base_frequency" => 120 * $second,
                "price_multiplier" => 1.75
            ],
            [
                "id" => 4,
                "name" => ItemName::TOASTER_MINING_RIG,
                "base_price" => 10000,
                "base_gold" => 12,
                "base_frequency" => 150 * $second,
                "price_multiplier" => 1.8
            ],
            [
                "id" => 5,
                "name" => ItemName::LEPRECHAUN,
                "base_price" => 25000,
                "base_gold" => 25,
                "base_frequency" => 180 * $second,
                "price_multiplier" => 1.85
            ],
            [
                "id" => 6,
                "name" => ItemName::INFINITE_LOOP,
                "base_price" => 60000,
                "base_gold" => 60,
                "base_frequency" => 210 * $second,
                "price_multiplier" => 1.9
            ]
        ]);

        DB::table('item_upgrades')->insert([
            [
                "item_id" => 1, // POTATO_BATTERY
                "base_price" => 500,
                "price_multiplier" => 3
            ],
            [
                "item_id" => 2, // PROGRAMMING_INTERN
                "base_price" => 1500,
                "price_multiplier" => 3.2
            ],
            [
                "item_id" => 3, // RUBBER_DUCK
                "base_price" => 4000,
                "price_multiplier" => 3.5
            ],
            [
                "item_id" => 4, // TOASTER_MINING_RIG
                "base_price" => 10000,
                "price_multiplier" => 3.8
            ],
            [
                "item_id" => 5, // LEPRECHAUN
                "base_price" => 25000,
                "price_multiplier" => 4.2
            ],
            [
                "item_id" => 6, // INFINITE_LOOP
                "base_price" => 60000,
                "price_multiplier" => 5
            ]
        ]);
    }
}
