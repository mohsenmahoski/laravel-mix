@extends('layouts.app')
@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading text-center rtl title">فرم تایید حساب کاربری</div>
                <p class="text-center col-md-12 rtl title">اطلاعات حساب شما با موفقیت ثبت گردیده:</p>

                <div class="panel-body">
                    <div class="col-md-12 rtl text-right">
                   	     <label>نام کاربری:</label>
                   	    {{ $user->name }}
                    </div>
                   <div class="col-md-12 rtl text-right">
                   	        <label>آدرس الکترونیکی:</label>
                   	       {{ $user->email }}
                   </div>
                   <div class="col-md-12">
                       <form method="POST" action="{{ route('api.confirmed_user' , $user->email) }}" >
                          <button class="btn btn-primary">تایید مشخصات</button>
                       </form>
                  </div>
                </div>
             </div>
        </div>
    </div>
</div>
@endsection