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
    public function songs() 
    {
        // $songs = $this->playlist->getSongs($id);
        $lista = $this->playlist->getSongs(1);
        $listb = $this->playlist->getSongs(2);
        $listc = $this->playlist->getSongs(3);
        $listd = $this->playlist->getSongs(4);
        $liste = $this->playlist->getSongs(5);
        $songs =array(
            $lista, 
            $listb, 
            $listc, 
            $listd,
            $liste,
        );
        $this->response($songs);
    }

    private function response ($data) 
    {
        echo json_encode($data);
        return TRUE;
    }
    
}
