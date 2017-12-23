/*
    数据缓存
    requestData 缓存发现音乐四大分类歌曲
    recomment 缓存首页推荐歌单歌曲信息
*/
// var musicClassifyList;//用于存储分类歌曲信息
// var recomListName;//用于存储歌单名称
// var recomListSong;//用于存储歌单歌曲信息

// //获取发现音乐数据
// $.ajax({
//     url:'server.php/discover',
//     type:'get',
//     dataType:'json',
//     success:function(datas){
//         if(datas.code == 200){
//             musicClassifyList = datas.data;
//         }
//     },
//     complete:function(){
//         player.musicClassify();
//         player.playMusic('#cata','.plays');
//         player.adds('.adds');
//         player.collect('.heart');
//     }
// });

// //获取首页推荐歌单
// $.ajax({
//     url:'server.php/playlist',
//     type:'get',
//     dataType:'json',
//     success:function(datas){
//         if(datas.code == 200){
//             recomListName = datas.data;
//         }
//     },
//     complete:function(){
//         $.ajax({
//             url:'server.php/playlist/songs',
//             type:'get',
//             dataType:'json',
//             success:function(datas){
//                 if(datas.code == 200){
//                     recomListSong = datas.data;
//                 }
//             },
//             complete:function(){
//                 player.recomMusicBox();
//                 player.recomendMusicList();
//                 player.closeRecommendMusicList();
//                 player.playMusic('#home','.plays');
//                 player.adds('.adds');
//                 player.collect('.heart');
//             }
//         });
//     }
// });

// function requestData () {
// 	var className = ['影视原声','华语流行','欧美经典','日韩新曲'];//声明类别名称
//     var data = musicClassifyList;
// 	return [className,data];
// }

// function recomment(){
//     //声明推荐歌单名称
//     var listName = recomListName;
//     var listDesc = [//声明推荐歌单介绍
//         '跟着心走，如果你觉得他是对的，那就跟着他走！跟着心走，如果你觉得你是对的，那就跟着你走！一颗心的世界是自由的，没有束缚。',
//         '迷路森林，一不小心，我把你惊醒，也许注定，爱的憧憬，等着你回应。沿途风景，留下的幻影，开始感应，张开眼睛想与你同行。',
//         '每个人回忆起青春，回忆起匆匆那年，总会想起某个人,想起那年天空正蓝，阳光正好，我们如此遇见,回忆起青春，总会想起某个人',
//         '要成为一座海，自己有千百里潮水奔涌。要爬上雪山吃烧烤，要开着渔船追落日，要七老八十写情书，要漂过冰川看极光。',
//         '陪你长大的灰猫,吃辣条干脆面的课间,他经过时荡漾起来的风,小纸条里一件件的心事,一起上厕所的漂亮女同学。'
//     ];
//     var recommentList = recomListSong;
//     return [listName,listDesc,recommentList];
// }


function requestData () {
    // body...
    var className = ['影视原声','华语流行','欧美经典','日韩新曲'];//声明类别名称
    var data = [
        //第一个类别
        [
            
            {   
                'Id':'0',
                'Name':'To Dartmoor',
                'Singer':'神探夏洛克',
                'Src':'storage/songs/To Dartmoor.mp3',
                'Img':'src/imgs/list1-1.jpg',
                'Catogroy':'0',
                'musicList':''
            },
            {   
                'Id':'1',
                'Name':'More Than A Woman',
                'Singer':'破产姐妹',
                'Src':'storage/songs/More Than A Woman.mp3',
                'Img':'src/imgs/list1-2.jpg',
                'Catogroy':'0',
                'musicList':''
            },
            {
                'Id':'2',
                'Name':'Always',
                'Singer':'太阳的后裔',
                'Src':'storage/songs/always.mp3',
                'Img':'src/imgs/list1-3.jpg',
                'Catogroy':'0',
                'musicList':'0'
            },
            {   
                'Id':'3',
                'Name':'红颜旧',
                'Singer':'刘涛',
                'Src':'storage/songs/红颜旧.mp3',
                'Img':'src/imgs/list1-4.jpg',
                'Catogroy':'0',
                'musicList':'0'
            },
            {
                'Id':'4',
                'Name':'一直很安静',
                'Singer':'阿桑(仙剑一)',
                'Src':'storage/songs/一直很安静.mp3',
                'Img':'src/imgs/list1-5.jpg',
                'Catogroy':'0',
                'musicList':'0'
            },
            {
                'Id':'5',
                'Name':'时间煮雨',
                'Singer':'郁可唯(小时代)',
                'Src':'storage/songs/时间煮雨.mp3',
                'Img':'src/imgs/list1-9.jpg',
                'Catogroy':'0',
                'musicList':'1'
            },
            {
                'Id':'6',
                'Name':'Happy',
                'Singer':'神偷奶爸',
                'Src':'storage/songs/Happy.mp3',
                'Img':'src/imgs/list1-7.jpg',
                'Catogroy':'0',
                'musicList':''
            },
            {   
                'Id':'7',
                'Name':'Davichi',
                'Singer':'没关系,是爱情啊',
                'Src':'storage/songs/Davichi.mp3',
                'Img':'src/imgs/list1-8.jpg',
                'Catogroy':'0',
                'musicList':'1'
            },
            {   
                'Id':'8',
                'Name':'热雪',
                'Singer':'小时代',
                'Src':'storage/songs/热雪.mp3',
                'Img':'src/imgs/list1-6.jpg',
                'Catogroy':'0',
                'musicList':'1'
            },
            {   
                'Id':'9',
                'Name':'江湖笑',
                'Singer':'神雕侠侣',
                'Src':'imagsong/江湖笑.mp3',
                'Img':'src/imgs/list1-10.jpg',
                'Catogroy':'0',
                'musicList':'1'
            }
        ],
        //第二个类别
        [
            {   
                'Id':'10',
                'Name':'好久不见',
                'Singer':'陈奕迅',
                'Src':'storage/songs/好久不见.mp3',
                'Img':'src/imgs/list2-1.jpg',
                'Catogroy':'1',
                'musicList':'0'
            },
            {   
                'Id':'11',
                'Name':'我的歌声里',
                'Singer':'曲婉婷',
                'Src':'storage/songs/我的歌声里.mp3',
                'Img':'src/imgs/list2-2.jpg',
                'Catogroy':'1',
                'musicList':'2'
            },
            {
                'Id':'12',
                'Name':'野子',
                'Singer':'苏运莹',
                'Src':'storage/songs/野子.mp3',
                'Img':'src/imgs/list2-3.jpg',
                'Catogroy':'1',
                'musicList':'2'
            },
            {
                'Id':'13',
                'Name':'演员',
                'Singer':'薛之谦',
                'Src':'storage/songs/演员.mp3',
                'Img':'src/imgs/list2-4.jpg',
                'Catogroy':'1',
                'musicList':'2'
            },
            {
                'Id':'14',
                'Name':'我在人民广场吃炸鸡',
                'Singer':'阿肆',
                'Src':'storage/songs/我在人民广场吃炸鸡.mp3',
                'Img':'src/imgs/list2-5.jpg',
                'Catogroy':'1',
                'musicList':'2'
            },
            {
                'Id':'15',
                'Name':'南山南',
                'Singer':'张磊',
                'Src':'storage/songs/南山南.mp3',
                'Img':'src/imgs/list2-6.jpg',
                'Catogroy':'1',
                'musicList':'2'
            },
            {
                'Id':'16',
                'Name':'黑白',
                'Singer':'方大同',
                'Src':'storage/songs/黑白.mp3',
                'Img':'src/imgs/list2-7.jpg',
                'Catogroy':'2',
                'musicList':'2'
            },
            {
                'Id':'17',
                'Name':'普通朋友',
                'Singer':'陶喆',
                'Src':'storage/songs/普通朋友.mp3',
                'Img':'src/imgs/list2-8.jpg',
                'Catogroy':'1',
                'musicList':'1'
            },
            {
                'Id':'18',
                'Name':'旅行的意义',
                'Singer':'陈绮贞',
                'Src':'storage/songs/旅行的意义.mp3',
                'Img':'src/imgs/list2-9.jpg',
                'Catogroy':'1',
                'musicList':'2'
            },
            {
                'Id':'19',
                'Name':'很靠近海',
                'Singer':'蔡健雅',
                'Src':'storage/songs/很靠近海.mp3',
                'Img':'src/imgs/list2-10.jpg',
                'Catogroy':'1',
                'musicList':'1'
            }

        ],
        //第三个类别
        [
            
            {
                'Id':'20',
                'Name':'Uptown Funk',
                'Singer':'Mark Ronson,Bruno Mars',
                'Src':'storage/songs/Uptown Funk.mp3',
                'Img':'src/imgs/list3-1.jpg',
                'Catogroy':'2',
                'musicList':'3'
            },
            {
                'Id':'21',
                'Name':'Ours',
                'Singer':'Taylor Swift',
                'Src':'storage/songs/Ours.mp3',
                'Img':'src/imgs/list3-2.jpg',
                'Catogroy':'2',
                'musicList':'1'
            },
            {
                'Id':'22',
                'Name':'Someone Like You',
                'Singer':'Adele',
                'Src':'storage/songs/Someone Like You.mp3',
                'Img':'src/imgs/list3-3.jpg',
                'Catogroy':'2',
                'musicList':'3'
            },
            {
                'Id':'23',
                'Name':'Firework',
                'Singer':'Katy Perry',
                'Src':'storage/songs/Firework.mp3',
                'Img':'src/imgs/list3-4.jpg',
                'Catogroy':'2',
                'musicList':'4'
            },
            {
                'Id':'24',
                'Name':'Diamonds',
                'Singer':'Rihanna',
                'Src':'storage/songs/Diamonds.mp3',
                'Img':'src/imgs/list3-5.jpg',
                'Catogroy':'2',
                'musicList':'3'
            },
            {
                'Id':'25',
                'Name':'Rolling in the Deep',
                'Singer':'Adele',
                'Src':'storage/songs/Rolling in the Deep.mp3',
                'Img':'src/imgs/list3-3.jpg',
                'Catogroy':'2',
                'musicList':'3'
            },
            {
                'Id':'26',
                'Name':'Innocence',
                'Singer':'Avril Lavigne',
                'Src':'storage/songs/Innocence.mp3',
                'Img':'src/imgs/list3-7.jpg',
                'Catogroy':'2',
                'musicList':'4'
            },
            {
                'Id':'27',
                'Name':'Baby One More Time',
                'Singer':'Britney Spears',
                'Src':'storage/songs/Baby One More Time.mp3',
                'Img':'src/imgs/list3-8.jpg',
                'Catogroy':'2',
                'musicList':'3'
            },
            {
                'Id':'28',
                'Name':'Let It Go',
                'Singer':'Demi Lovato',
                'Src':'storage/songs/Let It Go.mp3',
                'Img':'src/imgs/list3-9.jpg',
                'Catogroy':'2',
                'musicList':'3'
            },
            {
                'Id':'29',
                'Name':"We Can't Stop",
                'Singer':'Miley Cyrus',
                'Src':"storage/songs/We Can't Stop.mp3",
                'Img':'src/imgs/list3-10.jpg',
                'Catogroy':'2',
                'musicList':'4'
            }
        ],
        //第四个类别
        [
            {
                'Id':'30',
                'Name':"Come Back Home",
                'Singer':'2NE1',
                'Src':"storage/songs/Come Back Home.mp3",
                'Img':'src/imgs/list4-1.jpg',
                'Catogroy':'3',
                'musicList':'4'
            },
            {
                'Id':'31',
                'Name':"人情味",
                'Singer':'Gary、郑仁',
                'Src':"storage/songs/人情味.mp3",
                'Img':'src/imgs/list4-2.jpg',
                'Catogroy':'2',
                'musicList':'4'
            },
            {
                'Id':'32',
                'Name':'Some',
                'Singer':'Junggigo、昭宥',
                'Src':'storage/songs/Some.mp3',
                'Img':'src/imgs/list4-3.jpg',
                'Catogroy':'4',
                'musicList':'0'
            },
            {
                'Id':'33',
                'Name':'百变小樱',
                'Singer':'百变小樱',
                'Src':'storage/songs/百变小樱.mp3',
                'Img':'src/imgs/list4-4.jpg',
                'Catogroy':'4',
                'musicList':'4'
            },
            {
                'Id':'34',
                'Name':'不能分手的女人不能离开的男人',
                'Singer':'leessang',
                'Src':'storage/songs/不能分手的女人不能离开的男人.mp3',
                'Img':'src/imgs/list4-5.jpg',
                'Catogroy':'4',
                'musicList':'0'
            },
            {
                'Id':'35',
                'Name':'夏夕空',
                'Singer':'夏目友人帐',
                'Src':'storage/songs/夏夕空.mp3',
                'Img':'src/imgs/list4-6.jpg',
                'Catogroy':'4',
                'musicList':'4'
            },
            {
                'Id':'36',
                'Name':'BLUE',
                'Singer':'Bigbang',
                'Src':'storage/songs/BLUE.mp3',
                'Img':'src/imgs/list4-7.jpg',
                'Catogroy':'4',
                'musicList':'4'
            },
            {
                'Id':'37',
                'Name':"谎言",
                'Singer':'BigBang',
                'Src':"storage/songs/谎言.mp3",
                'Img':'src/imgs/list4-7.jpg',
                'Catogroy':'4',
                'musicList':'4'
            },
            {
                'Id':'38',
                'Name':"Can't Stop",
                'Singer':'CNBLUE',
                'Src':"storage/songs/Can't Stop.mp3",
                'Img':'src/imgs/list4-9.jpg',
                'Catogroy':'4',
                'musicList':'4'
            },
            {
                'Id':'39',
                'Name':"咆哮(Growl)",
                'Singer':'EXO',
                'Src':"storage/songs/咆哮(Growl).mp3",
                'Img':'src/imgs/list4-10.jpg',
                'Catogroy':'4',
                'musicList':'4'
            }

        ]

    ];
    return [className,data];
}

function recomment(){
    var listName = [//声明推荐歌单名称
        '你问我怎样去远方，我说跟着心走~',
        '种在耳朵里的歌开出了青春的花',
        '如果时光倒流，我在回忆里等你',
        '「晨跑必备」炎炎夏日里的一缕清风',
        '入耳惊艳，我为节奏狂'
    ];
    var listDesc = [//声明推荐歌单介绍
        '跟着心走，如果你觉得他是对的，那就跟着他走！跟着心走，如果你觉得你是对的，那就跟着你走！一颗心的世界是自由的，没有束缚。',
        '迷路森林，一不小心，我把你惊醒，也许注定，爱的憧憬，等着你回应。沿途风景，留下的幻影，开始感应，张开眼睛想与你同行。',
        '每个人回忆起青春，回忆起匆匆那年，总会想起某个人,想起那年天空正蓝，阳光正好，我们如此遇见,回忆起青春，总会想起某个人',
        '要成为一座海，自己有千百里潮水奔涌。要爬上雪山吃烧烤，要开着渔船追落日，要七老八十写情书，要漂过冰川看极光。',
        '陪你长大的灰猫,吃辣条干脆面的课间,他经过时荡漾起来的风,小纸条里一件件的心事,一起上厕所的漂亮女同学。'
    ];
    var recommentList = [
        //你问我怎样去远方，我说跟着心走~
        [
            {
                'Id':'2',
                'Name':'Always',
                'Singer':'太阳的后裔',
                'Src':'storage/songs/always.mp3',
                'Img':'src/imgs/list1-3.jpg'
            },
            {
                'Id':'32',
                'Name':'Some',
                'Singer':'Junggigo、昭宥',
                'Src':'storage/songs/Some.mp3',
                'Img':'src/imgs/list4-3.jpg'
            },
            {
                'Id':'34',
                'Name':'不能分手的女人不能离开的男人',
                'Singer':'leessang',
                'Src':'storage/songs/不能分手的女人不能离开的男人.mp3',
                'Img':'src/imgs/list4-5.jpg'
            },
            {
                'Id':'17',
                'Name':'普通朋友',
                'Singer':'陶喆',
                'Src':'storage/songs/普通朋友.mp3',
                'Img':'src/imgs/list2-8.jpg',
            },
            {
                'Id':'10',
                'Name':'好久不见',
                'Singer':'陈奕迅',
                'Src':'storage/songs/好久不见.mp3',
                'Img':'src/imgs/list2-1.jpg'
            },
            {
                'Id':'3',
                'Name':'红颜旧',
                'Singer':'刘涛',
                'Src':'storage/songs/红颜旧.mp3',
                'Img':'src/imgs/list1-4.jpg'
            },
            {
                'Id':'4',
                'Name':'一直很安静',
                'Singer':'阿桑(仙剑一)',
                'Src':'storage/songs/一直很安静.mp3',
                'Img':'src/imgs/list1-5.jpg'
            }
        ],
        [//种在耳朵里的歌开出了青春的花
            {
                'Id':'35',
                'Name':'夏夕空',
                'Singer':'夏目友人帐',
                'Src':'storage/songs/夏夕空.mp3',
                'Img':'src/imgs/list4-6.jpg'
            },
            {
                'Id':'19',
                'Name':'很靠近海',
                'Singer':'蔡健雅',
                'Src':'storage/songs/很靠近海.mp3',
                'Img':'src/imgs/list2-10.jpg'
            },
            {
                'Id':'18',
                'Name':'旅行的意义',
                'Singer':'陈绮贞',
                'Src':'storage/songs/旅行的意义.mp3',
                'Img':'src/imgs/list2-9.jpg'
            },
            {
                'Id':'5',
                'Name':'时间煮雨',
                'Singer':'郁可唯(小时代)',
                'Src':'storage/songs/时间煮雨.mp3',
                'Img':'src/imgs/list1-9.jpg'
            },
            {
                'Id':'15',
                'Name':'南山南',
                'Singer':'张磊',
                'Src':'storage/songs/南山南.mp3',
                'Img':'src/imgs/list2-6.jpg'
            },
            {
                'Id':'8',
                'Name':'热雪',
                'Singer':'小时代',
                'Src':'storage/songs/热雪.mp3',
                'Img':'src/imgs/list1-6.jpg'
            },
            {
                'Id':'21',
                'Name':'Ours',
                'Singer':'Taylor Swift',
                'Src':'storage/songs/Ours.mp3',
                'Img':'src/imgs/list3-2.jpg'
            }

        ],
        [//如果时光倒流，我在回忆里等你
            {
                'Id':'31',
                'Name':"人情味",
                'Singer':'Gary、郑仁',
                'Src':"storage/songs/人情味.mp3",
                'Img':'src/imgs/list4-2.jpg'
            },
            {
                'Id':'7',
                'Name':'Davichi',
                'Singer':'没关系,是爱情啊',
                'Src':'storage/songs/Davichi.mp3',
                'Img':'src/imgs/list1-8.jpg'
            },
            {
                'Id':'9',
                'Name':'江湖笑',
                'Singer':'神雕侠侣',
                'Src':'imagsong/江湖笑.mp3',
                'Img':'src/imgs/list1-10.jpg'
            },
            {
                'Id':'28',
                'Name':'Let It Go',
                'Singer':'Demi Lovato',
                'Src':'storage/songs/Let It Go.mp3',
                'Img':'src/imgs/list3-9.jpg'
            },
            {
                'Id':'26',
                'Name':'Innocence',
                'Singer':'Avril Lavigne',
                'Src':'storage/songs/Innocence.mp3',
                'Img':'src/imgs/list3-7.jpg'
            },
            {
                'Id':'25',
                'Name':'Rolling in the Deep',
                'Singer':'Adele',
                'Src':'storage/songs/Rolling in the Deep.mp3',
                'Img':'src/imgs/list3-3.jpg'
            }
        ],
        [//「晨跑必备」炎炎夏日里的一缕清风
            {
                'Id':'39',
                'Name':"咆哮(Growl)",
                'Singer':'EXO',
                'Src':"storage/songs/咆哮(Growl).mp3",
                'Img':'src/imgs/list4-10.jpg'
            },
            {
                'Id':'37',
                'Name':"谎言",
                'Singer':'BigBang',
                'Src':"storage/songs/谎言.mp3",
                'Img':'src/imgs/list4-7.jpg'
            },
            {
                'Id':'30',
                'Name':"Come Back Home",
                'Singer':'2NE1',
                'Src':"storage/songs/Come Back Home.mp3",
                'Img':'src/imgs/list4-1.jpg'
            },
            {
                'Id':'20',
                'Name':'Uptown Funk',
                'Singer':'Mark Ronson,Bruno Mars',
                'Src':'storage/songs/Uptown Funk.mp3',
                'Img':'src/imgs/list3-1.jpg'
            },
            {
                'Id':'27',
                'Name':'Baby One More Time',
                'Singer':'Britney Spears',
                'Src':'storage/songs/Baby One More Time.mp3',
                'Img':'src/imgs/list3-8.jpg'
            },
            {
                'Id':'24',
                'Name':'Diamonds',
                'Singer':'Rihanna',
                'Src':'storage/songs/Diamonds.mp3',
                'Img':'src/imgs/list3-5.jpg'
            }
        ],
        [//入耳惊艳，我为节奏狂
            {
                'Id':'23',
                'Name':'Firework',
                'Singer':'Katy Perry',
                'Src':'storage/songs/Firework.mp3',
                'Img':'src/imgs/list3-4.jpg'
            },
            {
                'Id':'36',
                'Name':'BLUE',
                'Singer':'Bigbang',
                'Src':'storage/songs/BLUE.mp3',
                'Img':'src/imgs/list4-7.jpg'
            },
            {
                'Id':'29',
                'Name':"We Can't Stop",
                'Singer':'Miley Cyrus',
                'Src':"storage/songs/We Can't Stop.mp3",
                'Img':'src/imgs/list3-10.jpg'
            },
            {
                'Id':'23',
                'Name':'Firework',
                'Singer':'Katy Perry',
                'Src':'storage/songs/Firework.mp3',
                'Img':'src/imgs/list3-4.jpg'
            },
            {
                'Id':'26',
                'Name':'Innocence',
                'Singer':'Avril Lavigne',
                'Src':'storage/songs/Innocence.mp3',
                'Img':'src/imgs/list3-7.jpg'
            },
            {
                'Id':'33',
                'Name':'百变小樱',
                'Singer':'百变小樱',
                'Src':'storage/songs/百变小樱.mp3',
                'Img':'src/imgs/list4-4.jpg'
            }
        ]
    ];
    return [listName,listDesc,recommentList];
}