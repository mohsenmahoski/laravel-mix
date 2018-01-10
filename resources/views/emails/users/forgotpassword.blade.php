@component('mail::message')
<style>
	.button{
		font-family:'IRANSans','Iranian Sans',Tahoma,Arial,sans-serif !important;
	}
</style>
<div style="max-width:500px;background:#ffffff;padding:20px 20px;direction:rtl;border:1px solid #dedede;font-family: 'IRANSans','Iranian Sans',Tahoma,Arial,sans-serif!important;">
	<img src="{{ asset('/images/theme/logo.png') }}" style="width:100px;height:100px;float:right" />
	 {{ $user->name }} عزیز

	این ایمیل به دلیل درخواست شما برای بازیابی رمز عبور ارسال شده است.</br>
    با کلیک بر روی لینک زیر به صفحه به روز رسانی پسورد مراجعه خواهید کرد.</br>
	
	@component('mail::button', ['url' => 'http://localhost:8000/reset_password/'.$user->user_key])
	 لینک بازیابی رمز عبور
	@endcomponent

	با تشکر,<br>
	{{ config('app.name') }}
</div>
@endcomponent
