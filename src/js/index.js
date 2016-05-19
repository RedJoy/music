/*
	音乐播放器的实质方法体，
	提供音乐的操控支持
	提供歌曲分类的生成
*/


var win = window;
var doc = document;
var player = {};
var defaults ={

}
player = {
	init:function(){
		var self = this;
		
        self.recomMusicBox();
		self.musicClassify();
		self.login();
		self.closeLogin();
		self.voiceControl();
		self.collect('.heart');
		self.floatLabel('.ipt');
		self.navSwitch();
		self.bannerPlay();
		self.loginChange();
        self.listChangeBG('.u_title_list tr');
		self.listChangeBG('.my_collect tr');
        self.recomendMusicList();
        self.closeRecommendMusicList();
        self.playMusic();
        self.playBtn();
        
	},
	musicClassify:function(){
		var Data       = requestData(),//接收数据文件,0是列表，1是音乐文件
			Audio      = document.getElementById('Audio'),//获取音乐播放器
			$SongClass = $('#music_list');
		var ClassList = Data[0],
			i = 0,
			j = 0,
			cols;

		for(var i in ClassList){
			// 渲染大分类列表
			var list = '<div class="col '+cols+'" id="catalogue'+i+'" data-catogroy="'+i+'">\
			                    <figure>\
			                        <img src="src/imgs/list'+i+'.jpg" alt="'+ClassList[i]+'" title="'+ClassList[i]+'">\
			                        <figcaption class="col'+i+'" style="background:url(src/imgs/list'+i+'.png)">\
			                            <h3>'+ClassList[i]+'</h3>\
			                            <table class="m_table" cellpadding="0" cellspacing="0">\
                                            <tbody></tbody>\
                                        </table>\
			                        </figcaption>\
			                    </figure>\
			                </div>';
			$SongClass.append(list);	
            musicList(parseInt(i));
		}
        function musicList(listIndex){
            var musicList = Data[1][listIndex];
            for(var j in musicList){
                var munber = parseInt(j)+1;
                var item = '<tr data-id="'+musicList[j].Id+'" data-src="'+musicList[j].Src+'" data-img="'+musicList[j].Img+'" data-time="'+musicList[j].Time+'">\
                                <td class="m_list_num"><span >'+munber+'</span></td>\
                                <td class="music_name">'+musicList[j].Name+'</td>\
                                <td class="music_singer">'+musicList[j].Singer+'</td>\
                                <td class="more iconfont clrfix">\
                                    &#xebbb;\
                                    <div class="more_box">\
                                        <div class="l plays iconfont">&#xe619;</div>\
                                        <div class="l adds iconfont">&#xe61c;</div>\
                                        <div class="l collects"><div class="heart"></div></div>\
                                    </div>\
                                </td>\
                            </tr>'
                            
                $('#catalogue'+listIndex).find('tbody').append(item);
            }
        }
	},
    recomMusicBox:function(){//歌单渲染
        var recomMusicDate = recomment(),//接受推荐歌单数据，0是歌单名，1是歌单介绍，2是歌单音乐文件
            Audio      = document.getElementById('Audio'),//获取音乐播放器
            $recomBox = $('.music_recomment .music_list');
        var musicList = recomMusicDate[0],
            musicDesc = recomMusicDate[1],
            i = 0,
            j = 0;
        var styleList = [
                            'background:#3A87A1;',
                            'background:#6D4D4C;',
                            'background:#101010;',
                            'background:#7B767C;',
                            'background:#862624;margin-right:0px;'
                        ];
        for(var i in musicList){
            // 渲染大分类列表
            var list = '<div class="music_item circle colored effect bottom_to_top l"\
                             style="'+styleList[i]+'">\
                            <a href="javascript:;">\
                                <div class="img">\
                                    <img src="src/imgs/1-'+i+'.jpg" alt="img">\
                                </div>\
                                <div class="info info'+i+'">\
                                    <h4>介绍</h4>\
                                    <p>'+musicDesc[i]+'</p>\
                                    <div class="list">\
                                        <table class="m_table" cellpadding="0" cellspacing="0">\
                                            <tbody></tbody>\
                                        </table>\
                                    </div>\
                                </div>\
                            </a>\
                            <div class="music_desc">\
                                <h4>'+musicList[i]+'</h4>\
                            </div>\
                        </div>';
            $recomBox.append(list);    
            musicListBox(parseInt(i));
        }
        function musicListBox(listIndex){
            var musicList =recomMusicDate[2][listIndex];
            for(var j in musicList){
                var munber = parseInt(j)+1;
                var item =  '<tr>\
                                <td class="m_list_num"><span >'+munber+'</span></td>\
                                <td class="music_name"><div>'+musicList[j].Name+'</div></td>\
                                <td class="music_singer"><div>'+musicList[j].Singer+'</div></td>\
                                <td class="plays iconfont">&#xe619;</td>\
                                <td class="adds iconfont">&#xe61c;</td>\
                                <td class="collects"><div class="heart"></td>\
                            </tr>';
                // if($('.musical_list') != ''){            
                    // $('.info').append(itemBox);
                    $('.info'+listIndex).find('tbody').append(item);
                // }
            }
        }
    },
	login:function(){
		$('#js-login').on("click",function(){
			$('.modal-backdrop').show();
			$('#signin').show();
		});
		$('.modal-backdrop').on('click',function() {
			$('#signin').hide();
			$(this).hide();
		});
        $('#signin-btn').on('click',function(){
            $.ajax({
                url:'/server.php/login',
                type:'post',
                data:{
                    username : $('.js-own-name').val(), 
                    password : $('.js-pass-pwd').val()
                },
                datatype:'json',
                success:function(data){
                    
                }
            })
        })
	},
	closeLogin:function(){
		$('.rl-close').on('click',function(){
			$('.modal-backdrop').trigger('click');
		})
	},
	bannerPlay:function(){// 首页轮播图-渐变
		var banner = $('.turning_box'),
            slides = banner.find('.banner-slide'),
            dotContainer = banner.find('.banner-dots'),
            dotTpl = '',
            dots,
            total = slides.length,
            index = -1,
            duration = 500,
            interval = 5000,
            timer = null;

        // 一张图 不执行轮播
        if(total == 1) {
            next();
            return;
        }

        dotTpl = '<span></span>';

        $.each(slides, function(i, el){
            dotContainer.append(dotTpl);
        });

        dots = dotContainer.find('span');

        function show(i){
            var cur = slides.filter('.slide-active');

            slides.stop(true, true);

            cur.removeClass('slide-active').fadeOut(600);

            slides.eq(i).addClass('slide-active').fadeIn(800);

            dots && dots.removeClass('active').eq(i).addClass('active');
        }
        function prev(){
            index--;

            index = index < 0 ? total - 1 : index;

            show(index);
        }

        function next(){
            index++;
            index = index > total - 1 ? 0 : index;

            show(index);
        }

        function autoPlay(){
            if(timer) clearInterval(timer);

            timer = setInterval(function(){
                next();
            }, interval);
        }

        banner.find('.banner-anchor').removeAttr('style');

        banner.on('click', '.prev', function(e){
            prev();
        }).on('click', '.next', function(e){
            next();
        }).on('click', '.banner-dots span', function(e){
            if($(this).hasClass('active')) return;

            var i = $(this).index();

            index = i;

            show(i);
        });

        banner.on('mouseenter', function(e){
            if(timer) clearInterval(timer);
        }).on('mouseleave', function(e){
            autoPlay();
        });

        next();

        autoPlay();
    
	},
	voiceControl:function(){// 音量调节
		var $vol = $('.play-banner').find("#vol");

		$vol.on("click",function(){
			$('.play-banner').find('.m-vol').toggle();
		});
	},
	collect:function(heart){// 收藏
		var $heart = $(heart)
		$heart.on('click',function(){
			if($(this).hasClass('heartAnimation')){
				$(this).addClass('heartOver').removeClass('heartAnimation');
			}else{
				$(this).addClass('heartAnimation').removeClass('heartOver');
			}
			
		});
	},
	floatLabel:function (inputType) {//登录注册输入框，提示上浮
        $(inputType).each(function () {
            var $this = $(this);
            $this.focus(function () {
                $this.next().addClass('active');
            });
            $this.blur(function () {
                if ($this.val() === '' || $this.val() === 'blank') {
                    $this.next().removeClass();
                }
            });
        });
    },
    navSwitch:function (){//导航切换
    	$('.header-wrap li').find('a').on('click',function() {
    		var order = $(this).attr('data-icon');
			$(this).parents('li').addClass('active').siblings().removeClass('active');
    		
    		$('.main-box').removeClass('control0 control1 control2 control3').addClass('control'+order);
    	});
    },
    loginChange:function(){//登录、注册切换
    	$('.change_link').on('click', 'a', function() {
    		if($(this).hasClass('log')){
    			$('#login').show();
    	    	$('#register').hide();

    		}else{
	    		$('#login').hide();
	    	    $('#register').show();
    		}
    	});
    },
    listChangeBG:function(list){//隔行变色
    	var list = $(list);
    	for(var i = 0 ; i < list.length ; i++){
    		if( i % 2 != 0)
    			$(list[i]).css('background','#f7f7f7');
    	}
    },
    recomendMusicList:function(){//音乐推荐弹出详细列表
        $('.music_item').on('click','a',function(){
            $('.index .modal-backdrop').show();
            $(this).find('.img').addClass('musical_desc');
            $(this).find('.info').addClass('musical_list');
            $('.index .modal-backdrop').append('<div class="close iconfont">&#xe635;</div>');
        });
    },
    closeRecommendMusicList:function(){
        $('.modal-backdrops').on('click',function(){
            $(this).hide();
            $('.music_item a').find('.img').removeClass('musical_desc');
            $('.music_item a').find('.info').removeClass('musical_list');
        })
        $('.modal-backdrops').on('click','.close',function(){
            $('.modal-backdrops').trigger('click');
        })
    },
    playMusic:function(){//播放分类歌曲
        var self = this;
        $('.more_box').on('click', '.plays', function() {
            var $parents = $(this).parents('tr'),//获取点击的父节点
                Audio = document.getElementById('Audio'),//获取音乐播放器
                $plyBanner = $('.play-banner');
            var musicId = $parents.attr('data-id'),
                musicSrc = $parents.attr('data-src'),
                musicImg = $parents.attr('data-img'),
                musicTime = $parents.attr('data-time'),
                catogroy = $parents.parent('.col').attr('data-catogroy'),
                musicName = $parents.find('.music_name').html(),
                musicSinger = $parents.find('.music_singer').html();

            console.log(musicSrc);
            $(Audio).attr({'src':musicSrc});
            Audio.load();//加载歌曲
            Audio.play();//播放歌曲
            // AllRun();
            self.showMusicDetail(musicId,musicName,musicSinger,musicImg,musicSrc,musicTime);
        });
    },
    playBtn:function(){//播放按钮
        $('.play-banner').on('click','.play',function(){
            var Audio = document.getElementById('Audio');//获取音乐播放器
            if($(this).hasClass('pause')){
                $(this).removeClass('pause');
                Audio.pause();//暂停歌曲
                $('.play-banner .album-cover').removeClass('play-rotate');
            }else{
                $(this).addClass('pause');
                Audio.play();//播放歌曲
                $('.play-banner .album-cover').addClass('play-rotate');
            }
        })
        
    },
    showMusicDetail:function(id,name,singer,img,src,time){//播放面板显示播放当前歌曲详情
        var Audio = document.getElementById('Audio'),//获取音乐播放器
            $plyBanner = $('.play-banner'),
            $plyBtn = $plyBanner.find('.play'),
            $img = $plyBanner.find('.album-cover img'),
            $name = $plyBanner.find('.mus-box .mus-name'),
            $singer = $plyBanner.find('.mus-box .mus-singer'),
            $time = $plyBanner.find('.time b');

        if(!$plyBtn.hasClass('pause')){//更改播放按钮
            $plyBtn.addClass('pause');
        }

        $img.attr('src',img);
        $name.html(name);
        $singer.html(singer);
        $time.html(time)
    }

}


$(function () {
	player.init();
    console.log(Audio.currentTime);

});

// (function($){
// 	// Settings
// 	var repeat = localStorage.repeat || 0,//通过localstorage来 ，控制重复 （1为循环重复播放，0为不循环播放）
// 		shuffle = localStorage.shuffle || 'false',//通过localStorage 来，控制播放是否为随机 （true为随机，false为顺序）
// 		continous = true,
// 		autoplay = true,
// 		playlist = [
// 		{
// title: '德国第一装甲师进行曲',
// artist: '德国',
// album: '德国第一装甲师进行曲.mp3',
// cover:'img/1.jpg',
// mp3: 'mp3/deguo.mp3',
// ogg: ''
// },
// {
// title: '亡灵序曲',
// artist: '魔兽世界',
// album: '魔兽世界 - 亡灵序曲.mp3',
// cover: 'img/2.jpg',
// mp3: 'mp3/The Dawn.mp3',
// ogg: ''
// },
// {
// title: 'chenparty dj.mp3',
// artist: '德国童声',
// album: 'chenparty 超好听的德国童声 dj.mp3',
// cover: 'img/3.jpg',
// mp3: 'mp3/chenparty dj.mp3',
// ogg: ''
// },];

// 	// Load playlist
// 	for (var i=0; i<playlist.length; i++){
// 		var item = playlist[i];
// 		$('#playlist').append('<li>'+item.artist+' - '+item.title+'</li>');
// 	}

// 	var time = new Date(),
// 		currentTrack = shuffle === 'true' ? time.getTime() % playlist.length : 0,
// 		trigger = false,
// 		audio, timeout, isPlaying, playCounts;

// 	var play = function(){
// 		audio.play();
// 		$('.playback').addClass('playing');
// 		timeout = setInterval(updateProgress, 500);
// 		isPlaying = true;
// 	}

// 	var pause = function(){
// 		audio.pause();
// 		$('.playback').removeClass('playing');
// 		clearInterval(updateProgress);
// 		isPlaying = false;
// 	}

// 	// Update progress
// 	var setProgress = function(value){
// 		var currentSec = parseInt(value%60) < 10 ? '0' + parseInt(value%60) : parseInt(value%60),
// 			ratio = value / audio.duration * 100;

// 		$('.timer').html(parseInt(value/60)+':'+currentSec);
// 		$('.progress .pace').css('width', ratio + '%');
// 		$('.progress .slider a').css('left', ratio + '%');
// 	}

// 	var updateProgress = function(){
// 		setProgress(audio.currentTime);
// 	}

// 	// Progress slider
// 	$('.progress .slider').slider({step: 0.1, slide: function(event, ui){
// 		$(this).addClass('enable');
// 		setProgress(audio.duration * ui.value / 100);
// 		clearInterval(timeout);
// 	}, stop: function(event, ui){
// 		audio.currentTime = audio.duration * ui.value / 100;
// 		$(this).removeClass('enable');
// 		timeout = setInterval(updateProgress, 500);
// 	}});

// 	// Volume slider
// 	var setVolume = function(value){
// 		audio.volume = localStorage.volume = value;
// 		$('.volume .pace').css('width', value * 100 + '%');
// 		$('.volume .slider a').css('left', value * 100 + '%');
// 	}

// 	var volume = localStorage.volume || 0.5;
// 	$('.volume .slider').slider({max: 1, min: 0, step: 0.01, value: volume, slide: function(event, ui){
// 		setVolume(ui.value);
// 		$(this).addClass('enable');
// 		$('.mute').removeClass('enable');
// 	}, stop: function(){
// 		$(this).removeClass('enable');
// 	}}).children('.pace').css('width', volume * 100 + '%');

// 	$('.mute').click(function(){
// 		if ($(this).hasClass('enable')){
// 			setVolume($(this).data('volume'));
// 			$(this).removeClass('enable');
// 		} else {
// 			$(this).data('volume', audio.volume).addClass('enable');
// 			setVolume(0);
// 		}
// 	});

// 	// Switch track
// 	var switchTrack = function(i){
// 		if (i < 0){
// 			track = currentTrack = playlist.length - 1;
// 		} else if (i >= playlist.length){
// 			track = currentTrack = 0;
// 		} else {
// 			track = i;
// 		}

// 		$('audio').remove();
// 		loadMusic(track);
// 		if (isPlaying == true) play();
// 	}

// 	// Shuffle
// 	var shufflePlay = function(){
// 		var time = new Date(),
// 			lastTrack = currentTrack;
// 		currentTrack = time.getTime() % playlist.length;
// 		if (lastTrack == currentTrack) ++currentTrack;
// 		switchTrack(currentTrack);
// 	}

// 	// Fire when track ended
// 	var ended = function(){
// 		pause();
// 		audio.currentTime = 0;
// 		playCounts++;
// 		if (continous == true) isPlaying = true;
// 		if (repeat == 1){
// 			play();
// 		} else {
// 			if (shuffle === 'true'){
// 				shufflePlay();
// 			} else {
// 				if (repeat == 2){
// 					switchTrack(++currentTrack);
// 				} else {
// 					if (currentTrack < playlist.length) switchTrack(++currentTrack);
// 				}
// 			}
// 		}
// 	}

// 	var beforeLoad = function(){
// 		var endVal = this.seekable && this.seekable.length ? this.seekable.end(0) : 0;
// 		$('.progress .loaded').css('width', (100 / (this.duration || 1) * endVal) +'%');
// 	}

// 	// Fire when track loaded completely
// 	var afterLoad = function(){
// 		if (autoplay == true) play();
// 	}

// 	// Load track
// 	var loadMusic = function(i){
// 		var item = playlist[i],
// 			newaudio = $('<audio>').html('<source src="'+item.mp3+'"><source src="'+item.ogg+'">').appendTo('#player');
		
// 		$('.cover').html('<img src="'+item.cover+'" alt="'+item.album+'">');
// 		$('.tag').html('<strong>'+item.title+'</strong><span class="artist">'+item.artist+'</span><span class="album">'+item.album+'</span>');
// 		$('#playlist li').removeClass('playing').eq(i).addClass('playing');
// 		audio = newaudio[0];
// 		audio.volume = $('.mute').hasClass('enable') ? 0 : volume;
// 		audio.addEventListener('progress', beforeLoad, false);
// 		audio.addEventListener('durationchange', beforeLoad, false);
// 		audio.addEventListener('canplay', afterLoad, false);
// 		audio.addEventListener('ended', ended, false);
// 	}

// 	loadMusic(currentTrack);
// 	$('.playback').on('click', function(){
// 		if ($(this).hasClass('playing')){
// 			pause();
// 		} else {
// 			play();
// 		}
// 	});
// 	$('.rewind').on('click', function(){
// 		if (shuffle === 'true'){
// 			shufflePlay();
// 		} else {
// 			switchTrack(--currentTrack);
// 		}
// 	});
// 	$('.fastforward').on('click', function(){
// 		if (shuffle === 'true'){
// 			shufflePlay();
// 		} else {
// 			switchTrack(++currentTrack);
// 		}
// 	});
// 	$('#playlist li').each(function(i){
// 		var _i = i;
// 		$(this).on('click', function(){
// 			switchTrack(_i);
// 		});
// 	});

// 	if (shuffle === 'true') $('.shuffle').addClass('enable');
// 	if (repeat == 1){
// 		$('.repeat').addClass('once');
// 	} else if (repeat == 2){
// 		$('.repeat').addClass('all');
// 	}

// 	$('.repeat').on('click', function(){
// 		if ($(this).hasClass('once')){
// 			repeat = localStorage.repeat = 2;
// 			$(this).removeClass('once').addClass('all');
// 		} else if ($(this).hasClass('all')){
// 			repeat = localStorage.repeat = 0;
// 			$(this).removeClass('all');
// 		} else {
// 			repeat = localStorage.repeat = 1;
// 			$(this).addClass('once');
// 		}
// 	});

// 	$('.shuffle').on('click', function(){
// 		if ($(this).hasClass('enable')){
// 			shuffle = localStorage.shuffle = 'false';
// 			$(this).removeClass('enable');
// 		} else {
// 			shuffle = localStorage.shuffle = 'true';
// 			$(this).addClass('enable');
// 		}
// 	});
// })(jQuery);