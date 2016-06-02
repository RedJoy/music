<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Collect_model extends RJ_Model {

    public $_table = 'user_collects';

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

}