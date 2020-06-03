$(document).ready(function(){
	//Slider
 $('.galeria').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1200,
    responsive: true,
    pager: true
  });
 //Posts
 var posts = [
{
title: 'Prueba de titulo 1',
//date: moment().format("MMMM Do YYYY"),
//date: moment().format("MMMM dddd YYYY"),
//date: moment().format("dddd Do MMMM YYYY"),
date:'Publicado el dia '+ moment().date()+ " de " + moment().format("MMMM") + " del "+ moment().format("YYYY"),
content: 'La programación es el proceso utilizado para idear y ordenar las acciones necesarias para realizar un proyecto, preparar ciertas máquinas o aparatos para que empiecen a funcionar en el momento y en la forma deseados o elaborar programas para su empleo en computadoras.'
},
	{
	title: 'Prueba de titulo 2',
	//date: new Date(),
	date:'Publicado el dia '+ moment().date()+ " de " + moment().format("MMMM") + " del "+ moment().format("YYYY"),
	content: 'La programación es el proceso utilizado para idear y ordenar las acciones necesarias para realizar un proyecto, preparar ciertas máquinas o aparatos para que empiecen a funcionar en el momento y en la forma deseados o elaborar programas para su empleo en computadoras.'
	},
		{
		title: 'Prueba de titulo 3',
		date:'Publicado el dia '+ moment().date()+ " de " + moment().format("MMMM") + " del "+ moment().format("YYYY"),		content: 'La programación es el proceso utilizado para idear y ordenar las acciones necesarias para realizar un proyecto, preparar ciertas máquinas o aparatos para que empiecen a funcionar en el momento y en la forma deseados o elaborar programas para su empleo en computadoras.'
		},
			{
			title: 'Prueba de titulo 4',
			date:'Publicado el dia '+ moment().date()+ " de " + moment().format("MMMM") + " del "+ moment().format("YYYY"),			content: 'La programación es el proceso utilizado para idear y ordenar las acciones necesarias para realizar un proyecto, preparar ciertas máquinas o aparatos para que empiecen a funcionar en el momento y en la forma deseados o elaborar programas para su empleo en computadoras.'
			},
				{
				title: 'Prueba de titulo 5',
				date:'Publicado el dia '+ moment().date()+ " de " + moment().format("MMMM") + " del "+ moment().format("YYYY"),
				content: 'La programación es el proceso utilizado para idear y ordenar las acciones necesarias para realizar un proyecto, preparar ciertas máquinas o aparatos para que empiecen a funcionar en el momento y en la forma deseados o elaborar programas para su empleo en computadoras.'
				},
					{
					title: 'Prueba de titulo 6',
					date:'Publicado el dia '+ moment().date()+ " de " + moment().format("MMMM") + " del "+ moment().format("YYYY"),
					content: 'La programación es el proceso utilizado para idear y ordenar las acciones necesarias para realizar un proyecto, preparar ciertas máquinas o aparatos para que empiecen a funcionar en el momento y en la forma deseados o elaborar programas para su empleo en computadoras.'
					},
 ];

posts.forEach((item, index) =>{
var post = `
<article class="post">
					<h2>${item.title}</h2>
					<span class="date">${item.date}</span>
					<p>
						${item.content}
					</p>
					<a href="#" class="button-more">Leer más</a>
				</article>
`;
	$("#posts").append(post);
});

	//Selector de tema
var theme =$("#theme");
$("#to-green").click(function(){
	theme.attr("href", "css/green.css");
});

	$("#to-blue").click(function(){
	theme.attr("href", "css/blue.css");
	});
		$("#to-red").click(function(){
		theme.attr("href", "css/red.css");
		});

		
});