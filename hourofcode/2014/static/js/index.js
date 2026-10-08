
$(document).ready(function() {

	if(!window.console)window.console = {
		log:function(){},
		info:function(){},
		error:function(){}
	};

	if(window.console && !window.console.log)console.log = function(){};
	if(window.console && !window.console.info)console.info = function(){};
	if(window.console && !window.console.error)console.error = function(){};

	window.data = {
		currentCounter: ko.observable(0),
		currentArea: ko.observable(0),
		showCounter: function(data_index, data_element) {
			data.currentCounter(data_index());
			$('.b-map__ageline-item').removeClass('active');
			$(data_element).addClass('active');

		},
		registrationState: ko.observable(0),
		showRegistration: function(data_index) {
			
			data.registrationState(data_index);
			
			if(data_index != 0) {

				if(data_index==1){
					ga('send', 'event', 'amnyam', 'click');
					ga('send', 'pageview', '/amnyam_click');
					yaCounter27136385.reachGoal('amnyam_click');
				}

				if(data_index==2){
					ga('send', 'event', 'kodu', 'click');
					ga('send', 'pageview', '/kodu_click');
					yaCounter27136385.reachGoal('kodu_click');
				}

				$('.b-promo__select').velocity("fadeOut", { duration: 300 });
				$('.test').velocity("fadeIn", { duration: 300 });



			}

		},
		map: ko.observableArray(),
		ageLine: ko.observableArray(['7-9', '10-13', '14-16', '17-18', '19-23', '24-25']),
		counter: ko.observable(2),
		page: ko.observable(0),
		homeRegion: ko.observable(2),
		mapIsAnimated: false,
		someFunction: function(element, index, data) {

			//console.log('-> index:',index);
			//console.log('index ->', element);
			var renderIndex = index.render_index;
			var $this = $('#map_region_'+renderIndex);
			var that = this;

			simpleShowMap($this);

			$(window).on('scroll', function() {
				/*var $ot = $(window).scrollTop();
				if($ot > 200 && !that.mapIsAnimated)
				
				{
					if($this.index() == 8){

						that.mapIsAnimated = true;
					}
					animateMap ($this);

				} else {
					//that.mapIsAnimated = true;
					simpleShowMap($this);
				}*/
			});

			function animateMap ($map) {

				$map.css({opacity: 0, stroke: "#ffffff"})
				.velocity({scale: 0}, 200)
				.velocity({ opacity: .5, scale:  1.05}, 300*(renderIndex/2))
				.velocity({ opacity: .5, scale:  1}, { 
				    duration: 200,
				    complete: function() { 
				    	if(renderIndex == 8) {
				    		hoverParts ();
				    		showBars ();
				    	}
			    	}
				});					
			};

			function simpleShowMap ($map)   {
				$map.css({
					opacity: .5,
					scale: 1
				});
				hoverParts ();
			}
			
			function hoverParts () {
				$('.map_region').hover(
					function(event) {
						
						var $index = $(this).index();
						var $filter = $('.b-map__flag').eq($index);
						var $top = parseInt($filter.css('top'),10);
						var $left = parseInt($filter.css('left'), 10);
						var $wWidth = 300;
						var $topOffset = 20;
						var $leftOffset = 110;
						
						$('.b-map__tooltip').stop().css('display', 'block');
						$(this).velocity("stop").velocity({ fill: '#000000', }, 300);
						$('.map_region').not($(this)).velocity("stop").velocity({ fill: '#bdbdbd'}, 300);
						$('.b-map__flag').velocity("stop").not($filter).css({opacity: 0, transform: 'scale(1)'});
						$filter.css({display: 'block', opacity: 1, transform: 'scale(1)' });
						
						window.data.currentArea($index)

						if($index == 0) {
							
							$('.b-map__tooltip')
								.velocity("stop")
								.velocity({top: $top - $topOffset, left: $left  - 370}, 200);
						} else if($index == 1) {
								
								$('.b-map__tooltip')
									.velocity("stop")
									.velocity({top: $top - $topOffset, left: $left + 190}, 200);
							}else {
								
								$('.b-map__tooltip')
									.velocity("stop")
									.velocity({top: $top - $topOffset, left: $left + $leftOffset}, 200);
							}
					},
					function(event) {

						if($(event.relatedTarget).closest('.b-map__flag').length) {
							
							$('.map_region').not(this).velocity("stop").velocity({ fill: '#bdbdbd'}, 300);
							$(this).velocity("stop").velocity({ fill: '#000000', }, 300);

						} else if (!$(event.relatedTarget).closest('.map_region').length ) {
							// do something
						}else {
							$('.map_region').velocity("stop").velocity({ fill: '#000000', }, 300);
							$('.b-map__flag').velocity("stop").velocity({opacity: 1}, {duration: 300, delay: 500});
						}
					}
				)

				$('.b-map__inner').mouseleave(function() {
					$('.map_region').velocity("stop").velocity({ fill: '#000000', }, 300);
					$('.b-map__flag').css({opacity: 1, transform: 'scale(1)'});
					$('.b-map__tooltip').css('display', 'none');
				});
			}

			function showBars () {
				/*$('.b-map__flag')
					.velocity({scale: .01}, 10)
					.velocity("fadeIn", 300)
					.velocity({scale: 1}, 300)
					.velocity("stop");*/
			}	
		},
		activeLesson: ko.observable(0),
		setComplitelesson: function(data_index, data_elem) {
			data.lessons()[data_index].complite = true;
			$(data_elem).addClass('b-lessonsCounter__item-link_complite');
			lessonEffects()
		},
		setActivelesson: function(data_index, data_elem) {
			$('.b-lessonsCounter__item-link').removeClass('b-lessonsCounter__item-link_active');
			$(data_elem).addClass('b-lessonsCounter__item-link_active');

			if ($(data_elem).attr("href")) {
				var src = '//www.youtube.com/embed/' + data.lessons()[data_index].video;
				
				window.location.hash = $(data_elem).attr("href");
				data.activeLesson(data_index);
				$('#lessonPlayer').attr('src', src)
				//player.cueVideoById(data.lessons()[data_index].video);
				data.lessonEffects();

			}
			
		},
		waitPlayer:function(){
			var that = this;

			if(player && player.cueVideoById){
				player.cueVideoById('vGcRGfvqfko');

				//console.log('wait done!');
			}else{
				setTimeout(function(){
					//console.log('wait...');
					that.waitPlayer();
				},500);
			}
		},
		nextLesson: function(data_index) {
			$('.b-lessonsCounter__item-link').removeClass('b-lessonsCounter__item-link_active');
			var data_elem = $('.b-lessonsCounter__item-link').eq(data_index + 1);
			var that = this;
			$(data_elem).addClass('b-lessonsCounter__item-link_active');

			if( $(data_elem).attr("href")) {
				window.location.hash = $(data_elem).attr("href");
			}
			
			data.activeLesson(data_index + 1);

			//console.log('-> data.lessons()[data_index + 1].video:',data.lessons()[data_index + 1].video);

				if(data_index>-1){
					//player.cueVideoById(data.lessons()[data_index + 1].video);
					var src = '//www.youtube.com/embed/' + data.lessons()[data_index + 1].video
					$('#lessonPlayer').attr('src', src)
				}

				data.lessonEffects();
		},
		lessonEffects: function() {
			
		},
		lessons: ko.observableArray(),
		//lessons: ko.observableArray([
		//	{
		//		text: '<p>Learn the basic concepts of Computer Science with drag and drop programming. This is a game-like, self-directed tutorial starring video lectures by Bill Gates, Mark Zuckerberg, Angry Birds and Plants vs. Zombies. Learn repeat-loops, conditionals, and basic algorithms. Available in 34 languages.</p> <a href="#">Скачайте KODU</a>',
		//		video: 'AyE0D6OcqO8',
		//		link: '#',
		//		complite: true,
		//		number: 1
		//	},
		//	{
		//		text: '1Learn the basic concepts of Computer Science with drag and drop programming. This is a game-like, self-directed tutorial starring video lectures by Bill Gates, Mark Zuckerberg, Angry Birds and Plants vs. Zombies. Learn repeat-loops, conditionals, and basic algorithms. Available in 34 languages.',
		//		video: 'nmCKUVPHK7A',
		//		link: '#',
		//		complite: false,
		//		number: 2
		//	},
		//	{
		//		text: '2Learn the basic concepts of Computer Science with drag and drop programming. This is a game-like, self-directed tutorial starring video lectures by Bill Gates, Mark Zuckerberg, Angry Birds and Plants vs. Zombies. Learn repeat-loops, conditionals, and basic algorithms. Available in 34 languages.',
		//		video: 'yyj6RkZh7fQ',
		//		link: 'yyj6RkZh7fQ',
		//		complite: false,
		//		number: 3
		//	},
		//	{
		//		text: '3Learn the basic concepts of Computer Science with drag and drop programming. This is a game-like, self-directed tutorial starring video lectures by Bill Gates, Mark Zuckerberg, Angry Birds and Plants vs. Zombies. Learn repeat-loops, conditionals, and basic algorithms. Available in 34 languages.',
		//		video: 'Bilo0fqQvgw',
		//		link: '#',
		//		complite: false,
		//		number: 4
		//	},
		//	{
		//		text: '4Learn the basic concepts of Computer Science with drag and drop 4Learn the basic concepts of Computer Science with drag and drop programming. This is a game-like, self4Learn the basic concepts of Computer Science with drag and drop programming. This is a game-like, self4Learn the basic concepts of Computer Science with drag and drop programming. This is a game-like, selfprogramming. This is a game-like, self-directed tutorial starring video lectures by Bill Gates, Mark Zuckerberg, Angry Birds and Plants vs. Zombies. Learn repeat-loops, conditionals, and basic algorithms. Available in 34 languages.',
		//		video: 'nKaedJyARWg',
		//		link: '#',
		//		complite: false,
		//		number: 5
		//	},
		//	{
		//		text: 'Learn the basic concepts of Computer Science with drag and drop programming. This is a game-like, self-directed tutorial starring video lectures by Bill Gates, Mark Zuckerberg, Angry Birds and Plants vs. Zombies. Learn repeat-loops, conditionals, and basic algorithms. Available in 34 languages.',
		//		video: 'dkcUUUyO6bA',
		//		link: '#',
		//		complite: false,
		//		number: 6
		//	},
		//	{
		//		text: 'Learn the basic concepts of Computer Science with drag and drop programming. This is a game-like, self-directed tutorial starring video lectures by Bill Gates, Mark Zuckerberg, Angry Birds and Plants vs. Zombies. Learn repeat-loops, conditionals, and basic algorithms. Available in 34 languages.',
		//		video: 't21C09JiRc4',
		//		link: '#',
		//		complite: false,
		//		number: 7
		//	},
		//	{
		//		text: '22Learn the basic concepts of Computer Science with drag and drop programming. This is a game-like, self-directed tutorial starring video lectures by Bill Gates, Mark Zuckerberg, Angry Birds and Plants vs. Zombies. Learn repeat-loops, conditionals, and basic algorithms. Available in 34 languages.',
		//		video: 'k0NY8xP5IdQ',
		//		link: '#',
		//		complite: false,
		//		number: 8
		//	}
		//]),
		partners: [
			{
				name: "Партнеры проекта",
				items: [
					{
						name: "1C",
						img: "./static/img/tmp/p1.png",
						url: "http://obr.1c.ru/pages/read/code.php",
						resourse: [
							{
								name: "Набор электронных образовательных материалов «1С: Школа. Информатика»",
								href: "http://obr.1c.ru/pages/read/code.php"
							},
							{
								name: "Курс для школьников \"Алгоритмы. Олимпиадное программирование\"",
								href: "http://informatics.mccme.ru/course/view.php?id=427"
							}

						]
					},
					{
						name: "Лаборатория Касперского",
						img: "./static/img/tmp/p2.png",
						url: "http://www.kaspersky.ru/",
						resourse: [
							{
								name: "Компьютерная безопасность: мифы и реальность",
								href: "https://vk.com/doc-20623304_281703403"
							},
							{
								name: "История вредоносного ПО. Классификация вредоносного ПО. Целевые атаки",
								href: "https://vk.com/doc-20623304_334470596"
							},
							{
								name: "Спам. Онлайн-банкинг. Социальные сети",
								href: "https://vk.com/doc-20623304_332747087"
							}

						]
					},
					{
						name: "Microsoft",
						img: "./static/img/tmp/p3.png",
						url: "http://www.microsoft.com/ru-ru/default.aspx",
						resourse: [
							{
								name: "Инициатива Microsoft YouthSpark",
								href: "http://www.youthspark.ru/"
							},
							{
								name: "Виртуальная академия Microsoft",
								href: "http://www.microsoftvirtualacademy.com/?lang=ru-ru"
							},
							{
								name: "Создаем 3D игры вместе с KODU GAME LAB",
								href: "http://www.microsoftvirtualacademy.com/training-courses/games-creating-with-kodu-game-lab-rus#?fbid=RkYuh0aneAY"
							},
							{
								name: "Увлекательное программирование на языке C#",
								href: "http://www.microsoftvirtualacademy.com/training-courses/exciting-programming-c-sharp-rus?m=9887&ct=31133"
							},
							{
								name: "CodeStars – стань звездой кода",
								href: "http://contests.techdays.ru/codestars/#/"
							}

						]
					},
					{
						name: "Acronis",
						img: "./static/img/tmp/p4.png",
						url: "http://www.acronis.com/ru-ru/main_page/",
						resourse: [
							{
								name: "Олимпиады по программированию в МФТИ",
								href: "http://acm.mipt.ru/"
							}
						]
					},
					{
						name: "Вконтакте",
						img: "./static/img/tmp/p7.png",
						url: "https://vk.com/",
						resourse: [
							{
								name: "Чемпионат по программированию VK Cup",
								href: "https://vk.com/vkcup"
							},
							{
								name: "Программа поддержки стартапов StartFellows",
								href: "https://vk.com/startfellows"
							}
						]
					},
					{
						name: "Zepto Lab",
						img: "./static/img/tmp/p8.png",
						url: "http://www.zeptolab.com/",
						resourse: [
							{
								name: "Как нарисовать героев Cut the Rope",
								href: "https://www.youtube.com/playlist?list=PLVxGcyI6KPtgFVh3M1tRKiETqnUlZuyK7"
							},
							{
								name: "Как нарисовать Ам Няма",
								href: "https://www.youtube.com/watch?v=e_RJRa-urzI&list=PLVxGcyI6KPtgFVh3M1tRKiETqnUlZuyK7"
							},
							{
								name: "Чемпионат по программированию Zepto Code Rush 2014",
								href: "http://www.zeptoteam.ru/ZeptoCodeRush2014.html"
							}
						]
					}
				]
			},
			{
				name: "Партнер конкурса для преподавателей",
				items: [
					{
						name: "Дневник - единая образовательная сеть",
						img: "./static/img/tmp/p5.png",
						url: "http://dnevnik.ru/"
					}
				]
			},
			{
				name: "Партнер по разработке методических <br /> рекомендаций для&nbsp;преподавателей",
				items: [
					{
						name: "ph international",
						img: "./static/img/tmp/p6.png",
						url: "http://www.ph-int.org/rus/",
						resourse: [
							{
								name: "Проект «Твой курс: ИТ для молодежи»",
								href: "http://www.it4youth.ru/"
							}

						]
					}
				]
			},
			{
				name: "При поддержке",
				items: [
					{
						name: "Министерство Образования и Науки Российской Федерации",
						img: "./static/img/tmp/p9.png",
						url: "http://xn--80abucjiibhv9a.xn--p1ai/"
					},
					{
						name: "Министерство Связи и Массовых Коммуникаций Российской Федерации",
						img: "./static/img/tmp/p10.png",
						url: "http://minsvyaz.ru/ru/"
					}
				]
			},
			{
				name: "Медийные партнеры",
				items: [
					{
						name: "Moscow coding school",
						img: "./static/img/tmp/msc2.png",
						url: "http://moscoding.ru/",
						resourse: [
							{
								name: "Истории успеха молодых российских программистов",
								href: "https://www.youtube.com/playlist?list=PLv0QuMD7FJIoLtPHG4m-CbsQ0UyLe0BG6"
							}

						]
					},
					{
						name: "Учительской газеты",
						img: "./static/img/tmp/techm_s.png",
						url: "http://www.ug.ru/"
					},
					{
						name: "Российская газета",
						img: "./static/img/tmp/rgru_s.png",
						url: "http://www.rg.ru/"
					},
					{
						name: "Комсомольская правда",
						img: "./static/img/tmp/koms1_s.png",
						url: "http://www.kp.ru/"
					},
					{
						name: "hi-tech.mail.ru",
						img: "./static/img/tmp/mailru_s.png",
						url: "https://hi-tech.mail.ru/"
					},
					{
						name: "Pedsovet.org",
						img: "./static/img/tmp/pedsovet_s.png",
						url: "https://pedsovet.org/"
					},
					
				]
			}
		],
		materials: [
			{
				name: 'Пример письма обращения к родителям',
				type: 'pdf',
				url:  'static/files/Пример_письма_обращения_к_родителям_учащихся.pdf'
			},
			{
				name: 'Час Кода: Методические_рекомендации_для_учителей',
				type: 'pdf',
				url:  'static/files/Час_Кода_Методические_рекомендации_для_учителей.pdf'
			},
			{
				name: 'План видео лекции. Материал для вступительного слова и беседы с учащимися (457KB)',
				type: 'pdf',
				url: 'static/files/1_План_лекции_материал_для_вступительного слова_и_беседы_с учащимися.pdf'
			},
			/*{
				name: 'Приложение: Профессия программист (статья) (347KB)',
				type: 'pdf',
				url: 'static/files/2_Приложение_Профессия_программист_статья.pdf'
			},*/
			{
				name: 'Приложение: Куда пойти учиться. Высшее образование ИТ (363KB)',
				type: 'pdf',
				url: 'static/files/3_Приложение_Куда_пойти_учиться_высшее_образование_ИТ.pdf'
			},
			{
				name: 'Приложение: Профессиональный путь программиста (статья) (416KB)',
				type: 'pdf',
				url: 'static/files/4_Приложение_Профессиональный_путь_программиста_статья.pdf'
			},
			/*{
				name: 'Приложение: Это интересно: Великие люди ИТ (ссылки) (226KB)',
				type: 'pdf',
				url: 'static/files/5_Приложение_Это_интересно_великие_люди_ИТ_ссылки.pdf'
			},*/
			{
				name: 'Приложение: Это интересно: ИТ праздники (222KB)',
				type: 'pdf',
				url: 'static/files/6_Приложение_Это_интересно_ИТ_праздники.pdf'
			},
			{
				name: 'Приложение: Классифицированный список ИТ специальностей (298KB)',
				type: 'pdf',
				url: 'static/files/7_Приложение_Классифицированный_список_ИТ_специальностей.pdf'
			},
			{
				name: 'Приложение: Святицкая: Рынок труда для молодых специалистов в ИТ-отрасли (Февраль 2013) (808KB)',
				type: 'pdf',
				url: 'static/files/8_Приложение_Святицкая_Рынок_труда_для_молодых_специалистов_в_ИТ-отрасли_(Февраль 2013).pdf'
			},
			/*{
				name: 'Приложение: Полезные ресурсы для подготовки учителя и самообразования учащихся (278KB)',
				type: 'pdf',
				url: 'static/files/9_Приложение_Полезные_ресурсы_для_подготовки учителя_и_самообразования_учащихся.pdf'
			},*/
			{
				name: 'Приложение: Зарплаты в России: аналитический материал (389КБ)',
				type: 'pdf',
				url: 'static/files/зарплаты_в России_ 2014_hh.pdf'
			}
		],
		ageList:ko.observableArray(),
		areaList:ko.observableArray(),
		sumCount:ko.observable(),
		hoverOn:ko.observable(false),
		promoCounter: function(number) {
			var digitsPlaceholder = 8;
			var digits = [];

			while (number) {
	            digits.push(number % 10);
	            number = Math.floor(number/10);
	        };

	        for(var i=0; i < digitsPlaceholder; i++)
	        {
	        	if(digits[i] > 0) {
	        		$('.b-promoCounter__item').eq(digitsPlaceholder-(i+1)).text(digits[i])
	        	} else {
	        		$('.b-promoCounter__item').eq(digitsPlaceholder-(i+1)).text('0');
	        	}
	        };

		},
		getMap:function(){
			var that = this;


			var data={"sumCount":7359916,"map":[{"counter":188254,"render_index":1,"paths":null,"placemark":["670","190"],"name":"Дальневосточный федеральный округ","boys":54},{"counter":675034,"render_index":2,"paths":null,"placemark":["495","280"],"name":"Сибирский федеральный округ","boys":54},{"counter":1944663,"render_index":5,"paths":null,"placemark":["160","175"],"name":"Центральный федеральный округ","boys":53},{"counter":838668,"render_index":4,"paths":null,"placemark":["290","145"],"name":"Северо-Западный федеральный округ","boys":52},{"counter":2265652,"render_index":6,"paths":null,"placemark":["230","230"],"name":"Приволжский федеральный округ","boys":50},{"counter":539723,"render_index":8,"paths":null,"placemark":["118","300"],"name":"Северо-Кавказский федеральный округ","boys":56},{"counter":503397,"render_index":7,"paths":null,"placemark":["140","245"],"name":"Южный федеральный округ","boys":77},{"counter":366879,"render_index":3,"paths":null,"placemark":["355","225"],"name":"Уральский федеральный округ","boys":52},{"counter":37646,"render_index":9,"paths":null,"placemark":["45","220"],"name":"Крымский федеральный округ","boys":51}]};


			that.sumCount(data.sumCount);
			//if(data)data=JSON.parse(data);

			that.map.removeAll();

			_.each(
				data.map,
				function(el){
					el.paths=returnMapPath(el.render_index-1);
					that.map.push(el);
				}
			);


			if(!that.hoverOn()){
				$.ajax({
					url:'/map',
					success:function (data) {

						//console.log('->map data:',data);

						that.sumCount(data.sumCount);
						//if(data)data=JSON.parse(data);

						that.map.removeAll();

						_.each(
							data.map,
							function(el){
								el.paths=returnMapPath(el.render_index-1);
								that.map.push(el);
							}
						);

						//that.someFunction();


					}
				});
			}






		},
		sendPersonal:function(fe){
		var resArr = $(fe).find('.select2-chosen');
		var obj = {};


			_.each(resArr,function(el){
				obj[el.id]=el.innerHTML;
			});

			//console.log('-> obj:',obj);

			$.ajax({
				url:'/newuser',
				method:'POST',
				data:obj,
				success:function (data) {
					//console.log('-> data:',data);
				}
			});


			//console.log('-> this.registrationState():',this.registrationState());

			if(this.registrationState()==1){
				ga('send', 'event', 'amnyam', 'sent');
				ga('send', 'pageview', '/amnyam_sent');
				yaCounter27136385.reachGoal('amnyam_sent');
				window.location.assign('maze.html');
			}else if(this.registrationState()==2){
				ga('send', 'event', 'kodu', 'sent');
				ga('send', 'pageview', '/kodu_sent');
				yaCounter27136385.reachGoal('kodu_sent');
				window.location.assign('lesson.html');
			}

		},
		getArea:function(lat,lng,done){
			var language = 'ru';
			$.ajax({
				url: "http://maps.googleapis.com/maps/api/geocode/json",
				data: {
					sensor: true,
					latlng: lat + "," + lng,
					language: language
				},
				success: function(answ){
					//console.log("Map.getAddress@result", answ)
					//if(answ.status == "OK" && answ.results[0] && answ.results[0].address_components){
					//	var components = answ.results[0].address_components
					//	for(var i in components) {
					//		var component = components[i],
					//			types = component.types;
					//		if(types.indexOf("locality") > -1) {
					//			result.city = component.short_name
					//		}
					//		if(types.indexOf("route") > -1) {
					//			result.street = component.short_name
					//		}
					//		if(types.indexOf("street_number") > -1) {
					//			result.street_number = component.short_name
					//		}
					//	}
					//}
					done(answ);
				},
				error: function(err){
					done(err);
				}
			});

		},
		endLess:function(){
			window.location.assign('share.html')
		},
		init:function init(){

			var that = this;

			//$.ajax({
			//	url:'/init',
			//	success:function (data) {
            //
			//		//console.log('->initialload data:',data);
            //
			//		//if(data)data=JSON.parse(data);
            //
			//		that.getMap();
            //
            //
			//		//setInterval(function(){
			//		//	that.getMap();
			//		//},120000);
            //
            //
			//		_.each(
			//			data.ages,
			//			function(el){
			//				that.ageList.push(el);
			//			}
			//		);
            //
			//		_.each(
			//			data.areas,
			//			function(el){
			//				that.areaList.push(el);
			//			}
			//		);
            //
			//		_.each(
			//			data.lessons,
			//			function(el){
            //
			//				var aaa={
			//					text:el.Text,
			//					video:el.Video_id,
			//					link:!el.Link?'#':el.Link,
			//					complite:false,
			//					number:el.Number
			//				};
            //
			//				that.lessons.push(aaa);
			//			}
			//		);
            //
			//		that.nextLesson(-1);
            //
			//		//lessons
            //
			//		$('.b-form__select').select2({
			//			width: '130px',
			//			minimumResultsForSearch: 10
			//		});
            //
			//		$('.b-form__select_lg').select2({
			//			width: '250px',
			//			minimumResultsForSearch: 10
			//		});
            //
            //
			//	}
			//});


					that.getMap();

					var data={"ages":[{"ID":1,"Name":" Младше 7 лет","Comment":""},{"ID":2,"Name":"7-10","Comment":null},{"ID":3,"Name":"11-13","Comment":null},{"ID":4,"Name":"14-15","Comment":null},{"ID":5,"Name":"16-18","Comment":null},{"ID":6,"Name":"19-23","Comment":null},{"ID":7,"Name":"Старше 23","Comment":""}],"areas":[{"area":"Адыгея Респ","geoid":"0","regionid":15,"region":"Южный федеральный округ"},{"area":"Алтай Респ","geoid":"0","regionid":10,"region":"Сибирский федеральный округ"},{"area":"Алтайский край","geoid":"1","regionid":10,"region":"Сибирский федеральный округ"},{"area":"Амурская обл","geoid":"0","regionid":9,"region":"Дальневосточный федеральный округ"},{"area":"Архангельская обл","geoid":"0","regionid":12,"region":"Северо-Западный федеральный округ"},{"area":"Астраханская обл","geoid":"1","regionid":15,"region":"Южный федеральный округ"},{"area":"Башкортостан Респ","geoid":"0","regionid":13,"region":"Приволжский федеральный округ"},{"area":"Белгородская обл","geoid":"0","regionid":11,"region":"Центральный федеральный округ"},{"area":"Брянская обл","geoid":"1","regionid":11,"region":"Центральный федеральный округ"},{"area":"Бурятия Респ","geoid":"2","regionid":10,"region":"Сибирский федеральный округ"},{"area":"Владимирская обл","geoid":"2","regionid":11,"region":"Центральный федеральный округ"},{"area":"Волгоградская обл","geoid":"2","regionid":15,"region":"Южный федеральный округ"},{"area":"Вологодская обл","geoid":"1","regionid":12,"region":"Северо-Западный федеральный округ"},{"area":"Воронежская обл","geoid":"3","regionid":11,"region":"Центральный федеральный округ"},{"area":"Дагестан Респ","geoid":"0","regionid":14,"region":"Северо-Кавказский федеральный округ"},{"area":"Еврейская Аобл","geoid":"1","regionid":9,"region":"Дальневосточный федеральный округ"},{"area":"Забайкальский край","geoid":"3","regionid":10,"region":"Сибирский федеральный округ"},{"area":"Ивановская обл","geoid":"4","regionid":11,"region":"Центральный федеральный округ"},{"area":"Ингушетия Респ","geoid":"1","regionid":14,"region":"Северо-Кавказский федеральный округ"},{"area":"Иркутская обл","geoid":"4","regionid":10,"region":"Сибирский федеральный округ"},{"area":"Кабардино-Балкарская Респ","geoid":"2","regionid":14,"region":"Северо-Кавказский федеральный округ"},{"area":"Калининградская обл","geoid":"2","regionid":12,"region":"Северо-Западный федеральный округ"},{"area":"Калмыкия Респ","geoid":"3","regionid":15,"region":"Южный федеральный округ"},{"area":"Калужская обл","geoid":"5","regionid":11,"region":"Центральный федеральный округ"},{"area":"Камчатский край","geoid":"2","regionid":9,"region":"Дальневосточный федеральный округ"},{"area":"Карачаево-Черкесская Респ","geoid":"3","regionid":14,"region":"Северо-Кавказский федеральный округ"},{"area":"Карелия Респ","geoid":"3","regionid":12,"region":"Северо-Западный федеральный округ"},{"area":"Кемеровская обл","geoid":"5","regionid":10,"region":"Сибирский федеральный округ"},{"area":"Кировская обл","geoid":"1","regionid":13,"region":"Приволжский федеральный округ"},{"area":"Коми Респ","geoid":"4","regionid":12,"region":"Северо-Западный федеральный округ"},{"area":"Костромская обл","geoid":"6","regionid":11,"region":"Центральный федеральный округ"},{"area":"Краснодарский край","geoid":"4","regionid":15,"region":"Южный федеральный округ"},{"area":"Красноярский край","geoid":"6","regionid":10,"region":"Сибирский федеральный округ"},{"area":"Крым Респ","geoid":"22","regionid":17,"region":"Крымский федеральный округ"},{"area":"Курганская обл","geoid":"0","regionid":16,"region":"Уральский федеральный округ"},{"area":"Курская обл","geoid":"7","regionid":11,"region":"Центральный федеральный округ"},{"area":"Ленинградская обл","geoid":"5","regionid":12,"region":"Северо-Западный федеральный округ"},{"area":"Липецкая обл","geoid":"8","regionid":11,"region":"Центральный федеральный округ"},{"area":"Магаданская обл","geoid":"3","regionid":9,"region":"Дальневосточный федеральный округ"},{"area":"Марий Эл Респ","geoid":"2","regionid":13,"region":"Приволжский федеральный округ"},{"area":"Мордовия Респ","geoid":"3","regionid":13,"region":"Приволжский федеральный округ"},{"area":"Москва г","geoid":"9","regionid":11,"region":"Центральный федеральный округ"},{"area":"Московская обл","geoid":"10","regionid":11,"region":"Центральный федеральный округ"},{"area":"Мурманская обл","geoid":"6","regionid":12,"region":"Северо-Западный федеральный округ"},{"area":"Ненецкий АО","geoid":"7","regionid":12,"region":"Северо-Западный федеральный округ"},{"area":"Нижегородская обл","geoid":"4","regionid":13,"region":"Приволжский федеральный округ"},{"area":"Новгородская обл","geoid":"8","regionid":12,"region":"Северо-Западный федеральный округ"},{"area":"Новосибирская обл","geoid":"7","regionid":10,"region":"Сибирский федеральный округ"},{"area":"Омская обл","geoid":"8","regionid":10,"region":"Сибирский федеральный округ"},{"area":"Оренбургская обл","geoid":"5","regionid":13,"region":"Приволжский федеральный округ"},{"area":"Орловская обл","geoid":"11","regionid":11,"region":"Центральный федеральный округ"},{"area":"Пензенская обл","geoid":"6","regionid":13,"region":"Приволжский федеральный округ"},{"area":"Пермский край","geoid":"7","regionid":13,"region":"Приволжский федеральный округ"},{"area":"Приморский край","geoid":"4","regionid":9,"region":"Дальневосточный федеральный округ"},{"area":"Псковская обл","geoid":"9","regionid":12,"region":"Северо-Западный федеральный округ"},{"area":"Ростовская обл","geoid":"5","regionid":15,"region":"Южный федеральный округ"},{"area":"Рязанская обл","geoid":"12","regionid":11,"region":"Центральный федеральный округ"},{"area":"Самарская обл","geoid":"8","regionid":13,"region":"Приволжский федеральный округ"},{"area":"Санкт-Петербург г","geoid":"10","regionid":12,"region":"Северо-Западный федеральный округ"},{"area":"Саратовская обл","geoid":"9","regionid":13,"region":"Приволжский федеральный округ"},{"area":"Саха /Якутия/ Респ","geoid":"5","regionid":9,"region":"Дальневосточный федеральный округ"},{"area":"Сахалинская обл","geoid":"6","regionid":9,"region":"Дальневосточный федеральный округ"},{"area":"Свердловская обл","geoid":"1","regionid":16,"region":"Уральский федеральный округ"},{"area":"Севастополь г","geoid":"22","regionid":17,"region":"Крымский федеральный округ"},{"area":"Северная Осетия - Алания Респ","geoid":"4","regionid":14,"region":"Северо-Кавказский федеральный округ"},{"area":"Смоленская обл","geoid":"13","regionid":11,"region":"Центральный федеральный округ"},{"area":"Ставропольский край","geoid":"5","regionid":14,"region":"Северо-Кавказский федеральный округ"},{"area":"Тамбовская обл","geoid":"14","regionid":11,"region":"Центральный федеральный округ"},{"area":"Татарстан Респ","geoid":"10","regionid":13,"region":"Приволжский федеральный округ"},{"area":"Тверская обл","geoid":"15","regionid":11,"region":"Центральный федеральный округ"},{"area":"Томская обл","geoid":"9","regionid":10,"region":"Сибирский федеральный округ"},{"area":"Тульская обл","geoid":"16","regionid":11,"region":"Центральный федеральный округ"},{"area":"Тыва Респ","geoid":"10","regionid":10,"region":"Сибирский федеральный округ"},{"area":"Тюменская обл","geoid":"2","regionid":16,"region":"Уральский федеральный округ"},{"area":"Удмуртская Респ","geoid":"11","regionid":13,"region":"Приволжский федеральный округ"},{"area":"Ульяновская обл","geoid":"12","regionid":13,"region":"Приволжский федеральный округ"},{"area":"Хабаровский край","geoid":"7","regionid":9,"region":"Дальневосточный федеральный округ"},{"area":"Хакасия Респ","geoid":"11","regionid":10,"region":"Сибирский федеральный округ"},{"area":"Ханты-Мансийский Автономный округ - Югра АО","geoid":"3","regionid":16,"region":"Уральский федеральный округ"},{"area":"Челябинская обл","geoid":"4","regionid":16,"region":"Уральский федеральный округ"},{"area":"Чеченская Респ","geoid":"6","regionid":14,"region":"Северо-Кавказский федеральный округ"},{"area":"Чувашская Респ","geoid":"13","regionid":13,"region":"Приволжский федеральный округ"},{"area":"Чукотский АО","geoid":"8","regionid":9,"region":"Дальневосточный федеральный округ"},{"area":"Ямало-Ненецкий АО","geoid":"5","regionid":16,"region":"Уральский федеральный округ"},{"area":"Ярославская обл","geoid":"17","regionid":11,"region":"Центральный федеральный округ"}],"lessons":[{"ID":1,"Text":"<h3>Дорогие друзья!</h3><p>Добро пожаловать на «Час кода», в течение которого мы с вами научимся основам создания компьютерных игр и создадим нашу первую простейшую игру!</p><p>Наверняка многие из вас чувствовали радость творчества – когда рисовали картину, собирали модель из конструктора или решали сложную задачу. На самом деле программирование – это как раз такое творчество, только неограниченное! Силой мысли (и еще немного при помощи пальцев) мы можем создавать внутри компьютера практически всё, что угодно.</p>\r\rKodu – это простая среда для создания своих искусственных миров и компьютерных игр. Вы можете населять такие миры объектами, а при желании пойти на шаг дальше – задать объектам правила поведения, <b>программу</b>\r, по которым они будут жить и действовать в этом мире.","Video_id":"kabzAHWU728","Link":"","Number":0},{"ID":2,"Text":"<p>Чтобы начать работать в среде Kodu, необходимо скачать её и установить на компьютер. Откройте в браузере приведенную ниже ссылку на установщик Kodu и следуйте инструкциям.</p><a href=\"https://coderussia.blob.core.windows.net\r/ddd/KoduSetup.msi\" download>СКАЧАТЬ</a><br><p style=\"padding-top: 15px;\">В приведенном видео содержится более подробное описание процесса установки. После того, как вы установите Kodu – переходите к следующему этапу.</p>","Video_id":"HUTKKe3ePik","Link":null,"Number":1},{"ID":3,"Text":"<p>Давайте запустим Kodu в отдельном окне. Мы рекомендуем смотреть видео по одному эпизоду, после чего повторять усвоенные действия в Kodu, чтобы в конце урока у нас получилась законченная игра. Если вдруг изложение для вас окажется слишком быстрым, или вы захотите разобраться с чем-то более подробно – рекомендуем посмотреть полноценный курс по Kodu по этой ссылке:</p><a href=\"http://aka.ms/kodumva\">ПОСМОТРЕТЬ КУРС</a><br><p style=\"padding-top: 15px;\">В этом уроке мы научимся создавать новый мир в Kodu, населять его простейшими объектами (Kodu и летающей рыбой), а также добавлять к объектам простейшее поведение – блуждающее движение.</p>","Video_id":"grOW-PVGNl4","Link":null,"Number":2},{"ID":4,"Text":"В этом эпизоде мы усовершенствуем наши объекты – научим Kodu двигаться (т.е. рассмотрим, как добавить в игру управления), а рыбу – приносить монеты раз в несколько секунд. Останется добавить совсем немного функциональности – чтобы Kodu мог кушать монеты и накапливать очки – и у нас получится простейшая игра!","Video_id":"qHWZAH08bdQ","Link":null,"Number":3},{"ID":5,"Text":"Добавим к нашей игре условие окончания игры. Пускай рыба будет преследовать главного героя и при первой же возможности его съедать! Мы научимся создавать события, реагирующие на столкновения или на наличие объектов в зоне видимости, а также рассмотрим специальное действие – конец игры.","Video_id":"6wJQ2sg3BM8","Link":null,"Number":4},{"ID":6,"Text":"<p>Дадим Kodu возможность защищаться, позволяя ему стрелять в противника – тем самым превратим нашу игру в увлекательный поединок!</p><p>Также мы научимся изменять ландшафт игры, добавлять горы, воду и другие элементы пейзажа.</p>","Video_id":"WHgDukRbHzE","Link":null,"Number":5},{"ID":7,"Text":"Чтобы еще больше усложнить нашу игру, давайте превратим её в лабиринт! Для этого мы научимся рисовать ландшафт разными типами кистей, а также создавать возвышенности по определенному типу поверхности с помощью инструмента «волшебная кисть». Наконец, мы покажем, как можно сделать игру «от первого лица» - и наша игра будет закончена!","Video_id":"x31MLdzsQnY","Link":null,"Number":6},{"ID":8,"Text":"Поздравляем вас – вы сегодня научились программировать! Программировать – это не так сложно, как кажется! Если вас заинтересовала эта тема, то рекомендуем вам продолжить изучать  мир программирования!","Video_id":"dvXyfYswk3Y","Link":null,"Number":7}]};

					_.each(
						data.ages,
						function(el){
							that.ageList.push(el);
						}
					);

					_.each(
						data.areas,
						function(el){
							that.areaList.push(el);
						}
					);

					_.each(
						data.lessons,
						function(el){

							var aaa={
								text:el.Text,
								video:el.Video_id,
								link:!el.Link?'#':el.Link,
								complite:false,
								number:el.Number
							};

							that.lessons.push(aaa);
						}
					);

					that.nextLesson(-1);

					//lessons

					$('.b-form__select').select2({
						width: '130px',
						minimumResultsForSearch: 10
					});

					$('.b-form__select_lg').select2({
						width: '250px',
						minimumResultsForSearch: 10
					});






		}
	};

	window.animateShow = ko.computed(function(elem) {
		$(this).velocity({ opacity: 0, stroke: "#ffffff", scale: .2 }, 300);
	});

	window.mapainmate = ko.observable(1);

	window.initLesson = function() {
		var $hash = window.location.hash;
		if(!$hash.length ) {
			window.location.hash = ('lesson' + data.activeLesson());
			$('.b-lessonsCounter__item-link').removeClass('b-lessonsCounter__item-link_active');
			$('.b-lessonsCounter__item-link').eq(data.activeLesson()).addClass('b-lessonsCounter__item-link_active');
		} else {
			var $active = window.location.hash.split('#lesson')[1];
			data.activeLesson($active - 1);
			$('.b-lessonsCounter__item-link').removeClass('b-lessonsCounter__item-link_active');
			$('.b-lessonsCounter__item-link').eq($active - 1).addClass('b-lessonsCounter__item-link_active');
		}
	};

	data.newPromoCounter = ko.computed(function(){
		return data.promoCounter(data.sumCount());
	});

	ko.applyBindings(data);

	data.init();

	//if (navigator.geolocation) {
	//	navigator.geolocation.getCurrentPosition(function (position) {
	//		var lat =position.coords.latitude, lng = position.coords.longitude;
    //
	//		//console.log('latitude: ', position.coords.latitude);
	//		//console.log('longitude: ', position.coords.longitude);
    //
	//		data.getArea(lat,lng,function(result){
	//			//console.log('-> result:',result);
	//		});
    //
	//	});
	//}



});