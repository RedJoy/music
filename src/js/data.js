/*
    数据缓存
    requestData 缓存发现音乐四大分类歌曲
    recomment 缓存首页推荐歌单歌曲信息
*/
var musicClassifyList;//用于存储分类歌曲信息
var recomListName;//用于存储歌单名称
var recomListSong;//用于存储歌单歌曲信息

//获取发现音乐数据
$.ajax({
    url:'server.php/discover',
    type:'get',
    dataType:'json',
    success:function(datas){
        if(datas.code == 200){
            musicClassifyList = datas.data;
        }
    },
    complete:function(){
        player.musicClassify();
        player.playMusic('#cata','.plays');
        player.adds('.adds');
        player.collect('.heart');
    }
});

//获取首页推荐歌单
$.ajax({
    url:'server.php/playlist',
    type:'get',
    dataType:'json',
    success:function(datas){
        if(datas.code == 200){
            recomListName = datas.data;
        }
    },
    complete:function(){
        $.ajax({
            url:'server.php/playlist/songs',
            type:'get',
            dataType:'json',
            success:function(datas){
                if(datas.code == 200){
                    recomListSong = datas.data;
                }
            },
            complete:function(){
                player.recomMusicBox();
                player.recomendMusicList();
                player.closeRecommendMusicList();
                player.playMusic('#home','.plays');
                player.adds('.adds');
                player.collect('.heart');
            }
        });
    }
});

function requestData () {
	var className = ['影视原声','华语流行','欧美经典','日韩新曲'];//声明类别名称
    var data = musicClassifyList;
	return [className,data];
}

function recomment(){
    //声明推荐歌单名称
    var listName = recomListName;
    var listDesc = [//声明推荐歌单介绍
        '跟着心走，如果你觉得他是对的，那就跟着他走！跟着心走，如果你觉得你是对的，那就跟着你走！一颗心的世界是自由的，没有束缚。',
        '迷路森林，一不小心，我把你惊醒，也许注定，爱的憧憬，等着你回应。沿途风景，留下的幻影，开始感应，张开眼睛想与你同行。',
        '每个人回忆起青春，回忆起匆匆那年，总会想起某个人,想起那年天空正蓝，阳光正好，我们如此遇见,回忆起青春，总会想起某个人',
        '要成为一座海，自己有千百里潮水奔涌。要爬上雪山吃烧烤，要开着渔船追落日，要七老八十写情书，要漂过冰川看极光。',
        '陪你长大的灰猫,吃辣条干脆面的课间,他经过时荡漾起来的风,小纸条里一件件的心事,一起上厕所的漂亮女同学。'
    ];
    var recommentList = recomListSong;
    return [listName,listDesc,recommentList];
}
