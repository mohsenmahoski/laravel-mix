<!DOCTYPE html>
<html>
<head>
	<title></title>
	   
</head>
<body>
    <h1>save message</h1>
	   {!! Form::open(['route' => 'contact' ]) !!}
	      
			   {!! Form::label('name', 'Name', ['class' => 'form-control']); !!}
			   {!! Form::text('name',null, ['class'=>'form-control']); !!}
		  
			   {!! Form::label('family', 'Family', ['class' => 'form-control']); !!}
			   {!! Form::text('family',null, ['class'=>'form-control']); !!}
		  
			   {!! Form::label('email', 'Email', ['class' => 'form-control']); !!}
			   {!! Form::text('email',null, ['class'=>'form-control']); !!}
           
			   {!! Form::label('message', 'Message', ['class' => 'form-control']); !!}
			   {!! Form::textarea('message',null, ['class'=>'form-control']); !!}
           
			   {!! Form::label('no_robot', 'No Robot', ['class' => 'form-control']); !!}
			   {!! Form::checkbox('no_robot',null, ['class'=>'form-control']); !!}
         
		   {!! Form::submit('Click Me!') !!}

	   {{ Form::close() }}

	
    <div style="margin:0 10;width:100%;background:red;display:block;float:none;height:15px"> </div>
    <h1>Return single blog</h1>
    	 {!! Form::open(['route' => ['blog.single',5] ]) !!}
	       
		   {!! Form::submit('Click Me!') !!}

	   {{ Form::close() }}
   
    <script src="{{mix('js/app.js')}}" ></script>
</body>
</html>