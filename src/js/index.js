/*
	音乐播放器的实质方法体，
	提供音乐的操控支持
	提供歌曲分类的生成
    author:renjing
    date:2016-04
*/


var win = window;
var doc = document;
var localStorage = win.localStorage;
// var MusicList = localStorage.musicList;

var player = {};
var defaults ={
    'isLogin':0,
    'userid':'',
    'username':'',
    'id':'',
    'name':'',
    'singer':'',
    'src':'',
    'img':''
};
player = {
	init:function(){
		var self = this;

        self.recomMusicBox();
		self.musicClassify();
        self.info();
		self.login();
        self.fromValidate();
		self.closeLogin();
		self.voiceShow();
        self.mode();
        self.changeMode();
		self.floatLabel('.ipt');
		self.navSwitch();
		self.bannerPlay();
		self.loginChange();
        // self.listChangeBG('.u_title_list tr');
		self.listChangeBG('.my_collect tr');
        self.recomendMusicList();
        self.closeRecommendMusicList();
        self.playMusic('#cata .plays');
        self.playMusic('#home .plays');
        self.playBtn();
        self.collect('.heart');
        self.adds('.adds');
        self.bannerAdd();
        self.collectDel('.my_collect .del');
        self.musicListDel("#playList",".del");

        
        // self.progressSlider();
        
	},
    mode:function(){//播放模式
        if($('#mode').hasClass('icn-loop')){
            localStorage.mode = 'loop';
        }else if($('#mode').hasClass('icn-random')){
            localStorage.mode = 'random';
        }else{
            localStorage.mode = 'defaults';
        }
    },
    changeMode:function(){//模式切换
        var Audio = document.getElementById('Audio');//播放器
        var self = this;
        var index = 0,
            music_list = [],
            musicalList = new Array();
        $('#mode').get(0).addEventListener('click',function(){

            music_list = JSON.parse(localStorage.musicList);
            currentId = $(Audio).attr('data-id');

            if($(this).hasClass('icn-loop')){
                $(this).removeClass('icn-loop').addClass('icn-random').attr('title','随机播放');
                localStorage.mode = 'random';
                Audio.loop = '';
            }else if($(this).hasClass('icn-random')){
                $(this).removeClass('icn-random').addClass('icn-list').attr('title','列表循环');
                localStorage.mode = 'list';
                Audio.loop = '';
            }else{
                $(this).removeClass('icn-list').addClass('icn-loop').attr('title','单曲循环');
                localStorage.mode = 'loop';
            }
            
            for(var i in music_list){
                musicalList.push(music_list[i].musicId);
            }
            for(var j in musicalList){//查看播放列表中是否已经存在当前播放歌曲
                if(parseInt(musicalList[j]) === parseInt(currentId)){
                    console.log('ChangeMode 里的jj',j);
                    console.log('ChangeMode 里的parseInt(musicalList[j])',parseInt(musicalList[j]));
                    console.log('ChangeMode 里的parseInt(currentId)',parseInt(currentId));
                    $('#playList').find('tr').removeClass('active');
                    $('#playList').find('tr').eq(j).addClass('active');
                    self.mode();
                    if(localStorage.mode == 'loop'){
                        $(Audio).attr('loop','loop');
                    }else if(localStorage.mode == 'random'){
                        Audio.loop = '';
                        index = Math.floor(Math.random()*musicalList.length);
                        console.log('ChangeMode 里的index',index);
                        defaults.id = music_list[index].musicId,
                        defaults.name = music_list[index].musicName,
                        defaults.singer = music_list[index].musicSinger,
                        defaults.src = music_list[index].musicSrc,
                        defaults.img = music_list[index].musicImg;
                    }else{
                        Audio.loop ='';
                        index = parseInt(j)+1;
                        if(index == musicalList.length){
                            index = 0;
                        }
                        console.log("循环播放index:",index);
                        defaults.id = music_list[index].musicId,
                        defaults.name = music_list[index].musicName,
                        defaults.singer = music_list[index].musicSinger,
                        defaults.src = music_list[index].musicSrc,
                        defaults.img = music_list[index].musicImg;
                    }
                }
            }
        });
        this.mode();
    },
    playListSelect:function(){
        var Audio = document.getElementById('Audio');//播放器
        var musicId = $(Audio).attr('data-id');
        var j = 0,
            music_list = [],
            musicalList = new Array();
        music_list = JSON.parse(localStorage.musicList);
        for(var i in music_list){
            musicalList.push(music_list[i].musicId);
        }
        for( j in musicalList){//查看播放列表中是否已经存在当前播放歌曲
            if(parseInt(musicalList[j]) === parseInt(musicId)){
                $('#playList').find('tr').removeClass('active');
                $('#playList').find('tr').eq(j).addClass('active');
            }
        }
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
			                            <table class="m_table" id="cata" cellpadding="0" cellspacing="0">\
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
                var item = '<tr data-id="'+musicList[j].Id+'" data-src="'+musicList[j].Src+'" data-img="'+musicList[j].Img+'">\
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
                            'background:#262d37;',
                            'background:#e46a1d;',
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
                                        <table class="m_table" id="home" cellpadding="0" cellspacing="0">\
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
                var item =  '<tr data-id="'+musicList[j].Id+'" data-src="'+musicList[j].Src+'" data-img="'+musicList[j].Img+'">\
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
    info:function(){//登陆与否判断
        $.ajax({
            url:'server.php/info',
            type:'post',
            dataType:'json',
            success:function(data){
                if(data.code == 200){
                    defaults.userid = data.data.user_id;
                    defaults.username = data.data.username;
                    $('#user').html(defaults.username).show();
                    $('#js-login').hide();
                    $('#logout').show();
                    defaults.isLogin = 1;
                }else{
                    defaults.isLogin = 0;
                    console.log(data.msg);
                }
            }
        })
    },
	login:function(){//登陆显示、注册切换
		$('#js-login').on("click",function(){
			$('.modal-backdropss').show();
			$('#signin').show();
		});
		$('.modal-backdropss').on('click',function() {
			$('#signin').hide();
			$(this).hide();
		});
        $('#signin-btn').on('click',function(){//登陆ajax请求
            $.ajax({
                url:'server.php/login',
                type:'post',
                data:{
                    username : $('.js-own-name').val(), 
                    password : $('.js-pass-pwd').val()
                },
                dataType:'json',
                success:function(data){
                    if(data.code == 200){
                        defaults.isLogin = 1;
                        defaults.userid = data.data.user_id;
                        defaults.username = data.data.username;
                        $('#user').html(defaults.username).show();
                        $('#js-login').hide();
                        $('#logout').show();
                        $('#signin').hide();
                        $('.modal-backdropss').hide();
                        defaults.isLogin = 1;
                    }else{
                        $('#signin-globle-error').html(data.msg);
                        defaults.isLogin = 0;
                    }
                }
            })
        });
        $('#register-btn').on('click',function(){//注册ajax请求
            $.ajax({
                url:'server.php/register',
                type:'post',
                data:{
                    username: $('#username').val(),
                    password: $('#pwd').val(),
                    pwdconfm: $('#pwdconfirm').val()
                },
                dataType:'json',
                success:function(data){
                    if(data.code == 200){
                        $('#signin-globle-error').html('注册成功！请登录');
                        $('#login').show();
                        $('#register').hide();
                    }else{
                        $('#register-globle-error').html(data.msg);
                    }
                }
            })
        });
        $('#logout').on('click',function(){//退出ajax请求
            $.ajax({
                url:'server.php/logout',
                type:'post',
                data:{
                    username : $('#user').text()
                },
                dataType:'json',
                success:function(data){
                    if(data.code == 200){
                        defaults.isLogin = 0;
                        window.location.reload();
                    }else{
                        console.log('error');
                        defaults.isLogin = 1;
                    }
                }
            })
        });
	},
    fromValidate:function(){//表单验证
        function errorType(_name){//正则判断返回结果
            if( _name == ""){ 
                return 0;
            }else if(_name.length<6 || _name.length>16){ //合法长度为6-18个字符
                return -1;
            }else if(! /^\w+$/.test( _name ) ){ //用户名只能包含_,英文字母，数字  
                return -2;
            }else{
                return -3;
            }
        }
        function errorTip($nameTip,_name){//显示对于提示信息
            var _error = errorType(_name);
            if(_error == 0){
                $nameTip.text('不能为空');
            }else if(_error == -1){
                $nameTip.text('长度为6-16个字符');
            }else if(_error == -2){
                $nameTip.text('只能包含_，英文字母，数字');
            }else{
                $nameTip.text('');
            }
        }
        function validate(item,target,tipDom){//验证
            $(item).on('blur',target,function(){
                var _name = $.trim($(this).val()),
                    $nameTip = $(tipDom);
                errorTip($nameTip,_name);       
            });
        }
        validate('#login','#js-name','#js-login-name');//登陆用户名验证
        validate('#login','#js-password','#js-login-password');//登陆密码验证
        validate('#register','#username','#js-username');//注册用户名验证
        validate('#register','#pwd','#js-reg-password');//注册密码验证

       
        $('#register').on('blur','#pwdconfirm',function(){//注册再次密码验证
            var _name = $.trim($(this).val()),
                _pwd = $.trim($('#pwd').val());
                $nameTip = $('#js-reg-confirm');
            if(_name != _pwd){
                $nameTip.text('两次密码不一致');
            }else{
                $nameTip.text('');
            }
        });

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

        if(total == 1) { // 一张图 不执行轮播
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
	voiceShow:function(){// 音量调节显示
		var self = this,
        $vol = $('.play-banner').find("#vol");
		$vol.on("click",function(){
			$('.play-banner').find('.m-vol').toggle();
		});
        self.volumeSlider();
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
        var self = this,
            Audio = document.getElementById('Audio');//获取音乐播放器
    	$('.header-wrap li').find('a').on('click',function() {
    		var order = $(this).attr('data-icon');
			$(this).parents('li').addClass('active').siblings().removeClass('active');
            
            if(order == 2){//显示为播放列表时
                if(!localStorage.musicList){
                    $('.my_music').find('.u_title').hide();
                    $('.my_music').find('.u_title_list').hide();
                    $('.my_music').find('.no-login').show();
                }else{
                    $('.my_music .u_title_list').find('tbody').html('');
                    $('.my_music').find('.no-login').hide();
                    var musicLists = JSON.parse(localStorage.musicList),
                        currentId = $(Audio).attr('data-id');

                    for(var i in musicLists){
                        var num = parseInt(i)+1;
                        if(parseInt(musicLists[i].musicId) === parseInt(currentId)){
                            var current = 'class="active"';
                        }else{
                            var current = '';
                        }
                        var list = '<tr '+current+' data-id="'+musicLists[i].musicId+'" data-src="'+musicLists[i].musicSrc+'" data-img="'+musicLists[i].musicImg+'">\
                                        <td class="m_list_num"><span>'+num+'</span></td>\
                                        <td class="music_name"><div>'+musicLists[i].musicName+'</div></td>\
                                        <td class="music_singer"><div>'+musicLists[i].musicSinger+'</div></td>\
                                        <td class="plays"><div class="play"></div></td>\
                                        <td class="collects"><div class="heart"></div></td>\
                                        <td class="dels"><div class="del">-</div></td>\
                                    </tr>';
                        $('.my_music .u_title_list').find('tbody').append(list);
                    }
                    self.listChangeBG('.u_title_list tr');
                    $('.my_music .u_title').find('#flag_trackCount').html(musicLists.length);
                    $('.my_music').find('.u_title').show();
                    $('.my_music').find('.u_title_list').show();
                    
                }
                self.playMusic("#playList .play");
                
            }
            if(order == 3){//显示为我的收藏时
                if(defaults.isLogin == 0){
                    $('#js-login').trigger('click');
                }else{
                    $('.main-box').removeClass('control0 control1 control2 control3').addClass('control'+order);
                    ////ajax请求收藏列表
                    //     $.ajax({
                    //         url:'server.php/collect_list',
                    //         type:'post',
                    //         data:{
                    //             userid : defaults.userid;
                    //         },
                    //         dataType:'json',
                    //         success:function(data){
                    //             if(data.code == 200){
                    //                 var datas = data.data;
                    //                 if(datas == 0){
                    //                     $('.my_collect').find('.u_title').hide();
                    //                     $('.my_collect').find('.u_title_list').hide();
                    //                     $('.my_collect').find('.no-login').show();
                    //                 }else{
                    //                     $('.my_collect').find('.no-login').hide();
                    //                     $('.my_collect').find('.u_title').show();
                    //                     for(var i in datas){
                    //                         var num = parseInt(i)+1;
                    //                         var list = '<tr data-id="'+datas[j].id+'" data-src="'+datas[j].src+'" data-img="'+datas[j].img+'">\
                    //                                         <td class="m_list_num"><span>'+num+'</span></td>\
                    //                                         <td class="music_name"><div>'+datas[i].title+'</div></td>\
                    //                                         <td class="music_singer"><div>'+datas[i].singer+'</div></td>\
                    //                                         <td class="plays"><div class="play"></div></td>\
                    //                                         <td class="collects"><div class="collect"></div></td>\
                    //                                         <td class="dels"><div class="del">-</div></td>\
                    //                                     </tr>';
                    //                     }
                    //                     $('.my_collect .u_title_list').find('.tbody').append(list);
                    //                 }
                    //             }else{
                    //                 console.log('加载收藏列表失败');
                    //             }
                    //         }
                    //     });
                }
            }else{
                $('.main-box').removeClass('control0 control1 control2 control3').addClass('control'+order);
            }
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
    closeRecommendMusicList:function(){//关闭音乐推荐列表
        $('.modal-backdrops').on('click',function(){
            $(this).hide();
            $('.music_item a').find('.img').removeClass('musical_desc');
            $('.music_item a').find('.info').removeClass('musical_list');
        })
        $('.modal-backdrops').on('click','.close',function(){
            $('.modal-backdrops').trigger('click');
        })
    },
    //播放方法
    play:function(id,name,singer,src,img,music_list,musicalList,musicDesc,i,j,m){
        var Audio = document.getElementById('Audio');//获取音乐播放器
        var self = this;
        var index = 0;

        console.log(name);

        $(Audio).attr({'src':src,'data-id':id});
        Audio.load();//加载歌曲
        

        //渲染播放面板详细信息
        self.showMusicDetail(id,name,singer,img,src);

        Audio.addEventListener("canplay", function() {//歌曲加载完毕
            if(localStorage.musicList){
                music_list = JSON.parse(localStorage.musicList);
                for( i in music_list){
                    musicalList.push(music_list[i].musicId);
                }
                for( j in musicalList){//查看播放列表中是否已经存在当前播放歌曲
                    if(parseInt(musicalList[j]) === parseInt(musicDesc.musicId)){
                        m = 1;
                        $('#playList').find('tr').removeClass('active');
                        $('#playList').find('tr').eq(j).addClass('active');
                    }
                }
                if(m == 0){
                    music_list.push(musicDesc);
                }
            
                localStorage.musicList =JSON.stringify(music_list);
            }else{
                music_list.push(musicDesc);
                localStorage.musicList = JSON.stringify(music_list);
            }
            var index = 0,
                music_lists = [],
                musicalLists = new Array();
            var currentIds = $(Audio).attr('data-id');
                music_lists = JSON.parse(localStorage.musicList);
            for(var i in music_lists){
                musicalLists.push(music_lists[i].musicId);
            }
            for(var j in musicalLists){//查看播放列表中是否已经存在当前播放歌曲
                if(parseInt(musicalLists[j]) === parseInt(currentIds)){
                    console.log('ChangeMode2 里的jj',j);
                    console.log('ChangeMode2 里的parseInt(musicalLists[j])',parseInt(musicalLists[j]));
                    console.log('ChangeMode2 里的parseInt(currentId)',parseInt(currentIds));
                    $('#playList').find('tr').removeClass('active');
                    $('#playList').find('tr').eq(j).addClass('active');
                    self.mode();
                    if(localStorage.mode == 'loop'){
                        $(Audio).attr('loop','loop');
                    }else if(localStorage.mode == 'random'){
                        Audio.loop = '';
                        index = Math.floor(Math.random()*musicalLists.length);
                        console.log('ChangeMode 里的index',index);
                        defaults.id = music_lists[index].musicId,
                        defaults.name = music_lists[index].musicName,
                        defaults.singer = music_lists[index].musicSinger,
                        defaults.src = music_lists[index].musicSrc,
                        defaults.img = music_lists[index].musicImg;
                    }else{
                        Audio.loop ='';
                        index = parseInt(j)+1;
                        if(index == musicalLists.length){
                            index = 0;
                        }
                        console.log("循环播放index:",index);
                        defaults.id = music_lists[index].musicId,
                        defaults.name = music_lists[index].musicName,
                        defaults.singer = music_lists[index].musicSinger,
                        defaults.src = music_lists[index].musicSrc,
                        defaults.img = music_lists[index].musicImg;
                    }
                }
            }

            self.playListSelect();
            Audio.play();//播放歌曲
            $('.play-banner .album-cover').addClass('play-rotate');
            self.timeConversion(Audio.duration,'b');//显示当前歌曲时长
            self.progressSlider(); //歌曲加载之后才可以拖动进度条
            setInterval(function() {
                var currentTime = Audio.currentTime;
                self.timeConversion(currentTime, "em");
            }, 1000);
            self.dragMove();
        }, false);

        // Audio.addEventListener("pause",function() { //监听暂停
        //     if(!$plyBanner.find('.play').hasClass('pause')){//更改播放按钮
        //         $plyBanner.find('.play').addClass('pause');
        //     }
        //     if (Audio.currentTime == Audio.duration) {
        //         // Audio.stop();
        //         Audio.currentTime = 0;
        //     }
        // }, false);
        // Audio.addEventListener("play",function() { //监听暂停
        //     if(!$plyBanner.find('.play').hasClass('pause')){//更改播放按钮
        //         $plyBanner.find('.play').addClass('pause');
        //     }
        //         // self.dragMove();
        // }, false);

        Audio.addEventListener("ended", function() {//歌曲播放完毕
            Audio.currentTime = 0;
            var index = 0,
                music_lists = [],
                musicalLists = new Array();
            var currentIds = $(Audio).attr('data-id');
                music_lists = JSON.parse(localStorage.musicList);

            if($('.play-banner').find('.play').hasClass('pause')){//更改播放按钮
                $('.play-banner').find('.play').removeClass('pause');
            }
            $('.play-banner .album-cover').removeClass('play-rotate');

            
            $(Audio).attr({'src':defaults.src,'data-id':defaults.id});
            Audio.load();//加载歌曲

            
            //渲染播放面板详细信息
            self.showMusicDetail(defaults.id,defaults.name,defaults.singer,defaults.img,defaults.src);
        }, false)

    },
    playMusic:function(play){//播放分类歌曲
        var self = this;
        $(play).on('click', function() {
            var $parents = $(this).parents('tr'),//获取点击的父节点
                Audio = document.getElementById('Audio'),//获取音乐播放器
                $plyBanner = $('.play-banner');
            var musicId = $parents.attr('data-id'),
                musicSrc = $parents.attr('data-src'),
                musicImg = $parents.attr('data-img'),
                catogroy = $parents.parent('.col').attr('data-catogroy'),
                musicName = $parents.find('.music_name').text(),
                musicSinger = $parents.find('.music_singer').text(),
                // musicCurrentTime = $plyBanner.find('.time em'),
                music_list = [],
                musicalList = new Array(),
                musicDesc = {
                    'musicId' : musicId,
                    'musicName' : musicName,
                    'musicSinger' : musicSinger,
                    'musicSrc' : musicSrc,
                    'musicImg' : musicImg
                }
                i = 0,
                j = 0,
                m = 0;
            self.play(musicId,musicName,musicSinger,musicSrc,musicImg,music_list,musicalList,musicDesc,i,j,m);
        });
    },
    nextPlay:function(){
        // $('.play-banner').on('click',function(){
        //     var index = 0,
        //         music_lists = [],
        //         musicalLists = new Array();
        //     var currentIds = $(Audio).attr('data-id');
        //         music_lists = JSON.parse(localStorage.musicList);
        //     for(var i in music_lists){
        //         musicalLists.push(music_lists[i].musicId);
        //     }
        //     if
        //     for(var j in musicalLists){//查看播放列表中是否已经存在当前播放歌曲
        //         if(parseInt(musicalLists[j]) === parseInt(currentIds)){
        //             $('#playList').find('tr').removeClass('active');
        //             $('#playList').find('tr').eq(j).addClass('active');
        //             self.mode();
        //             if(localStorage.mode == 'loop'){
        //                 $(Audio).attr('loop','loop');
        //             }else if(localStorage.mode == 'random'){
        //                 Audio.loop = '';
        //                 index = Math.floor(Math.random()*musicalLists.length);
        //                 console.log('ChangeMode 里的index',index);
        //                 defaults.id = music_lists[index].musicId,
        //                 defaults.name = music_lists[index].musicName,
        //                 defaults.singer = music_lists[index].musicSinger,
        //                 defaults.src = music_lists[index].musicSrc,
        //                 defaults.img = music_lists[index].musicImg;
        //             }else{
        //                 Audio.loop ='';
        //                 index = parseInt(j)+1;
        //                 if(index == musicalLists.length){
        //                     index = 0;
        //                 }
        //                 console.log("循环播放index:",index);
        //                 defaults.id = music_lists[index].musicId,
        //                 defaults.name = music_lists[index].musicName,
        //                 defaults.singer = music_lists[index].musicSinger,
        //                 defaults.src = music_lists[index].musicSrc,
        //                 defaults.img = music_lists[index].musicImg;
        //             }
        //         }
        //     }
        // });
    },
    timeConversion:function(time,showDom){//转换每首歌曲时长格式并显示
        var $timePlace = $('.play-banner .time').find(showDom);
        var minutes = parseInt(time / 60),//分
            seconds = parseInt(time % 60);//秒
        if (minutes < 10)
            minutes = "0" + minutes;
        if (seconds < 10)
            seconds = "0" + seconds;
        var showTime = "" + minutes + "" + ":" + "" + seconds + "";
        $timePlace.html(showTime);
    },
    playBtn:function(){//播放按钮
        var self = this;
        $('.play-banner').on('click','.play',function(){
            var Audio = document.getElementById('Audio');//获取音乐播放器
            if(typeof $(Audio).attr('src') == 'undefined'){
                return;
            }else{
                if($(this).hasClass('pause')){
                    $(this).removeClass('pause');
                    Audio.pause();//暂停歌曲
                    $('.play-banner .album-cover').removeClass('play-rotate');
                }else{
                    $(this).addClass('pause');
                    Audio.play();//播放歌曲
                    self.dragMove();//进度条
                    $('.play-banner .album-cover').addClass('play-rotate');
                }
            }
            
        })
        
    },
    showMusicDetail:function(id,name,singer,img,src){//播放面板显示播放当前歌曲详情
        var Audio = document.getElementById('Audio'),//获取音乐播放器
            $plyBanner = $('.play-banner'),
            $plyBtn = $plyBanner.find('.play'),
            $img = $plyBanner.find('.album-cover img'),
            $name = $plyBanner.find('.mus-box .mus-name'),
            $singer = $plyBanner.find('.mus-box .mus-singer');

        if(!$plyBtn.hasClass('pause')){//更改播放按钮
            $plyBtn.addClass('pause');
        }

        $img.attr('src',img);
        $name.html(name);
        $singer.html(singer);
    },
    dragMove:function() {//进度条加载
        var Audio = document.getElementById('Audio'),//获取音乐播放器
            $progress = $('.progress-bar'),
            $drag = $progress.find('.cur'),
            $speed = $progress.find('.cur btn');
        setInterval(function() {
            $drag.width(Audio.currentTime / Audio.duration * 220);
            $drag.find('.btn').css('left',Audio.currentTime / Audio.duration * 220);
        }, 500);
    },
    progressSlider:function(){ //进度条拖拽
        var Audio = document.getElementById('Audio'),//获取音乐播放器
            $progressBar = $('.progress-bar .cur'),
            $progressBtn = $progressBar.find('.btn'),
            _pageX = 0,
            _x = 0,
            _left = 0,
            _bgLeft = 0,
            status = false;
        $progressBtn.on('mousedown',function(e){
            _pageX = $progressBtn.offset().left;
            _x = e.pageX - _left;
            status = true;
            Audio.pause();
        }).on('mousemove',function(e){
            if(status){
                _left = e.pageX - _x;
                if(_left < 0){
                    _left = 0;
                }
                if(_left > 220){
                    _left = 220;
                }
                $progressBtn.css('left',_left);
                $progressBar.width(_left);
                Audio.currentTime = _left / 220 * Audio.duration;
            }
        }).on('mouseup',function(){
            status = false;
            Audio.play();
        })
        $('.progress-bar').on('click',function(e){
            if(!status){
                _bgLeft = $progressBar.offset().left;
                _left = e.pageX - _bgLeft;
                if(_left < 0){
                    _left = 0;
                }
                if(_left > 220){
                    _left = 220;
                }
                $progressBtn.css('left',_left);
                $progressBar.css('width',_left);
                Audio.currentTime = _left / 220 * Audio.duration;
            }
        });
    },
    volumeSlider:function(){//声音拖动
        var Audio = document.getElementById('Audio');//获取音乐播放器
            Audio.volume = 0.5;
        $('.vol-box .vbg').find('.curr').css('height', 0.5 * 93+'px');
        $('.vol-box .vbg').find('.btn').css('top', 0.5 * 93 - 9 + 'px');
        var $volumeBanner = $('.vol-box .vbg'),
            $volumeBar = $volumeBanner.find('.curr'),
            $volumeBtn = $volumeBanner.find('.btn'),
            _pageY = 0,
            _y = 0,
            _top = 0,
            _bgTop = 0,
            status = false;
        $volumeBtn.on('mousedown',function(e){
            _pageY = $volumeBar.offset().top;
            // console.log($volumeBar.offset().top);
            _y = e.pageY - _top;
            status = true;
        }).on('mousemove',function(e){
            if(status){
                _top = e.pageY - _y;
                if(_top < -9){
                    _top = -9;
                }
                if(_top > 84){
                    _top = 84;
                }
                $volumeBtn.css('top',_top);
                $volumeBar.height(84-_top);
                Audio.volume = (84-_top) / 93;
            }
        })
        $(document).on('mouseup',function(){
            status = false;
        })
        // $volumeBanner.on('click',function(e){
        //     if(!status){
        //         _bgTop = $volumeBanner.offset().top;
        //         _top = e.pageX - _bgTop;console.log(_bgTop);
        //         if(_top < 0){
        //             _top = 0;
        //         }
        //         if(_top > 93){
        //             _top = 93;
        //         }
        //         $volumeBtn.css('top',_top-9);
        //         $volumeBar.css('height',_top);
        //         Audio.volume = (_top) / 93;
        //     }
        // });
    },
    collect:function(heart){// 收藏
        var $heart = $(heart);
        $heart.on('click',function(){
            if(defaults.isLogin == 0){
                $('#js-login').trigger('click');
            }else{
                //ajax
                var musicId = $(this).parent('tr').attr('data-id');
                // $.ajax({
                //     url:'server.php/collect',
                //     type:'post',
                //     data:{
                //         musicId : musicId,
                //         userid : defaults.userid
                //     },
                //     dataType:'json',
                //     success:function(data){
                //         if(data.code == 200){
                //             if($(this).hasClass('heartAnimation')){
                //                 $(this).addClass('heartOver').removeClass('heartAnimation');
                //             }else{
                //                 $(this).addClass('heartAnimation').removeClass('heartOver');
                //             }
                //         }else{
                //             console.log('添加到收藏列表失败');
                //         }
                //     }
                // });
                
            }
        });
    },
    adds:function(adds){//添加
        var $adds = $(adds);            
        $adds.on('click',function(){
            var $tr = $(this).parents('tr'),
                musicId = $tr.attr('data-id'),
                musicSrc = $tr.attr('data-src'),
                musicImg = $tr.attr('data-img'),
                musicName = $tr.find('.music_name').text(),
                musicSinger = $tr.find('.music_singer').text(),
                music_list = [],
                musicalList = new Array(),
                musicDesc = {
                    'musicId' : musicId,
                    'musicName' : musicName,
                    'musicSinger' : musicSinger,
                    'musicSrc' : musicSrc,
                    'musicImg' : musicImg
                }
                i = 0,
                j = 0,
                m = 0;
            if(localStorage.musicList){
                music_list = JSON.parse(localStorage.musicList);
                for( i in music_list){
                    musicalList.push(music_list[i].musicId);
                }
                for( j in musicalList){//查看播放列表中是否已经存在当前添加歌曲
                    if(parseInt(musicalList[j]) === parseInt(musicDesc.musicId)){
                        m = 1;
                    }
                }
                if(m == 0){
                    music_list.push(musicDesc);
                }
                
                localStorage.musicList =JSON.stringify(music_list);
            }else{
                music_list.push(musicDesc);
                localStorage.musicList = JSON.stringify(music_list);
            }
        });
    },
    bannerAdd:function(){//播放面板添加至播放列表
        $('.vol-box').on('click','.icn-add',function(){
            var Audio = document.getElementById('Audio');//获取音乐播放器
            if(typeof $(Audio).attr('src') != 'undefined'){
                var musicId = $(Audio).attr('data-id'),
                    musicName = $('.mus-box').find('.mus-name').text(),
                    musicSinger = $('.mus-box').find('.mus-singer').text(),
                    musicSrc = $(Audio).attr('src'),
                    musicImg = $('.album-cover').find('img').attr('src'),
                    music_list = [],
                    musicalList = new Array(),
                    musicDesc = {
                        'musicId' : musicId,
                        'musicName' : musicName,
                        'musicSinger' : musicSinger,
                        'musicSrc' : musicSrc,
                        'musicImg' : musicImg
                    }
                    i = 0,
                    j = 0,
                    m = 0;
                if(localStorage.musicList){
                    music_list = JSON.parse(localStorage.musicList);
                    for( i in music_list){
                        musicalList.push(music_list[i].musicId);
                    }
                    for( j in musicalList){//查看播放列表中是否已经存在当前添加歌曲
                        if(parseInt(musicalList[j]) === parseInt(musicDesc.musicId)){
                            m = 1;
                        }
                    }
                    if(m == 0){
                        music_list.push(musicDesc);
                    }
                    
                    localStorage.musicList =JSON.stringify(music_list);
                }else{
                    music_list.push(musicDesc);
                    localStorage.musicList = JSON.stringify(music_list);
                }
                $('.header-wrap li').find('a').eq(2).trigger('click');//重新渲染播放列表    
            }
        })
    },
    musicListDel:function(parents,child){//删除
        var $parents = $(parents);
        $parents.delegate(child,'click',function(){
            var musicId = $(this).parents('tr').attr('data-id'),
                musicLists = JSON.parse(localStorage.musicList);

            for(var i in musicLists){//将歌曲从localStorage里删除
                if(parseInt(musicId) === parseInt(musicLists[i].musicId)){
                    musicLists.splice(i,1);
                }
            }
            localStorage.musicList = JSON.stringify(musicLists);
            $('.header-wrap li').find('a').eq(2).trigger('click');//重新渲染播放列表            
        });
    },
    collectDel:function(del){//删除
        var $dels = $(del);
        $dels.on('click',function(){
            //ajax
            var musicId = $(this).parent('tr').attr('data-id');
            // $.ajax({
            //     url:'server.php/del',
            //     type:'post',
            //     data:{
            //         musicId : musicId,
            //         userid : defaults.userid
            //     },
            //     dataType:'json',
            //     success:function(data){
            //         if(data.code == 200){
            //             $(this).parent('tr').animate({'height':0},200);
            //         }else{
            //             console.log('删除失败');
            //         }
            //     }
            // });
        });
    }

}


$(function () {
	player.init();
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