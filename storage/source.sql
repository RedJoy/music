-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-05-25 07:50:13
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `music`
--

-- --------------------------------------------------------

--
-- 表的结构 `playlists`
--

CREATE TABLE IF NOT EXISTS `playlists` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '' COMMENT '歌单名称',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='歌单' AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `playlist_songs`
--

CREATE TABLE IF NOT EXISTS `playlist_songs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `playlist_id` int(10) unsigned NOT NULL COMMENT '歌单ID',
  `song_id` int(10) unsigned NOT NULL COMMENT '歌曲ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='歌单里的歌曲' AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `songs`
--

CREATE TABLE IF NOT EXISTS `songs` (
  `id` int(11) NOT NULL,
  `title` varchar(80) NOT NULL COMMENT '歌曲名',
  `singer` varchar(50) DEFAULT NULL COMMENT '歌手名',
  `src` varchar(256) NOT NULL COMMENT '播放路径',
  `img` varchar(256) DEFAULT NULL COMMENT '专辑封面地址',
  `genre` varchar(50) DEFAULT NULL COMMENT '流派、分类',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '入库时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='歌曲';

--
-- 转存表中的数据 `songs`
--

INSERT INTO `songs` (`id`, `title`, `singer`, `src`, `img`, `genre`, `create_time`) VALUES
(0, 'To Dartmoor', '神探夏洛克', 'storage/songs/To Dartmoor.mp3', 'src/imgs/list1-1.jpg', '1', '2016-05-24 23:27:25'),
(1, 'More Than A Woman', '破产姐妹', 'storage/songs/More Than A Woman.mp3', 'src/imgs/list1-2.jpg', '1', '2016-05-24 23:29:33'),
(2, 'Always', '太阳的后裔', 'storage/songs/always.mp3', 'src/imgs/list1-3.jpg', '1', '2016-05-24 23:31:27'),
(3, '红颜旧', '刘涛', 'storage/songs/红颜旧', 'src/imgs/list1-4.jpg', '1', '2016-05-24 23:32:46'),
(4, '一直很安静', '阿桑(仙剑一)', 'storage/songs/一直很安静.mp3', 'src/imgs/list1-5.jpg', '1', '2016-05-24 23:34:32'),
(5, '时间煮雨', '郁可唯(小时代)', 'storage/songs/时间煮雨.mp3', 'src/imgs/list1-9.jpg', '1', '2016-05-24 23:34:32'),
(6, 'Happy', '神偷奶爸', 'storage/songs/Happy.mp3', 'src/imgs/list1-7.jpg', '1', '2016-05-24 23:36:18'),
(7, 'Davichi', '没关系,是爱情啊', 'storage/songs/Davichi.mp3', 'src/imgs/list1-8.jpg', '1', '2016-05-24 23:36:18'),
(8, '热雪', '小时代', 'storage/songs/热雪.mp3', 'src/imgs/list1-6.jpg', '1', '2016-05-24 23:37:47'),
(9, '江湖笑', '神雕侠侣', 'imagsong/江湖笑.mp3', 'src/imgs/list1-10.jpg', '1', '2016-05-24 23:37:47'),
(10, '好久不见', '陈奕迅', 'storage/songs/好久不见.mp3', 'src/imgs/list2-1.jpg', '2', '2016-05-24 23:39:49'),
(11, '我的歌声里', '曲婉婷', 'storage/songs/我的歌声里.mp3', 'src/imgs/list2-2.jpg', '2', '2016-05-24 23:39:49'),
(12, '野子', '苏运莹', 'storage/songs/野子.mp3', 'src/imgs/list2-3.jpg', '2', '2016-05-24 23:41:31'),
(13, '演员', '薛之谦', 'storage/songs/演员.mp3', 'src/imgs/list2-4.jpg', '2', '2016-05-24 23:41:31'),
(14, '我在人民广场吃炸鸡', '阿肆', 'storage/songs/我在人民广场吃炸鸡.mp3', 'src/imgs/list2-5.jpg', '2', '2016-05-24 23:43:38'),
(15, '南山南', '张磊', 'storage/songs/南山南.mp3', 'src/imgs/list2-6.jpg', '2', '2016-05-24 23:43:38'),
(16, '黑白', '方大同', 'storage/songs/黑白.mp3', 'src/imgs/list2-7.jpg', '2', '2016-05-24 23:45:51'),
(17, '普通朋友', '陶喆', 'storage/songs/普通朋友.mp3', 'src/imgs/list2-8.jpg', '2', '2016-05-24 23:45:51'),
(18, '旅行的意义', '陈绮贞', 'storage/songs/旅行的意义.mp3', 'src/imgs/list2-9.jpg', '2', '2016-05-24 23:47:30'),
(19, '很靠近海', '蔡健雅', 'storage/songs/很靠近海.mp3', 'src/imgs/list2-10.jpg', '2', '2016-05-24 23:47:30'),
(20, 'Uptown Funk', 'Mark Ronson,Bruno Mars', 'storage/songs/Uptown Funk.mp3', 'src/imgs/list3-1.jpg', '3', '2016-05-24 23:49:21'),
(21, 'Ours', 'Taylor Swift', 'storage/songs/Ours.mp3', 'src/imgs/list3-2.jpg', '3', '2016-05-24 23:49:21'),
(22, 'Someone Like You', 'Adele', 'storage/songs/Someone Like You.mp3', 'src/imgs/list3-3.jpg', '3', '2016-05-24 23:50:39'),
(23, 'Firework', 'Katy Perry', 'storage/songs/Firework.mp3', 'src/imgs/list3-4.jpg', '3', '2016-05-24 23:50:39'),
(24, 'Diamonds', 'Rihanna', 'storage/songs/Diamonds.mp3', 'src/imgs/list3-5.jpg', '3', '2016-05-24 23:52:01'),
(25, 'Rolling in the Deep', 'Adele', 'storage/songs/Rolling in the Deep.mp3', 'src/imgs/list3-3.jpg', '3', '2016-05-24 23:52:01'),
(26, 'Innocence', 'Avril Lavigne', 'storage/songs/Innocence.mp3', 'src/imgs/list3-7.jpg', '3', '2016-05-24 23:53:19'),
(27, 'Baby One More Time', 'Britney Spears', 'storage/songs/Baby One More Time.mp3', 'src/imgs/list3-8.jpg', '3', '2016-05-24 23:53:19'),
(28, 'Let It Go', 'Demi Lovato', 'storage/songs/Let It Go.mp3', 'src/imgs/list3-9.jpg', '3', '2016-05-24 23:54:55'),
(29, 'We Can''t Stop', 'Miley Cyrus', 'storage/songs/We Can''t Stop.mp3', 'src/imgs/list3-10.jpg', '3', '2016-05-24 23:54:55'),
(30, 'Come Back Home', '2NE1', 'storage/songs/Come Back Home.mp3', 'src/imgs/list4-1.jpg', '4', '2016-05-24 23:56:49'),
(31, '人情味', 'Gary、郑仁', 'storage/songs/人情味.mp3', 'src/imgs/list4-2.jpg', '4', '2016-05-24 23:56:49'),
(32, 'Some', 'Junggigo、昭宥', 'storage/songs/Some.mp3', 'src/imgs/list4-3.jpg', '4', '2016-05-24 23:58:02'),
(33, '百变小樱', '百变小樱', 'storage/songs/百变小樱.mp3', 'src/imgs/list4-4.jpg', '4', '2016-05-24 23:58:02'),
(34, '不能分手的女人不能离开的男人', 'leessang', 'storage/songs/不能分手的女人不能离开的男人.mp3', 'src/imgs/list4-5.jpg', '4', '2016-05-24 23:59:26'),
(35, '夏夕空', '夏目友人帐', 'storage/songs/夏夕空.mp3', 'src/imgs/list4-6.jpg', '4', '2016-05-24 23:59:26'),
(36, 'BLUE', 'Bigbang', 'storage/songs/BLUE.mp3', 'src/imgs/list4-7.jpg', '4', '2016-05-25 00:01:46'),
(37, '谎言', 'Bigbang', 'storage/songs/谎言.mp3', 'src/imgs/list4-7.jpg', '4', '2016-05-25 00:01:46'),
(38, 'Can''t Stop', 'CNBLUE', 'storage/songs/Can''t Stop.mp3', 'src/imgs/list4-9.jpg', '4', '2016-05-25 00:03:05'),
(39, '咆哮(Growl)', 'EXO', 'storage/songs/咆哮(Growl).mp3', 'src/imgs/list4-10.jpg', '4', '2016-05-25 00:03:05');

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL DEFAULT '' COMMENT '用户名',
  `password` varchar(80) NOT NULL DEFAULT '' COMMENT '用户密码',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='用户表' AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'RedJoy', '96e79218965eb72c92a549dd5a330112');

-- --------------------------------------------------------

--
-- 表的结构 `user_collects`
--

CREATE TABLE IF NOT EXISTS `user_collects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL COMMENT '用户ID',
  `song_id` int(10) unsigned NOT NULL COMMENT '歌曲ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户收藏表' AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
