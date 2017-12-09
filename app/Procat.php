<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Procat extends Model
{
	public $timestamps = false;
    public function product(){
       return $this->belognstoMany('App\Product');
    }
}
