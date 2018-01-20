<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Laravel React application</title>
        <link href="{{mix('css/app.css')}}" rel="stylesheet" type="text/css">
        <link href="{{asset('css/bootstrap.min.css')}}" rel="stylesheet" type="text/css">
        <link href="{{asset('css/material-kit.css')}}" rel="stylesheet" type="text/css">
        <link href="{{asset('css/styles.css')}}" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" />
        <link rel="stylesheet" href="{{ asset('css/maxcdn.css') }}" />
        <script src="//tinymce.cachefly.net/4.2/tinymce.min.js"></script>
         
          

    </head>
    <body>
        
        <div id="root">
        	<!-- content of website -->
        </div>       
         <script src="{{mix('js/app.js')}}" ></script> 
        <script src="{{asset('js/jquery.min.js')}}" ></script>
        <script src="{{asset('js/theme/bootstarp.min.js')}}" ></script>
       

        <script src="{{asset('js/material.min.js')}}" ></script>
        <script src="{{asset('js/theme/bootstrap-datepicker.js')}}" ></script>
        <script src="{{asset('js/theme/material-kit.js')}}" ></script>
    </body>
</html>