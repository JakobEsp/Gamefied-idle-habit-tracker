<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use App\Models\Item;
use App\Http\Requests\StoreItemRequest;
use App\Http\Requests\UpdateItemRequest;
use App\Models\UserItem;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    /**
     * Get all items
     */
    public function index(Request $request)
    {
        
        return response()->json([
            "items" => $request->user()->items
        ]);
    }

    public function buyItem(Request $request, UserItem $item) {

    }

    public function upgrades(){

    }

    public function buyUpgrade(){

    }
}
