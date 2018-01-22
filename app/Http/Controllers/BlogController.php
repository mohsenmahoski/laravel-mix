<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use App\User;
use App\Http\Resources\apiPost;
use App\Category;

class BlogController extends Controller
{
	
	
	public function index (){
		$posts = Post::where('approved', true)->paginate(6);
		$category = Category::all()->keyBy('id');
		return response()->json($posts);
	
	}
   public function getsingleblog($id){

      $post = Post::find($id);
           if ($post->approved){
                  $id = $post->id;
                  $title = $post->title;
                  $body  = html_entity_decode($post->body);
                  $slug  = $post->slug;
                  $image = $post->image;
                  $category_id = $post->category_id;
                  $category_name = $post->category->name;
                  $created_at = $post->created_at;
                  $updated_at = $post->updated_at;
                  $approved = $post->approved;
                  $comments = $post->comments;
                  foreach ($comments as $comment) {
                        $comment->user;
                  }
                  return response()->json(['data'=>[
                        'id'=>$id,
                        'title'=>$title,
                        'body'=>$body,
                        'slug' => $slug,
                        'image' => $image,
                        'category_id' => $category_id,
                        'category_name' => $category_name,
                        'created_at' => $created_at,
                        'updated_at' => $updated_at,
                        'approved' => $approved,
                        'comments' => $comments]
                  ]);
           }else{
             return response()->json(['message'=>'Post Not Approved'],203);
           }

   }
}
