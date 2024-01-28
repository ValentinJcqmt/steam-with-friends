<!DOCTYPE html>
<html lang="fr">
    <head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<meta name="HandheldFriendly" content="True">
		<meta name="MobileOptimized" content="320">

		{{-- <link rel="shortcut icon" href="{{ URL::asset('images/favicon') }}/favicon.ico" type="image/x-icon">
		<link rel="icon" href="{{ URL::asset('images/favicon') }}/favicon.ico" type="image/x-icon">
		<link rel="apple-touch-icon" sizes="180x180" href="{{ URL::asset('images/favicon') }}/apple-touch-icon.png">
		<link rel="icon" type="image/png" sizes="32x32" href="{{ URL::asset('images/favicon') }}/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="{{ URL::asset('images/favicon') }}/favicon-16x16.png">
		<link rel="manifest" href="{{ URL::asset('images/favicon') }}/site.webmanifest">
		<meta name="msapplication-TileColor" content="#da532c">
		<meta name="theme-color" content="#ffffff"> --}}
		
		<title>{{ env('APP_NAME', 'Hello world') }}</title>

		@viteReactRefresh
		@vite('resources/js/app.jsx')
    </head>
    <body>
		<div id="react-root"></div>
    </body>
</html>
