<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Product;
use App\Procat;

class ShopController extends Controller
{
   public function index(Request $request){
   	     $routes = Controller::get_url( $request->url() );
           $newproducts = Product::orderBy('created_at')->take(8)->get();
           $dealproducts = Product::where('special_sale' ,'!=' , null)->orderBy('created_at')->take(2)->get();
           
           return view('pages.shop')->withRoutes($routes)->withNewproducts($newproducts)->withDealproducts($dealproducts);
   }
   public function show_product(Request $request,$slug){
   	  $routes  = Controller::get_url( $request->url() );
   	  $product = Product::where('slug','=',$slug)->first();
   	  $images  = explode( '|' , $product->images  );
       
 
                
                
              
           
   	  return view('pages.product_')->withProduct($product)->withRoutes($routes)->withImages($images);
   }
}
