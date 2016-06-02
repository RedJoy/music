-- --------------------------------------------------------
-- 主机:                           192.168.28.130
-- 服务器版本:                        5.7.12-log - MySQL Community Server (GPL)
-- 服务器操作系统:                      linux-glibc2.5
-- HeidiSQL 版本:                  9.3.0.5040
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- 导出  表 music.playlists 结构
DROP TABLE IF EXISTS `playlists`;
CREATE TABLE IF NOT EXISTS `playlists` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '' COMMENT '歌单名称',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='歌单';

-- 正在导出表  music.playlists 的数据：~4 rows (大约)
DELETE FROM `playlists`;
/*!40000 ALTER TABLE `playlists` DISABLE KEYS */;
INSERT INTO `playlists` (`id`, `name`, `create_time`) VALUES
	(1, '影视原声', '2016-06-02 05:49:28'),
	(2, '华语流行', '2016-06-02 05:49:41'),
	(3, '欧美经典', '2016-06-02 05:49:51'),
	(4, '日韩新曲', '2016-06-02 05:50:04');
/*!40000 ALTER TABLE `playlists` ENABLE KEYS */;


-- 导出  表 music.playlist_songs 结构
DROP TABLE IF EXISTS `playlist_songs`;
CREATE TABLE IF NOT EXISTS `playlist_songs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `playlist_id` int(10) unsigned NOT NULL COMMENT '歌单ID',
  `song_id` int(10) unsigned NOT NULL COMMENT '歌曲ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8 COMMENT='歌单里的歌曲';

-- 正在导出表  music.playlist_songs 的数据：~40 rows (大约)
DELETE FROM `playlist_songs`;
/*!40000 ALTER TABLE `playlist_songs` DISABLE KEYS */;
INSERT INTO `playlist_songs` (`id`, `playlist_id`, `song_id`) VALUES
	(1, 1, 1),
	(2, 1, 2),
	(3, 1, 3),
	(4, 1, 4),
	(5, 1, 5),
	(6, 1, 6),
	(7, 1, 7),
	(8, 1, 8),
	(9, 1, 9),
	(10, 1, 10),
	(11, 2, 11),
	(12, 2, 12),
	(13, 2, 13),
	(14, 2, 14),
	(15, 2, 15),
	(16, 2, 16),
	(17, 2, 17),
	(18, 2, 18),
	(19, 2, 19),
	(20, 2, 20),
	(21, 3, 21),
	(22, 3, 22),
	(23, 3, 23),
	(24, 3, 24),
	(25, 3, 25),
	(26, 3, 26),
	(27, 3, 27),
	(28, 3, 28),
	(29, 3, 29),
	(30, 3, 30),
	(31, 4, 31),
	(32, 4, 32),
	(33, 4, 33),
	(34, 4, 34),
	(35, 4, 35),
	(36, 4, 36),
	(37, 4, 37),
	(38, 4, 38),
	(39, 4, 39),
	(40, 4, 40);
/*!40000 ALTER TABLE `playlist_songs` ENABLE KEYS */;


-- 导出  表 music.songs 结构
DROP TABLE IF EXISTS `songs`;
CREATE TABLE IF NOT EXISTS `songs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(80) NOT NULL COMMENT '歌曲名',
  `singer` varchar(50) DEFAULT NULL COMMENT '歌手名',
  `src` varchar(256) NOT NULL COMMENT '播放路径',
  `img` varchar(256) DEFAULT NULL COMMENT '专辑封面地址',
  `genre` varchar(50) DEFAULT NULL COMMENT '流派、分类',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '入库时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8 COMMENT='歌曲';

-- 正在导出表  music.songs 的数据：~0 rows (大约)
DELETE FROM `songs`;
/*!40000 ALTER TABLE `songs` DISABLE KEYS */;
INSERT INTO `songs` (`id`, `title`, `singer`, `src`, `img`, `genre`, `create_time`) VALUES
	(1, 'To Dartmoor', '神探夏洛克', 'storage/songs/To Dartmoor.mp3', 'src/imgs/list1-1.jpg', '1', '2016-05-24 23:27:25'),
	(2, 'More Than A Woman', '破产姐妹', 'storage/songs/More Than A Woman.mp3', 'src/imgs/list1-2.jpg', '1', '2016-05-24 23:29:33'),
	(3, 'Always', '太阳的后裔', 'storage/songs/always.mp3', 'src/imgs/list1-3.jpg', '1', '2016-05-24 23:31:27'),
	(4, '红颜旧', '刘涛', 'storage/songs/红颜旧', 'src/imgs/list1-4.jpg', '1', '2016-05-24 23:32:46'),
	(5, '一直很安静', '阿桑(仙剑一)', 'storage/songs/一直很安静.mp3', 'src/imgs/list1-5.jpg', '1', '2016-05-24 23:34:32'),
	(6, '时间煮雨', '郁可唯(小时代)', 'storage/songs/时间煮雨.mp3', 'src/imgs/list1-9.jpg', '1', '2016-05-24 23:34:32'),
	(7, 'Happy', '神偷奶爸', 'storage/songs/Happy.mp3', 'src/imgs/list1-7.jpg', '1', '2016-05-24 23:36:18'),
	(8, 'Davichi', '没关系,是爱情啊', 'storage/songs/Davichi.mp3', 'src/imgs/list1-8.jpg', '1', '2016-05-24 23:36:18'),
	(9, '热雪', '小时代', 'storage/songs/热雪.mp3', 'src/imgs/list1-6.jpg', '1', '2016-05-24 23:37:47'),
	(10, '江湖笑', '神雕侠侣', 'imagsong/江湖笑.mp3', 'src/imgs/list1-10.jpg', '1', '2016-05-24 23:37:47'),
	(11, '好久不见', '陈奕迅', 'storage/songs/好久不见.mp3', 'src/imgs/list2-1.jpg', '2', '2016-05-24 23:39:49'),
	(12, '我的歌声里', '曲婉婷', 'storage/songs/我的歌声里.mp3', 'src/imgs/list2-2.jpg', '2', '2016-05-24 23:39:49'),
	(13, '野子', '苏运莹', 'storage/songs/野子.mp3', 'src/imgs/list2-3.jpg', '2', '2016-05-24 23:41:31'),
	(14, '演员', '薛之谦', 'storage/songs/演员.mp3', 'src/imgs/list2-4.jpg', '2', '2016-05-24 23:41:31'),
	(15, '我在人民广场吃炸鸡', '阿肆', 'storage/songs/我在人民广场吃炸鸡.mp3', 'src/imgs/list2-5.jpg', '2', '2016-05-24 23:43:38'),
	(16, '南山南', '张磊', 'storage/songs/南山南.mp3', 'src/imgs/list2-6.jpg', '2', '2016-05-24 23:43:38'),
	(17, '黑白', '方大同', 'storage/songs/黑白.mp3', 'src/imgs/list2-7.jpg', '2', '2016-05-24 23:45:51'),
	(18, '普通朋友', '陶喆', 'storage/songs/普通朋友.mp3', 'src/imgs/list2-8.jpg', '2', '2016-05-24 23:45:51'),
	(19, '旅行的意义', '陈绮贞', 'storage/songs/旅行的意义.mp3', 'src/imgs/list2-9.jpg', '2', '2016-05-24 23:47:30'),
	(20, '很靠近海', '蔡健雅', 'storage/songs/很靠近海.mp3', 'src/imgs/list2-10.jpg', '2', '2016-05-24 23:47:30'),
	(21, 'Uptown Funk', 'Mark Ronson,Bruno Mars', 'storage/songs/Uptown Funk.mp3', 'src/imgs/list3-1.jpg', '3', '2016-05-24 23:49:21'),
	(22, 'Ours', 'Taylor Swift', 'storage/songs/Ours.mp3', 'src/imgs/list3-2.jpg', '3', '2016-05-24 23:49:21'),
	(23, 'Someone Like You', 'Adele', 'storage/songs/Someone Like You.mp3', 'src/imgs/list3-3.jpg', '3', '2016-05-24 23:50:39'),
	(24, 'Firework', 'Katy Perry', 'storage/songs/Firework.mp3', 'src/imgs/list3-4.jpg', '3', '2016-05-24 23:50:39'),
	(25, 'Diamonds', 'Rihanna', 'storage/songs/Diamonds.mp3', 'src/imgs/list3-5.jpg', '3', '2016-05-24 23:52:01'),
	(26, 'Rolling in the Deep', 'Adele', 'storage/songs/Rolling in the Deep.mp3', 'src/imgs/list3-3.jpg', '3', '2016-05-24 23:52:01'),
	(27, 'Innocence', 'Avril Lavigne', 'storage/songs/Innocence.mp3', 'src/imgs/list3-7.jpg', '3', '2016-05-24 23:53:19'),
	(28, 'Baby One More Time', 'Britney Spears', 'storage/songs/Baby One More Time.mp3', 'src/imgs/list3-8.jpg', '3', '2016-05-24 23:53:19'),
	(29, 'Let It Go', 'Demi Lovato', 'storage/songs/Let It Go.mp3', 'src/imgs/list3-9.jpg', '3', '2016-05-24 23:54:55'),
	(30, 'We Can\'t Stop', 'Miley Cyrus', 'storage/songs/We Can\'t Stop.mp3', 'src/imgs/list3-10.jpg', '3', '2016-05-24 23:54:55'),
	(31, 'Come Back Home', '2NE1', 'storage/songs/Come Back Home.mp3', 'src/imgs/list4-1.jpg', '4', '2016-05-24 23:56:49'),
	(32, '人情味', 'Gary、郑仁', 'storage/songs/人情味.mp3', 'src/imgs/list4-2.jpg', '4', '2016-05-24 23:56:49'),
	(33, 'Some', 'Junggigo、昭宥', 'storage/songs/Some.mp3', 'src/imgs/list4-3.jpg', '4', '2016-05-24 23:58:02'),
	(34, '百变小樱', '百变小樱', 'storage/songs/百变小樱.mp3', 'src/imgs/list4-4.jpg', '4', '2016-05-24 23:58:02'),
	(35, '不能分手的女人不能离开的男人', 'leessang', 'storage/songs/不能分手的女人不能离开的男人.mp3', 'src/imgs/list4-5.jpg', '4', '2016-05-24 23:59:26'),
	(36, '夏夕空', '夏目友人帐', 'storage/songs/夏夕空.mp3', 'src/imgs/list4-6.jpg', '4', '2016-05-24 23:59:26'),
	(37, 'BLUE', 'Bigbang', 'storage/songs/BLUE.mp3', 'src/imgs/list4-7.jpg', '4', '2016-05-25 00:01:46'),
	(38, '谎言', 'Bigbang', 'storage/songs/谎言.mp3', 'src/imgs/list4-7.jpg', '4', '2016-05-25 00:01:46'),
	(39, 'Can\'t Stop', 'CNBLUE', 'storage/songs/Can\'t Stop.mp3', 'src/imgs/list4-9.jpg', '4', '2016-05-25 00:03:05'),
	(40, '咆哮(Growl)', 'EXO', 'storage/songs/咆哮(Growl).mp3', 'src/imgs/list4-10.jpg', '4', '2016-05-25 00:03:05');
/*!40000 ALTER TABLE `songs` ENABLE KEYS */;


-- 导出  表 music.users 结构
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL DEFAULT '' COMMENT '用户名',
  `password` varchar(80) NOT NULL DEFAULT '' COMMENT '用户密码',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='用户表';

-- 正在导出表  music.users 的数据：~1 rows (大约)
DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `username`, `password`) VALUES
	(1, 'RedJoy', '96e79218965eb72c92a549dd5a330112');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;


-- 导出  表 music.user_collects 结构
DROP TABLE IF EXISTS `user_collects`;
CREATE TABLE IF NOT EXISTS `user_collects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL COMMENT '用户ID',
  `song_id` int(10) unsigned NOT NULL COMMENT '歌曲ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='用户收藏表';

-- 正在导出表  music.user_collects 的数据：~0 rows (大约)
DELETE FROM `user_collects`;
/*!40000 ALTER TABLE `user_collects` DISABLE KEYS */;
INSERT INTO `user_collects` (`id`, `user_id`, `song_id`) VALUES
	(1, 1, 5);
/*!40000 ALTER TABLE `user_collects` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
