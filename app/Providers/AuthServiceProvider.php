<?php

namespace App\Providers;

use seller;
use Laravel\Passport\Passport;
use App\Policies\SellerPolicy;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;



class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Model' => 'App\Policies\ModelPolicy',
         'App\Seller' => 'App\Policies\SellerPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

           Gate::define('SellerActive', 'App\Policies\SellerPolicy@_sellerActive' );
           Passport::routes();
    }
}
