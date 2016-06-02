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
        
        $this->response($this->list);
    }
    
    // Adding song to collect
    public function index_post() 
    {
        // var_dump($_SESSION);
        $id = $this->post('id');
        $this->response($id);
    }
    
    // Delete song from collect
    public function index_delete()
    {
        // 
    }
    
}
