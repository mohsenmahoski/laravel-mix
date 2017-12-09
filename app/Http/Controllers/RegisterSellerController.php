<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Seller;
use Purifier;
use Image;
use File;
use Session;

class RegisterSellerController extends Controller
{
    public function __construct(){
    	$this->middleware('guest');
    }
    public function show_register_form(){
    	return view('auth.seller.register_form');
    }
    public function new_seller(Request $request){
       $this->validate($request , [
           'name' => 'required|min:3|unique:sellers,name',
           'email' => 'required|email|unique:sellers,email',
           'password' => 'required|min:7',
           'shop_name' => 'required|min:3',
           'password_confirmation' => 'required|same:password',
           'shop_description' => 'sometimes|min:10',
           'sample_work' => 'required|image|max:100'
       	]);

       $seller = new Seller;
       $seller->name = str_replace(' ','_', $request->name);
       $seller->email = $request->email;
       $seller->password = Hash::make($request->password);
       $seller->shop_description = $request->shop_description;
       $seller->shop_name = $request->shop_name;
       $seller->shop_slug = str_replace(' ', '-' , trim($request->shop_name));

       if($request->hasFile('sample_work')){
       	   $image = $request->File('sample_work');
           $filename = time().'.'.$image->getClientOriginalExtension();
           $location = public_path('images/sample_work/'.$filename);

           Image::make($image)->save($location);
           $seller->sample_work = $filename;
       }
       $seller->active = false;
       $seller->remember_token = $request->_token;
       $seller->save();
       Session::flash('success' , 'ثبت نام شما با موفقیت انجام شد.');
       return redirect()->route('home');
    }
}
