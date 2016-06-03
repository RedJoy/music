<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Collect extends RJ_Controller {
    
    public function __construct () 
    {
        parent::__construct();
        
        // load Playlist Model
        $this->load->model('Collect_model', 'collect');
    }
    
    // Get All Collects
    public function index_get() 
    {
        $list = $this->collect->getUserCollects($this->_u['user_id']);
        
        $this->response($list);
    }
    
    // Adding song to collect
    public function index_post() 
    {
        $this->load->model('Song_model', 'song');
        $song_id    = (int) $this->post('id');
        $song_exsit = $this->song->get($song_id);

        # song exsits ? 
        if ( ! $song_exsit) 
            $this->response('song not found!', 400); # Song not found, Bad Request

        $data = array('user_id' => $this->_u['user_id'], 'song_id' => $song_id);

        # collected ?
        $collected = $this->collect->get_by($data);
        if ($collected) $this->response('Already Collected!', 200);

        # add to collects
        $collect_id = $this->collect->insert($data, TRUE);

        if ($collect_id) 
            $this->response($collect_id);
        else 
            $this->response('failed!', 502); # database failure
    }
    
    // Delete song from collect
    public function index_delete($id = 0)
    {
        $id = $this->post('id');
        // var_dump($id);
        $this->response('OK');
    }
    
}
