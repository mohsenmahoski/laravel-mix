@if(Session::has('success'))
  <div class="alert alert-success text-right" id="alert">
  <i class="material-icons" id="close">close</i>
  <p>
    <strong class="pull-right"><i class="material-icons">check_circle</i></strong>{{ Session::get('success') }}
  </p>
  	
  </div>
@endif
@if(Session::has('err'))
  <div class="alert alert-danger">
    <strong>Error:</strong>{{ Session::get('err') }}
  </div>
@endif
@if(count($errors) > 0)
 <div class="alert alert-danger">
   <strong></strong>
 <ul>
  	@foreach($errors->all() as $error)
       <li>
       	{{ $error }}
       </li>
  	@endforeach
  </ul>
  </div>
@endif