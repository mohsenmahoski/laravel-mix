@extends('main')
@section('title','| Contact')
@section('header')
     <div class="header header-filter contact-us" id="map">
          
              
                

                    <script>
                    function myMap() {
                          
                          var mapCanvas = document.getElementById("map");
                          var mapOptions = {
                            center: new google.maps.LatLng(36.3805,59.5815), zoom: 9
                          };
                          var map = new google.maps.Map(mapCanvas, mapOptions);
                          var marker = new google.maps.Marker({
                          position: mapOptions.center,
                          map: map
                        });
                    }
                   
                    </script>
                    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCbKNkkuPrx0uouVGU839OBBTUYEm4rqes&callback=myMap"></script>
          
     </div>
@endsection
@section('content')
   @include('theme.contact_us')
    {{-- <div class="container">

      <div class="row">
        <div class="col-md-12">
          <h1>Contact Me</h1>
          <hr>
          <form action="{{ route('contact') }}" method="POST">
           {{ csrf_field() }}
            <div class="form-group">
              <label name="email">Email:</label>
              <input id="email" name="email" class="form-control">
            </div>

            <div class="form-group">
              <label name="subject">Subject:</label>
              <input id="subject" name="subject" class="form-control">
            </div>

            <div class="form-group">
              <label name="message">Message:</label>
              <textarea id="message" name="message" class="form-control">Type your message here...</textarea>
            </div>

            <input type="submit" value="Send Message" class="btn btn-success">
          </form>
        </div>
      </div>

    </div> --}}
  @endsection