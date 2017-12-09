<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{   
    public function seller(){
    	return $this->belongsTo('App\Seller');
    }
    public function Procat(){
    	return $this->belongstoMany('App\Procat' );
    }
}