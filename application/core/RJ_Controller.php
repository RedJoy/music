<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class RJ_Controller extends CI_Controller {
    
    protected $_u;
    protected $_auth = FALSE;

    public function __construct()
    {
        parent::__construct();

        // 登录信息校验
        if ($this->_auth) {
            if ( ! $this->session->userdata('user_id')) {
                $this->response(NULL, 401, 'Please login first!');
            } else {
                $this->_u = array(
                    'user_id'   => $this->session->userdata('user_id'), 
                    'user_name' => $this->session->userdata('user_name') 
                );
            }
        }
    }
    
    // 发送响应数据
    public function response ($data = NULL, $code = 200, $msg = 'OK', $continue = false) 
    {
        $output = json_encode(array(
            'code' => $code, 
            'data' => $data, 
            'msg' => $msg
        ));
        
        echo $output;
        exit();
    }
}
