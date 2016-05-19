

function requestData () {
	// body...
	var className = ['影视原声','华语流行','欧美经典','日韩新曲'];//声明类别名称
	var data = [
		//第一个类别
		[
			
            {   
                'Id':'1',
                'Name':'To Dartmoor',
                'Singer':'神探夏洛克',
                'Src':'/storage/songs/To Dartmoor.mp3',
                'Img':'/src/imgs/1-4.jpg',
                'Time':'03:11',
                'Lyric':'null',
                'Catogroy':'0',
                'musicList':'1'
            },
            {   
                'Id':'2',
                'Name':'SHERlocked',
                'Singer':'神探夏洛克',
                'Src':'/storage/songs/SHERlocked.mp3',
                'Img':'/src/imgs/1-2.jpg',
                'Time':'03:11',
                'Lyric':'null',
                'Catogroy':'0',
                'musicList':'1'
            },
            {
                'Id':'3',
                'Name':'More Than A Woman',
                'Singer':'破产姐妹',
                'Src':'/storage/songs/More Than A Woman.mp3',
                'Img':'/src/imgs/1-2.jpg',
                'Time':'03:11',
                'Lyric':'null',
                'Catogroy':'0',
                'musicList':'1'
            },
            {   
                'Id':'4',
                'Name':'越难越爱',
                'Singer':'使徒行者',
                'Src':'/storage/songs/越难越爱.mp3',
                'Img':'/src/imgs/1-2.jpg',
                'Time':'03:11',
                'Lyric':'null',
                'Catogroy':'0',
                'musicList':'1'
            },
            {
                'Id':'5',
                'Name':'江湖笑',
                'Singer':'神雕侠侣',
                'Src':'/storage/songs/江湖笑.mp3',
                'Img':'/src/imgs/1-2.jpg',
                'Time':'03:11',
                'Lyric':'null',
                'Catogroy':'0',
                'musicList':'1'
            },
            {
                'Id':'6',
                'Name':'热雪',
                'Singer':'小时代',
                'Src':'/storage/songs/热雪.mp3',
                'Img':'/src/imgs/1-2.jpg',
                'Time':'03:11',
                'Lyric':'null',
                'Catogroy':'0',
                'musicList':'1'
            },
            {
                'Id':'7',
                'Name':'残忍的缠绵',
                'Singer':'小时代',
                'Src':'/storage/songs/残忍的缠绵.mp3',
                'Img':'/src/imgs/1-2.jpg',
                'Time':'03:11',
                'Lyric':'null',
                'Catogroy':'0',
                'musicList':'1'
            },
            {   
                'Id':'8',
                'Name':'Always',
                'Singer':'执素兮',
                'Src':'/storage/songs/always.mp3',
                'Img':'/src/imgs/1-4.jpg',
                'Time':'03:11',
                'Lyric':'null',
                'Catogroy':'0',
                'musicList':'1'
            },
            {   
                'Id':'9',
                'Name':'To Dartmoor',
                'Singer':'神探夏洛克',
                'Src':'/storage/songs/To Dartmoor.mp3',
                'Img':'/src/imgs/1-4.jpg',
                'Time':'03:11',
                'Lyric':'null',
                'Catogroy':'0',
                'musicList':'1'
            },
            {   
                'Id':'10',
                'Name':'To Dartmoor',
                'Singer':'神探夏洛克',
                'Src':'/storage/songs/To Dartmoor.mp3',
                'Img':'/src/imgs/1-4.jpg',
                'Time':'03:11',
                'Lyric':'null',
                'Catogroy':'0',
                'musicList':'1'
            }
        ],
		//第二个类别
        [
            {   
                'Id':'11',
                'Name':'百变小樱',
                'Singer':'魔卡少女樱',
                'Src':'/storage/songs/百变小樱.mp3',
                'Img':'/src/imgs/baibianxiaoying.jpg',
                'Time':'03:11',
                'Lyric':'null',
                'Catogroy':'1',
                'musicList':'2'
            },
            {   
                'Id':'12',
                'Name':'真相',
                'Singer':'名侦探柯南',
                'Src':'/storage/songs/真相.mp3',
                'Img':'ges/singer/mingzhentankenan.jpg',
                'Time':'03:11',
                'Lyric':'null',
                'Catogroy':'1',
                'musicList':'2'
            },
            {
                'Id':'13',
                'Name':'Be mine!',
                'Singer':'樱兰高校男公关部',
                'Src':'/storage/songs/Be mine!.mp3',
                'Img':'imagsinger/yinglangaoxiaonangongguanbu.jpg',
                'Time':'03:11',
                'Lyric':'null',
                'Catogroy':'1',
                'musicList':'2'
            },
            {
                'Id':'14',
                'Name':'enjoy',
                'Singer':'网球王子',
                'Src':'/storage/songs/enjoy.mp3',
                'Img':'imagsinger/wangqiuwangzi.jpg',
                'Time':'03:11',
                'Lyric':'null',
                'Catogroy':'1',
                'musicList':'2'
            },
            {
                'Id':'15',
                'Name':'Keep Your Style',
                'Singer':'网球王子',
                'Src':'/storage/songs/Keep Your Style.mp3',
                'Img':'imagsinger/wangqiuwangzi.jpg',
                'Time':'03:11',
                'Lyric':'null',
                'Catogroy':'1',
                'musicList':'2'
            },
            {
                'Id':'16',
                'Name':'The Raising Fighting Spirit',
                'Singer':'火影忍者',
                'Src':'/storage/songs/The Raising Fighting Spirit.mp3',
                'Img':'imagsinger/huoyingrenzhe.jpg',
                'Time':'03:11',
                'Lyric':'null',
                'Catogroy':'1',
                'musicList':'2'
            },
            {
                'Id':'17',
                'Name':'MR.RAINDROP',
                'Singer':'银魂',
                'Src':'/storage/songs/MR.RAINDROP.mp3',
                'Img':'imagsinger/yinhun.jpg',
                'Time':'03:11',
                'Lyric':'null',
                'Catogroy':'1',
                'musicList':'2'
            },
            {
                'Id':'18',
                'Name':'My Will',
                'Singer':'犬夜叉',
                'Src':'/storage/songs/My Will.mp3',
                'Img':'imagsinger/quanyecha.jpg',
                'Time':'03:11',
                'Lyric':'null',
                'Catogroy':'1',
                'musicList':'2'
            }

        ],
		//第一个类别
        [
            
            {
                'Id':'19',
                'Name':'To Dartmoor',
                'Singer':'神探夏洛克',
                'Src':'/storage/songs/To Dartmoor.mp3',
                'Img':'imagsinger/shentanxialuoke.jpg',
                'Time':'03:11',
                'Lyric':'null',
                'Catogroy':'2',
                'musicList':'2'
            },
            {
                'Id':'20',
                'Name':'SHERlocked',
                'Singer':'神探夏洛克',
                'Src':'/storage/songs/SHERlocked.mp3',
                'Img':'imagsinger/shentanxialuoke.jpg',
                'Time':'03:11',
                'Lyric':'null',
                'Catogroy':'2',
                'musicList':'2'
            },
            {
                'Id':'21',
                'Name':'More Than A Woman',
                'Singer':'破产姐妹',
                'Src':'imagsong/More Than A Woman.mp3',
                'Img':'imagsinger/pochanjiemei.jpg',
                'Time':'03:11',
                'Lyric':'null',
                'Catogroy':'2',
                'musicList':'2'
            },
            {
                'Id':'22',
                'Name':'越难越爱',
                'Singer':'使徒行者',
                'Src':'imagsong/越难越爱.mp3',
                'Img':'imagsinger/shituxingzhe.jpg',
                'Time':'03:11',
                'Lyric':'null',
                'Catogroy':'2',
                'musicList':'2'
            },
            {
                'Id':'23',
                'Name':'江湖笑',
                'Singer':'神雕侠侣',
                'Src':'imagsong/江湖笑.mp3',
                'Img':'imagsinger/shendiaoxialv.jpg',
                'Time':'03:11',
                'Lyric':'null',
                'Catogroy':'2',
                'musicList':'2'
            },
            {
                'Id':'24',
                'Name':'热雪',
                'Singer':'小时代',
                'Src':'imagsong/热雪.mp3',
                'Img':'imagsinger/xiaoshidai.jpg',
                'Time':'03:11',
                'Lyric':'null',
                'Catogroy':'2',
                'musicList':'2'
            },
            {
                'Id':'25',
                'Name':'残忍的缠绵',
                'Singer':'小时代',
                'Src':'imagsong/残忍的缠绵.mp3',
                'Img':'imagsinger/xiaoshidai.jpg',
                'Time':'03:11',
                'Lyric':'null',
                'Catogroy':'2',
                'musicList':'2'
            }
        ],
        //第二个类别
        [
            {
                'Id':'26',
                'Name':'Keep Your Style',
                'Singer':'网球王子',
                'Src':'imagsong/Keep Your Style.mp3',
                'Img':'imagsinger/wangqiuwangzi.jpg',
                'Time':'03:11',
                'Lyric':'null',
                'Catogroy':'3',
                'musicList':'3'
            },
            {
                'Id':'27',
                'Name':'The Raising Fighting Spirit',
                'Singer':'火影忍者',
                'Src':'imagsong/The Raising Fighting Spirit.mp3',
                'Img':'imagsinger/huoyingrenzhe.jpg',
                'Time':'03:11',
                'Lyric':'null',
                'Catogroy':'3',
                'musicList':'3'
            },
            {
                'Id':'28',
                'Name':'MR.RAINDROP',
                'Singer':'银魂',
                'Src':'imagsong/MR.RAINDROP.mp3',
                'Img':'imagsinger/yinhun.jpg',
                'Time':'03:11',
                'Lyric':'null',
                'Catogroy':'3',
                'musicList':'3'
            },
            {
                'Id':'29',
                'Name':'My Will',
                'Singer':'犬夜叉',
                'Src':'imagsong/My Will.mp3',
                'Img':'imagsinger/quanyecha.jpg',
                'Time':'03:11',
                'Lyric':'null',
                'Catogroy':'3',
                'musicList':'3'
            },
            {
                'Id':'30',
                'Name':'I Am',
                'Singer':'犬夜叉',
                'Src':'imagsong/I Am.mp3',
                'Img':'imagsinger/quanyecha.jpg',
                'Time':'03:11',
                'Lyric':'null',
                'Catogroy':'3',
                'musicList':'3'
            },
            {
                'Id':'31',
                'Name':'夏夕空',
                'Singer':'夏目友人帐',
                'Src':'imagsong/夏夕空.mp3',
                'Img':'imagsinger/xiamuyourenzhang.jpg',
                'Time':'03:11',
                'Lyric':'null',
                'Catogroy':'3',
                'musicList':'3'
            },
            {
                'Id':'32',
                'Name':'Rain of mind',
                'Singer':'夏目友人帐',
                'Src':'imagsong/Rain of mind.mp3',
                'Img':'imagsinger/xiamuyourenzhang.jpg',
                'Time':'03:11',
                'Lyric':'null',
                'Catogroy':'3',
                'musicList':'3'
            }

        ]

	];
	return [className,data];
}

function recomment(){
    var listName = [//声明推荐歌单名称
        '你问我怎样去远方，我说跟着心走~',
        '种在耳朵里的歌开出了青春的花',
        '当钢琴邂逅华尔兹，世界纯净了。',
        '「民谣与诗」人间四月天 不及你温暖',
        '让你瞬间跌入蜜糖的小情歌'
    ];
    var listDesc = [//声明推荐歌单介绍
        '跟着心走，如果你觉得他是对的，那就跟着他走！跟着心走，如果你觉得你是对的，那就跟着你走！一颗心的世界是自由的，没有束缚。',
        '陪你长大的灰猫,吃辣条干脆面的课间,他经过时荡漾起来的风,小纸条里一件件的心事,一起上厕所的漂亮女同学。',
        '钢琴邂逅华尔兹，犹如少女的爱情般纯净，像下过雨后的晴。via独行的灵魂#NO.486（封面:钢琴男人Mathias Lefebvre）',
        '要成为一座海，自己有千百里潮水奔涌。要爬上雪山吃烧烤，要开着渔船追落日，要七老八十写情书，要漂过冰川看极光。',
        '迷路森林，一不小心，我把你惊醒，也许注定，爱的憧憬，等着你回应。沿途风景，到处是你，留下的幻影，开始感应，张开眼睛想与你同行。'
    ];
    var recommentList = [
        //你问我怎样去远方，我说跟着心走~
        [
            {
                'Name':'Keep Your Style',
                'Singer':'网球王子',
                'Src':'imagsong/Keep Your Style.mp3',
                'Img':'imagsinger/wangqiuwangzi.jpg'
            },
            {
                'Name':'The Raising Fighting Spirit',
                'Singer':'火影忍者',
                'Src':'imagsong/The Raising Fighting Spirit.mp3',
                'Img':'imagsinger/huoyingrenzhe.jpg'
            },
            {
                'Name':'MR.RAINDROP',
                'Singer':'银魂',
                'Src':'imagsong/MR.RAINDROP.mp3',
                'Img':'imagsinger/yinhun.jpg'
            },
            {
                'Name':'My Will',
                'Singer':'犬夜叉',
                'Src':'imagsong/My Will.mp3',
                'Img':'imagsinger/quanyecha.jpg'
            },
            {
                'Name':'I Am',
                'Singer':'犬夜叉',
                'Src':'imagsong/I Am.mp3',
                'Img':'imagsinger/quanyecha.jpg'
            },
            {
                'Name':'夏夕空',
                'Singer':'夏目友人帐',
                'Src':'imagsong/夏夕空.mp3',
                'Img':'imagsinger/xiamuyourenzhang.jpg'
            },
            {
                'Name':'Rain of mind',
                'Singer':'夏目友人帐',
                'Src':'imagsong/Rain of mind.mp3',
                'Img':'imagsinger/xiamuyourenzhang.jpg'
            }
        ],
        [//种在耳朵里的歌开出了青春的花
            {
                'Name':'My Will',
                'Singer':'犬夜叉',
                'Src':'imagsong/My Will.mp3',
                'Img':'imagsinger/quanyecha.jpg'
            },
            {
                'Name':'I Am',
                'Singer':'犬夜叉',
                'Src':'imagsong/I Am.mp3',
                'Img':'imagsinger/quanyecha.jpg'
            },
            {
                'Name':'夏夕空',
                'Singer':'夏目友人帐',
                'Src':'imagsong/夏夕空.mp3',
                'Img':'imagsinger/xiamuyourenzhang.jpg'
            },
            {
                'Name':'Keep Your Style',
                'Singer':'网球王子',
                'Src':'imagsong/Keep Your Style.mp3',
                'Img':'imagsinger/wangqiuwangzi.jpg'
            },
            {
                'Name':'The Raising Fighting Spirit',
                'Singer':'火影忍者',
                'Src':'imagsong/The Raising Fighting Spirit.mp3',
                'Img':'imagsinger/huoyingrenzhe.jpg'
            },
            {
                'Name':'MR.RAINDROP',
                'Singer':'银魂',
                'Src':'imagsong/MR.RAINDROP.mp3',
                'Img':'imagsinger/yinhun.jpg'
            },
            {
                'Name':'My Will',
                'Singer':'犬夜叉',
                'Src':'imagsong/My Will.mp3',
                'Img':'imagsinger/quanyecha.jpg'
            }

        ],
        [//当钢琴邂逅华尔兹，世界纯净了。
            {
                'Name':'江湖笑',
                'Singer':'神雕侠侣',
                'Src':'imagsong/江湖笑.mp3',
                'Img':'imagsinger/shendiaoxialv.jpg'
            },
            {
                'Name':'热雪',
                'Singer':'小时代',
                'Src':'imagsong/热雪.mp3',
                'Img':'imagsinger/xiaoshidai.jpg'
            },
            {
                'Name':'残忍的缠绵',
                'Singer':'小时代',
                'Src':'imagsong/残忍的缠绵.mp3',
                'Img':'imagsinger/xiaoshidai.jpg'
            },
            {
                'Name':'I Am',
                'Singer':'犬夜叉',
                'Src':'imagsong/I Am.mp3',
                'Img':'imagsinger/quanyecha.jpg'
            },
            {
                'Name':'夏夕空',
                'Singer':'夏目友人帐',
                'Src':'imagsong/夏夕空.mp3',
                'Img':'imagsinger/xiamuyourenzhang.jpg'
            },
            {
                'Name':'Rain of mind',
                'Singer':'夏目友人帐',
                'Src':'imagsong/Rain of mind.mp3',
                'Img':'imagsinger/xiamuyourenzhang.jpg'
            }
        ],
        [//「民谣与诗」人间四月天 不及你温暖
            {
                'Name':'To Dartmoor',
                'Singer':'神探夏洛克',
                'Src':'imagsong/To Dartmoor.mp3',
                'Img':'imagsinger/shentanxialuoke.jpg'
            },
            {
                'Name':'SHERlocked',
                'Singer':'神探夏洛克',
                'Src':'imagsong/SHERlocked.mp3',
                'Img':'imagsinger/shentanxialuoke.jpg'
            },
            {
                'Name':'More Than A Woman',
                'Singer':'破产姐妹',
                'Src':'imagsong/More Than A Woman.mp3',
                'Img':'imagsinger/pochanjiemei.jpg'
            },
            {
                'Name':'I Am',
                'Singer':'犬夜叉',
                'Src':'imagsong/I Am.mp3',
                'Img':'imagsinger/quanyecha.jpg'
            },
            {
                'Name':'夏夕空',
                'Singer':'夏目友人帐',
                'Src':'imagsong/夏夕空.mp3',
                'Img':'imagsinger/xiamuyourenzhang.jpg'
            },
            {
                'Name':'Rain of mind',
                'Singer':'夏目友人帐',
                'Src':'imagsong/Rain of mind.mp3',
                'Img':'imagsinger/xiamuyourenzhang.jpg'
            }
        ],
        [//让你瞬间跌入蜜糖的小情歌
            {
                'Name':'百变小樱',
                'Singer':'魔卡少女樱',
                'Src':'imagsong/百变小樱.mp3',
                'Img':'imagsinger/baibianxiaoying.jpg'
            },
            {
                'Name':'真相',
                'Singer':'名侦探柯南',
                'Src':'imagsong/真相.mp3',
                'Img':'imagsinger/mingzhentankenan.jpg'
            },
            {
                'Name':'Be mine!',
                'Singer':'樱兰高校男公关部',
                'Src':'imagsong/Be mine!.mp3',
                'Img':'imagsinger/yinglangaoxiaonangongguanbu.jpg'
            },
            {
                'Name':'I Am',
                'Singer':'犬夜叉',
                'Src':'imagsong/I Am.mp3',
                'Img':'imagsinger/quanyecha.jpg'
            },
            {
                'Name':'夏夕空',
                'Singer':'夏目友人帐',
                'Src':'imagsong/夏夕空.mp3',
                'Img':'imagsinger/xiamuyourenzhang.jpg'
            },
            {
                'Name':'Rain of mind',
                'Singer':'夏目友人帐',
                'Src':'imagsong/Rain of mind.mp3',
                'Img':'imagsinger/xiamuyourenzhang.jpg'
            }
        ]
    ];
    return [listName,listDesc,recommentList];
}
