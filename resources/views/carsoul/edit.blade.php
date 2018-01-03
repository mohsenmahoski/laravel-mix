@extends('layouts.admin-app')


@section('title' , '|Edit Slider')

@section('title' , 'Edit Slider')


@section('content')
  <div class="row">
  	<div class="col-md-12 .col-md-8">
  	  
  	  	<div class="col-md-12 container well ">
  		  <h4><b>Edit Slider images</b></h4>
  		  <p>Edit Slider Images Or Click On Add Slider To Add New Slider.</p>
  	    </div>
       
      <ul class="nav nav-tabs"> 
         @php($i=1)
         @foreach($carsouls as $carsoul)
            @if($i == 1)
            <li class="active"><a data-toggle="tab" href="#slide{{ $i }}">
            Slide{{ $i }}</a></li>
            @else
            <li><a data-toggle="tab" href="#slide{{ $i }}">
            Slide{{ $i }}</a></li>
            @endif
         @php(++$i)
         @endforeach 
         <div class="pull-right">
         {{ Html::linkRoute('carsoul.create', 'Add Slider', array(), array('class' => 'btn btn-primary')) }}
         </div>
      </ul>
   
      <div class="tab-content text-center">

        @php($i=1)
        @foreach($carsouls as $carsoul)
        @if($i == 1)
        <div id="slide{{ $i }}" class="tab-pane fade active in mt-5 mb-5">
            @else 
             <div id="slide{{ $i }}" class="tab-pane fade  mt-5 mb-5">
            @endif
        	    <img src="{{ asset('images/slider/'.$carsoul->image) }}" class="img-thumbnail mb-5">
                <div class='form-group col-md-6'>
              	 {{ Form::model($carsoul,['route' => ['carsoul.store' ,$carsoul->id] ,'class' => ' btn','files' => 'true']) }}
                   <section>
                   <div class="form-inline">
              	     {{ Form::file('slider' , ['class' => 'form-control']) }}

                     {{ Form::submit('Save',['class' => 'btn btn-success']) }}
                   </div>
                  
                   <div class=" mb-10 mt-10">
                       {{ Form::label('caption_bottom', 'Caption Bottom Center' , ['class' => 'label label-primary'] ) }}
                       {{ Form::textarea('caption_bottom' ,null, ['class' => 'form-control']) }}
                    </div> 
                    <div class=" mb-10 mt-10">
                       {{ Form::label('caption_right_top', 'Caption Top Right' , ['class' => 'label label-primary'] ) }}
                       {{ Form::textarea('caption_right_top' ,null, ['class' => 'form-control']) }}
                     </div>
                     <div class=" mb-10 mt-10">
                       {{ Form::label('caption_left_top', 'Caption Top Left' , ['class' => 'label label-primary'] ) }}
                       {{ Form::textarea('caption_left_top' ,null, ['class' => 'form-control']) }}
                     </div>

              	     
              	      
          	     {{ Form::close() }}
                 </div>
                 <div class="col-md-6">
                   {{ Form::open(['route' => ['carsoul.destroy',$carsoul->id],'method' => 'DELETE' , 'class' => ' btn ']) }}
                        {{ Form::submit('Delete' , ['class' => 'btn btn-danger']) }}
                  {{ Form::close() }}
                 </div>
          	     
                
              </div>
          
        @php(++$i)
        @endforeach
        </div>

    </div>
  	</div>
  	<div class=".col-xs-6 .col-md-4"></div>
  </div>
@endsection
