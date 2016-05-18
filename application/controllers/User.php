<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User extends CI_Controller {
    
    public function __construct () 
    {
        parent::__construct();
        
        // load User Model
        $this->load->model('User_model', 'user');
    }

	// user register
	public function register ()
    {
        $username = trim($this->input->post('username'));
        $password = trim($this->input->post('password'));
        $pwdconfm = trim($this->input->post('pwdconfm'));
        
        $unamelen = mb_strlen($username, 'UTF8');
        $upasslen = mb_strlen($password, 'UTF8');
        
        if ($password !== $pwdconfm) $this->_error('两次输入密码不一致');
        if ($unamelen > 20 OR $unamelen < 2) $this->_error('用户名在2~20个字符之间');
        if ($upasslen > 40 OR $upasslen < 6) $this->_error('密码在6~40个字符之间');
        
        $this->load->model('user');
        $user = $this->user->get_by('username', $username);
        
        if ($user) $this->_error('用户已经被注册！');
        
        $user_id = $this->user->insert([
            'username' => $username, 
            'password' => md5($password)
        ]);
        
        if ($user_id) 
            $this->_response($user_id);
        else 
            $this->_error('server error');
    }
    
    // user login
    public function login () 
    {
        $username = $this->input->post('username');
        $password = $this->input->post('password');
        
        $user = $this->user->get_by('username', $username);
        
        if ( ! $user) $this->_error('用户不存在！');
        if (md5($password) !== $user->password) $this->_error('密码错误！');
        
        $this->session->set_userdata('user_id',  $user->id);
        $this->session->set_userdata('username', $user->username);
        
        $this->_response([
            'user_id'  => $user->id, 
            'username' => $user->username
        ]);
    }
    
    // user logout
    public function logout () 
    {
        $this->session->sess_destroy();
        $this->_response('OK');
    }
    
    // get user info
    public function i () 
    {
        $user = $this->session->get_userdata();
        
        if ( ! isset($user['user_id'])) 
            $this->_error('Please Login!');
           
        $this->_response($user);
    }
    
    // return json response
    private function _response ($data, $code = 200, $msg = 'OK', $exit = TRUE) 
    {
        echo json_encode([
            'data' => $data, 
            'code' => $code, 
            'msg' => $msg
        ]);
        
        $exit && exit(1);
        
        return TRUE;
    }
    
    // error message response
    private function _error ($msg = '', $code = 401) 
    {
        $this->_response(NULL, $code, $msg, TRUE); // exit when error occurs
    }
    
}
