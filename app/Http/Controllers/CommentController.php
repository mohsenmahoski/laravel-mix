<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Comment;
use App\UserCommentVote;
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
                try {
                    $user = Auth::user();
                    $comment = new Comment;
                    $comment->user_id = Auth::user()->id;
                    $comment->comment = $request->comment;
                    $comment->approved = false;
                    $comment->likes = 0;
                    $comment->dislikes=0;
                    $comment->post_id = $request->id;
                    $post = Post::find($request->id);
                    $comment->post()->associate($post);
                    $comment->user()->associate($user);
                    $comment->save();
                    return 'message saved';
                } catch (Exception $e) {
                       return $e;
                }

    }
    public function likes(Request $request){
       
           if (Auth::check()) { 
                  $user = Auth::user();
                  $votes = UserCommentVote::where('user_id' , $user->id)->get();
                  $check = true;
                  foreach ($votes as $vote) {
                      if ( $vote->comment_id == $request->id ) {
                         $check =false;
                      }
                  }
                  if ($check) {
                          $comment = Comment::find($request->id);
                          $vote = new UserCommentVote;
                          $vote->user_id = $user->id;
                          $vote->comment_id = $comment->id;
                          $vote->save();
                          $comment->likes = $comment->likes + 1 ;
                          $comment->save(); 
                          return $comment->likes;
                  }else{
                    return 'voted before';
                  }
             }
             else{
                  return 'not login';
            }
          
    }
    public function dislikes(Request $request){

              if (Auth::check()) { 
                  $user = Auth::user();
                  $votes = UserCommentVote::where('user_id' , $user->id)->get();
                  $check = true;
                  foreach ($votes as $vote) {
                      if ( $vote->comment_id == $request->id ) {
                         $check =false;
                      }
                  }
                  if ($check) {
                          $comment = Comment::find($request->id);
                          $vote = new UserCommentVote;
                          $vote->user_id = $user->id;
                          $vote->comment_id = $comment->id;
                          $vote->save();
                          $comment->dislikes = $comment->dislikes + 1 ;
                          $comment->save(); 
                          return $comment->dislikes;
                  }else{
                    return 'voted before';
                  }
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
