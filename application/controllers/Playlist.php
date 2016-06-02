<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Playlist extends CI_Controller {
    
    public function __construct () 
    {
        parent::__construct();
        
        // load Playlist Model
        $this->load->model('Playlist_model', 'playlist');
    }
    
    // Get all Playlists
    public function index() 
    {
        $id   = $this->input->get('id');
        $list = $this->playlist->get_all();

        $this->response($list);
    }
    
    // Get Playlist/songs
    public function songs($id) 
    {
        $songs = $this->playlist->getSongs($id);
        
        $this->response($songs);
    }

    private function response ($data) 
    {
        echo json_encode($data);
        return TRUE;
    }
    
}
