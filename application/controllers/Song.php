<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Song extends RJ_Controller {
    
    public function __construct () 
    {
        parent::__construct();
        
        // load User Model
        $this->load->model('Song_model', 'song');
    }
    
    // get all songs
    public function index_get() 
    {
        $songs = $this->song->get_all();
        $this->response($songs);
    }
    
    // collect a song
    public function collect_get () 
    {
        $id = $this->get('id');
        $this->response($id);
    }
    
}
