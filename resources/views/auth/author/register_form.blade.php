@extends('main')
@section('header')
     <div class="header header-filter" style="background-image: url({{ asset('/images/theme/cooporation.jpg') }});">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="brand">
                        <h1 class="title white">طراحی وب سایت مدرن تک</h1>
                        <div class="separator separator-danger">✻</div>
                        <h3 class="text-center">ما فقط یک وب سایت طراحی نمیکنیم،ما آنچه در ذهن ورویای شماست به واقعیت تبدیل میکنیم</h3>
                    </div>
                </div>
            </div>

        </div>
     </div>
@endsection
@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2 mt-20">
            <div class="panel panel-default">
                <div class="panel-heading text-right">فرم ثبت نام فروشندگان</div>
                <div class="panel-body">
                <div class="col-md-12">
                    <h5 class="text-right">برای ثبت نام در وب سایت فرم زیر را با دقت تکمیل نمایید</h5>
                </div>
                    <form class="form-horizontal" method="POST" action="{{ route('seller.submit') }}" accept-charset="UTF-8" enctype="multipart/form-data">
                        {{ csrf_field() }}

                        <div class="form-group text-right{{ $errors->has('name') ? ' has-error' : '' }}">
                            
                            <div class="col-md-6 col-md-offset-2">
                                <input id="name" type="text" class="form-control" name="name" value="{{ old('name') }}" required autofocus>

                                @if ($errors->has('name'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif
                            </div>
                            <label for="name" class="col-md-3 control-label">نام کاربری</label>

                        </div>

                        <div class="form-group text-right{{ $errors->has('email') ? ' has-error' : '' }}">
                        <div class="col-md-6 col-md-offset-2">
                                <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" required>

                                @if ($errors->has('email'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                            <label for="email" class="col-md-3 control-label">ایمیل</label>
                        </div>

                        <div class="form-group text-right{{ $errors->has('password') ? ' has-error' : '' }}">
                            <div class="col-md-6 col-md-offset-2">
                                <input id="password" type="password" class="form-control" name="password" required>

                                @if ($errors->has('password'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                            <label for="password" class="col-md-3 control-label">رمز عبور</label>
                        </div>

                        <div class="form-group text-right">
                            <div class="col-md-6 col-md-offset-2">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
                            </div>
                            <label for="password-confirm" class="col-md-3 control-label">تکرار رمز عبور</label>
                        </div>
                        <div class="form-group text-right">
                            <div class="col-md-6 col-md-offset-2">
                                <input id="shop_name" type="text" class="form-control" name="shop_name" required>
                            </div>
                            <label for="shop_name" class="col-md-3 control-label">نام فروشگاه</label>
                        </div>
                         <div class="form-group text-right">
                            
                            <div class="col-md-6 col-md-offset-2">
                                <textarea id="shop_description" type="textarea" class="form-control" name="shop_description" required></textarea>
                            </div>
                            <label for="shop_description" class="col-md-3 control-label">درباره فروشنده</label>

                        </div>
                        
                        <div class="row mt-20 text-right">  
                            <div class=" col-md-6 col-md-offset-2">
                                <input id="sample_work" type="file" class="pt-10" name="sample_work" required>
                            </div>
                            <label for="sample_work" class="col-md-3 control-label">نمونه کار<div class="clearfix"></div><small>(فایل jpg,حداکثر سایز 500kb)</small></label>
                        </div>
                        <div class="row"> 
                            <div class="col-md-9 col-md-offset-2">
                                <hr>
                            </div>
                        </div>
                       
                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-2 text-left">
                                <button type="submit" class="btn btn-success">
                                    ثبت نام
                                </button>
                                <a href="{{ route('seller.login') }}" class="btn btn-simple btn-info "> قبلا ثبت نام کردید؟ </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
