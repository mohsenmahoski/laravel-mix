@extends('layouts.admin-app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-4 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Seller-Dashboard</div>
               
                <div class="panel-body"> 
                    @can('SellerActive', Auth::user())
                        <h1 style='color:black' class="title">Subscribers</h1>
                    @endcan
                   
                    You are logged in As Seller!
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
