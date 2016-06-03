<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Collect extends RJ_Controller {
    
    // 需要登陆验证
    protected $_auth = TRUE;
    
    public function __construct () 
    {
        parent::__construct();
        
        // load Playlist Model
        $this->load->model('Collect_model', 'collect');
    }
    
    // Get All Collects
    public function index() 
    {
        if ($this->input->post('id')) return $this->_add_song();
        
        $list = $this->collect->getUserCollects($this->_u['user_id']);
        
        $this->response($list);
    }
    
    // Adding song to collect
    private function _add_song () 
    {
        $this->load->model('Song_model', 'song');
        $song_id    = (int) $this->input->post('id');
        $song_exsit = $this->song->get($song_id);

        # song exsits ? 
        if ( ! $song_exsit) 
            $this->response(NULL, 400, 'song not found!'); # Song not found, Bad Request

        $data = array('user_id' => $this->_u['user_id'], 'song_id' => $song_id);

        # collected ?
        $collected = $this->collect->get_by($data);
        if ($collected) $this->response(NULL, 200, 'Already Collected!');

        # add to collects
        $collect_id = $this->collect->insert($data, TRUE);

        if ($collect_id) 
            $this->response($collect_id);
        else 
            $this->response(NULL, 502, 'failed!'); # database failure
    }
    
    // Delete song from collect
    public function delete ()
    {
        $song_id = (int) $this->input->post('id');
        
        if ($song_id < 1) $this->response(NULL, 400, 'song not found!');
        
        $data = array('user_id' => $this->_u['user_id'], 'song_id' => $song_id);
        # collected ?
        $collected = $this->collect->get_by($data);
        if ( ! $collected) $this->response(NULL, 400, 'not in collect!');
        
        if ($this->collect->delete_by($data))
            $this->response('OK');
        else 
            $this->response(NULL, 502, 'Server Error!');
    }
    
}
