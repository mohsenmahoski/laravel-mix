<?php

namespace App;
use Illuminate\Notifications\Notifiable;
use App\Notifications\SellerResetPasswordNotification;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Seller extends Authenticatable
{
    use Notifiable;
    protected $guard = 'seller';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password','role'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
    public function products(){
        return $this->hasMany('App\Product');
    }
    public function sendPasswordResetNotification($token)
    {
          
            $this->notify(new SellerResetPasswordNotification($token));
    }
}
