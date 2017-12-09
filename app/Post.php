<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class post extends Model
{
    public function category(){
    	return $this->belongsTo('App\Category');
    }
    public function tags(){
        return $this->belongstoMany('App\Tag');
    }
    public function comments(){
         return $this->hasMany('App\Comment');
    }
}
