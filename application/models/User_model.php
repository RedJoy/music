<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User_model extends RJ_Model {

        public $_table = 'users';

        public function __construct()
        {
                // Call the CI_Model constructor
                parent::__construct();
        }

}