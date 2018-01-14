<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use App\Notifications\AuthorResetPasswordNotification;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Author extends Authenticatable
{
    use Notifiable,HasApiTokens;
    protected $guard = 'author';

    protected $fillable = [
        'name', 'email', 'password' 
    ];
    protected $hidden = [
        'password', 'remember_token',
    ];
    public function posts(){
        return $this->hasMany('App\Post');
    }
    public function sendPasswordResetNotification($token)
    {
          
            $this->notify(new AuthorResetPasswordNotification($token));
    }
}
