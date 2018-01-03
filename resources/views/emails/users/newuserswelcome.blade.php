@component('mail::message')
# Welcom {{ $user->name or 'username' }}

The body of your message.

@component('mail::button', ['url' => ''])
Button Text
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
