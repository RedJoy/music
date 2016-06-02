<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Collect_model extends RJ_Model {

    public $_table = 'songs';

    public function __construct()
    {
        // Call the CI_Model constructor
        parent::__construct();
    }
    
    // Get Songs Collected By User
    public function getUserCollects ($user_id) 
    {
        $songs = $this->db->select('s.*')
            ->from('user_collects uc')
            ->join('songs s', 'uc.song_id = s.id', 'left')
            ->where('uc.user_id', $user_id)
            ->get()->result_array();
            
        return $songs;
    }
    
    // Collect A Song
    public function collectSong ($user_id, $song_id) 
    {
        $collect_id = $this->db->insert('user_collects', array(
            'user_id' => $user_id, 
            'song_id' => $song_id
        ));
        
        return $collect_id;
    }
    
    // remove a collect 
    public function removeCollect ($user_id, $song_id) 
    {
        $this->db->delete('user_collects', array(
            'user_id' => $user_id, 
            'song_id' => $song_id
        ));
        
        return $this->db->affected_rows();
    }
    
    // determine if user collected a song
    public function hasCollected ($user_id, $song_id) 
    {
        $song = $this->db->get_where('user_collects', array(
            'user_id' => $user_id, 
            'song_id' => $song_id
        ))->result_array();
        
        return empty($song) ? FALSE : TRUE;
    }

}