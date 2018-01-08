@component('mail::message')
<style>
	.button{
		font-family:'IRANSans','Iranian Sans',Tahoma,Arial,sans-serif !important;
	}
</style>
<div style="max-width:500px;background:#ffffff;padding:20px 20px;direction:rtl;border:1px solid #dedede;font-family: 'IRANSans','Iranian Sans',Tahoma,Arial,sans-serif!important;">
	<img src="{{ asset('/images/theme/logo.png') }}" style="width:100px;height:100px;float:right" />
	خوش آمدید {{ $user->name }}

	این ایمیل به دلیل ثبت نام شما در وب سایت وبی تک ارسال شده است.</br>
    با کلیک بر روی دکمه تایید به آدرس تایید حساب خود هدایت می شوید.</br>
	
	@component('mail::button', ['url' => 'http://localhost:8000/confirm/'.$user->user_key])
	 لینک تایید حساب
	@endcomponent

	با تشکر از ثبت نام شما در وب سایت,<br>
	{{ config('app.name') }}
</div>
@endcomponent
