<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require_once APPPATH . 'libraries/REST_Controller.php';

class RJ_Controller extends REST_Controller {

    public function __construct()
    {
        parent::__construct();

        // 登录信息校验
        $user_id = $this->session->userdata('user_id');
        if ( ! $user_id) {
            $this->response(NULL, 401);
        }
    }
}
