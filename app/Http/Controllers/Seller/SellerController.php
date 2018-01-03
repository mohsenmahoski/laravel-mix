<?php

namespace App\Http\Controllers\Seller;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Seller;
use Auth;
use Gate;

class SellerController extends Controller
{
    public function __construct(){
    	$this->middleware('auth:seller');
    }

    public function index(){
    	
    	
    	// if (Gate::denies('SellerActive', Auth::user())) {
     //       return 'Denies';
     //    }
    	return view('auth.seller.seller_dashboard');
    }
}
