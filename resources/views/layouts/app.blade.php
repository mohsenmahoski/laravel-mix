<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
     <link href="{{mix('css/app.css')}}" rel="stylesheet" type="text/css">
     <link href="{{asset('css/bootstrap.min.css')}}" rel="stylesheet" type="text/css">
     <link href="{{asset('css/material-kit.css')}}" rel="stylesheet" type="text/css">
     <link href="{{asset('css/styles.css')}}" rel="stylesheet" type="text/css">
     <link rel="stylesheet" href="{{ asset('css/maxcdn.css') }}" />
</head>
<body>
    
    <div id="app">
        <div class="header header-filter"><div class="container"><div class="row"><div class="col-md-8 col-md-offset-2"><div class="brand"><h1 class="title white">وبی تک</h1><div class="separator separator-danger">✻</div><h3 class="text-center">ما فقط یک وب سایت طراحی نمیکنیم،ما آنچه در ذهن ورویای شماست به واقعیت تبدیل میکنیم</h3></div></div></div></div></div>
        <div class="main main-raised">
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse menu" id="example-navbar">
                         
                    </div>
                </div>
            </nav> 
            @yield('content')
        </div>
    </div>
<footer class="footer"><div class="container"><div class="col-md-8"><nav class="col-md-4 pull-left"><ul><li><a href="http://www.creative-tim.com">Creative Tim</a></li><li><a href="http://presentation.creative-tim.com">About Us</a></li><li><a href="http://blog.creative-tim.com">Blog</a></li><li><a href="http://www.creative-tim.com/license">Licenses</a></li></ul></nav><nav class="col-md-4 pull-left"><ul><li><a href="http://www.creative-tim.com">Creative Tim</a></li><li><a href="http://presentation.creative-tim.com">About Us</a></li><li><a href="http://blog.creative-tim.com">Blog</a></li><li><a href="http://www.creative-tim.com/license">Licenses</a></li></ul></nav><nav class="col-md-4 pull-left"><ul><li><a href="http://www.creative-tim.com">Creative Tim</a></li><li><a href="http://presentation.creative-tim.com">About Us</a></li><li><a href="http://blog.creative-tim.com">Blog</a></li><li><a href="http://www.creative-tim.com/license">Licenses</a></li></ul></nav></div><div class="col-md-4"><div class="copyright pull-right col-md-"><!-- react-text: 230 -->© 2016, made with <!-- /react-text --><i class="material-icons">favorite</i><!-- react-text: 232 --> by Creative Tim for a better web.<!-- /react-text --></div></div></div></footer>
    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{mix('js/app.js')}}" ></script> 
    <script src="{{asset('js/jquery.min.js')}}" ></script>
    <script src="{{asset('js/theme/bootstarp.min.js')}}" ></script>
    <script src="{{asset('js/material.min.js')}}" ></script>
    <script src="{{asset('js/theme/bootstrap-datepicker.js')}}" ></script>
    <script src="{{asset('js/theme/material-kit.js')}}" ></script>
</body>
</html>
