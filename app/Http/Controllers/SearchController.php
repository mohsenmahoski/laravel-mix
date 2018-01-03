<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;


class SearchController extends Controller
{
    public function index(Request $request){
    	$str = $request->search;
        $posts =Post::where('title', 'LIKE', '%'.$str.'%')->get();
    	return $posts;
    }
}
