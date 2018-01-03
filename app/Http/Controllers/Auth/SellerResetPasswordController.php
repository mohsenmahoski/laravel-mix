<?php

namespace App\Http\Controllers\Auth;

use Password;
use Auth;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Foundation\Auth\ResetsPasswords;


class SellerResetPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */
  
    use ResetsPasswords;

    /**
     * Where to redirect users after resetting their password.
     *
     * @var string
     */
    protected $redirectTo = '/seller';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest:seller');
    }
    protected function broker()
    {
       return Password::broker('sellers');
    }

    protected function guard()
    {
        return Auth::guard('seller');
    }
    public function showResetForm(Request $request, $token = null)
    {
        return view('auth.passwords.reset-seller')->with(
            ['token' => $token, 'email' => $request->email]
        );
    }
}
