<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use App\Models\UserItem;
use App\Http\Requests\StoreUserItemRequest;
use App\Http\Requests\UpdateUserItemRequest;
use App\Models\ItemUpgrade;
use Illuminate\Http\Request;

class UserItemController extends Controller
{
    /**
     * Get all user items
     */
    public function index(Request $request)
    {
        return response()->json([
            "items" => $request->user()->items
        ]);
    }

    public function buyItem(Request $request, UserItem $item) {
        $item->quantity = $item->quantity + 1;
        $item->save();
        return response()->json([
            "item aquired"
        ]);  
    }

    public function upgrades(){

    }

    public function buyUpgrade(ItemUpgrade $itemUpgrade){

    }
}
