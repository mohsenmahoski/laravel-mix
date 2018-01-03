<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Comment;
use App\Post;
use Auth;
use Session;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
       
       if (Auth::check()) {
                
                
                try {

                    $comment = new Comment;
                    $comment->name = Auth::user()->name;
                    $comment->email = Auth::user()->email;
                    $comment->comment = $request->comment;
                    $comment->approved = false;
                    $comment->likes = 0;
                    $comment->dislikes=0;
                    $comment->post_id = $request->id;
                    $post = Post::find($request->id);
                    $comment->post()->associate($post);
                    $comment->save();
                    return 'message saved';

                } catch (Exception $e) {
                       return $e;
                }

       }else{
                return 'not login';
       }
    }
    public function likes(Request $request){
       
         if (Auth::check()) {
              $comment = Comment::find($request->id);
              $comment->likes = $comment->likes +1 ;
              $comment->save();
              return $comment->likes;
         }
         else{
                return 'not login';
        }
          
    }
    public function dislikes(Request $request){
       
              if (Auth::check()) { 
                  $comment = Comment::find($request->id);
                  $comment->dislikes = $comment->dislikes + 1 ;
                  $comment->save();
                  return $comment->dislikes;
             }
             else{
                  return 'not login';
            }
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $comment = Comment::find($id);
        return View('comment.edit')->withComment($comment);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request,[
            'name' => 'required|min:3|max:255',
            'email' => 'required|email',
            'comment' => 'required|min:10'
            ]);
        $comment = Comment::find($id);
        $comment->name = $request->name;
        $comment->email = $request->email;
        $comment->comment = $request->comment;
        $comment->save();

        Session::flash('success' , 'Comment Was Successfully Updated!!');

        return redirect()->route('posts.show' , $comment->post->id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
       $comment = Comment::find($id);
       $post_id = $comment->post->id;
       $comment->delete();
        Session::flash('success' , 'Your Comment Deleted Successfully!!');
       return redirect()->route('posts.show' , $post_id);
    }
}
