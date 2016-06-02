<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Playlist extends RJ_Controller {
    
    public static $types = [
        'drama', 
        'zhpop', 
        'ameuro', 
        'korpan'
    ];
    
    public function __construct () 
    {
        parent::__construct();
        
        // load Playlist Model
        $this->load->model('Playlist_model', 'playlist');
    }
    
    // Get all Playlists
    public function index_get() 
    {
        $id   = $this->input->get('id');
        $list = $this->playlist->get_all();
        $this->response($list);
    }
    
    // Get Playlist/songs
    public function songs_get() 
    {
        $id    = $this->get('id');
        $songs = $this->playlist->getSongs($id);
        
        $this->response($songs);
    }
    
}
