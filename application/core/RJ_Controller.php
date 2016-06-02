<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require_once APPPATH . 'libraries/REST_Controller.php';

class RJ_Controller extends REST_Controller {
    
    protected $_u;

    public function __construct()
    {
        parent::__construct();

        // 登录信息校验
        if ( ! $this->session->userdata('user_id')) {
            $this->response(NULL, 401);
        } else {
            $this->_u = array(
                'user_id'   => $this->session->userdata('user_id'), 
                'user_name' => $this->session->userdata('user_name') 
            );
        }
    }
}
