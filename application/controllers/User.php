<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User extends RJ_Controller {
    
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
        
        if ($password !== $pwdconfm) $this->response(NULL, 400, '两次输入密码不一致');
        if ($unamelen > 20 OR $unamelen < 2) $this->response(NULL, 400, '用户名在2~20个字符之间');
        if ($upasslen > 40 OR $upasslen < 6) $this->response(NULL, 400, '密码在6~40个字符之间');
        
        $this->load->model('user');
        $user = $this->user->get_by('username', $username);
        
        if ($user) $this->response(NULL, 400, '用户已经被注册！');
        
        $user_id = $this->user->insert([
            'username' => $username, 
            'password' => md5($password)
        ]);
        
        if ($user_id) 
            $this->response($user_id);
        else 
            $this->response(NULL, 502, 'server error');
    }
    
    // user login
    public function login () 
    {
        $username = $this->input->post('username');
        $password = $this->input->post('password');
        
        $user = $this->user->get_by('username', $username);
        
        if ( ! $user) $this->response(NULL, 400, '用户不存在！');
        if (md5($password) !== $user->password) $this->response(NULL, 400, '密码错误！');
        
        $this->session->set_userdata('user_id',  $user->id);
        $this->session->set_userdata('username', $user->username);
        
        $this->response([
            'user_id'  => $user->id, 
            'username' => $user->username
        ]);
    }
    
    // user logout
    public function logout () 
    {
        $this->session->sess_destroy();
        $this->response('OK');
    }
    
    // get user info
    public function i () 
    {
        $user = $this->session->get_userdata();
        
        if ( ! isset($user['user_id'])) 
            $this->response(NULL, 401, 'Please Login!');
           
        $this->response($user);
    }
    
}
