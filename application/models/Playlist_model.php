<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Playlist_model extends RJ_Model {

    public $_table = 'playlists';

    public function __construct()
    {
        // Call the CI_Model constructor
        parent::__construct();
    }
    
    // 获取歌单内歌曲列表
    public function getSongs ($playlist_id) 
    {
        $songs = $this->db->select('s.*')
            ->from('playlist_songs ps')
            ->join('songs s', 'ps.song_id = s.id', 'left')
            ->where('ps.playlist_id', $playlist_id)
            ->get()->result_array();
            
        return $songs;
    }

}