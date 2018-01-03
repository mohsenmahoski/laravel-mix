@extends('layouts.admin-app')
@section('content')
 <table class="table">
 	<thead>
 		<th>#</th>
 		<th>نام فروشنده</th>
 		<th>ایمیل</th>
 		<th>کمیسیون</th>
 		<th>نام فروشگاه</th>
 		<th>مسیر فروشگاه</th>
 		<th>توضیحات فروشگاه</th>
 		<th>فعال</th>
 	</thead>
 	<tbody>
 	@foreach($sellers as $seller)
 		<tr>
 		    <td>{{ $seller->id }}</td>
 			<td>{{ $seller->name }}</td>
 			<td>{{ $seller->email }}</td>
 			<td>{{ $seller->commission }}</td>
 			<td>{{ $seller->shop_name }}</td>
 			<td>{{ $seller->shop_slug }}</td>
 			<td>{{ $seller->shop_description }}</td>
 			@if($seller->active == 0)
 			<td><span class="text-danger">غیر فعال</span></td>
 			@else
 			<td><span class="text-success">فعال</span></td>
 			@endif
 			<td>
       			<a href="#" class="btn btn-success btn-xs mr-10 mb-5">ویرایش</a>
                <a href="#" class="btn btn-primary btn-xs">نمایش فروشگاه</a>
 			</td>
 		</tr>
 	@endforeach
 	</tbody>
 </table>
@endsection