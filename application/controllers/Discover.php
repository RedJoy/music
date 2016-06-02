<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Discover extends CI_Controller {
    
    // protected $_genre = array();

    public function __construct () 
    {
        parent::__construct();
        
        // load Playlist Model
        $this->load->model('Song_model', 'song');
    }
    
    // Get All Collects
    public function index() 
    {
        $lista = $this->song->get_many_by(array('genre'=>1));
        $listb = $this->song->get_many_by(array('genre'=>2));
        $listc = $this->song->get_many_by(array('genre'=>3));
        $listd = $this->song->get_many_by(array('genre'=>4));

        echo json_encode(array(
            '1' => $lista, 
            '2' => $listb, 
            '3' => $listc, 
            '4' => $listd 
        ));

        return TRUE;
    }
    
}
