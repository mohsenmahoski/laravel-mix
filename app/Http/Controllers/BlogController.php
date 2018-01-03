<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use App\Http\Resources\PostCollection;
use App\Http\Resources\apiPost;
use App\Category;

class BlogController extends Controller
{
	
	
	public function index (){
		$posts = Post::paginate(6);
		$category = Category::all()->keyBy('id');
		//get all routes from url request
		  return ($posts);
		 // return new PostCollection($posts);
	}
   public function getsingleblog($id){
      $post = Post::find($id);
      // return $post;
       return new apiPost($post);
   }
}
