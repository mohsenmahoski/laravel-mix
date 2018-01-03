
    <meta charset="utf-8" />
    <link rel="apple-touch-icon" sizes="76x76" href="assets/img/apple-icon.png">
    <link rel="icon" type="image/png" href="{{asset('/images/theme/favicon.png')}}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

    <title>@yield('title')</title>

    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />

    <!--     Fonts and icons     -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" />
    <link rel="stylesheet" href="{{ asset('css/maxcdn.css') }}" />
    {{--  <link rel="stylesheet" href="{{ asset('css/font-awesome.min.css') }}" /> --}}
    <!-- CSS Files -->
    <link href="{{ asset('css/bootstrap.min.css') }}" rel="stylesheet" />
    <link href="{{ asset('css/material-kit.css') }}" rel="stylesheet"/>

    <!-- CSS Just for demo purpose, don't include it in your project -->
    <link href="{{ asset('css/demo.css') }}" rel="stylesheet" />

    <script src="{{ asset('/js/theme/jquery-1.7.1.min.js') }}" type="text/javascript"></script>
  

   
    
   
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Laravel Blog @yield('title')</title>
    <!-- CHANGE THIS TITLE FOR EACH PAGE -->

    <!-- Bootstrap -->
    
   
    {{ Html::style('css/styles.css') }}
    @yield('stylesheet')
 
