<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Song_model extends RJ_Model {

        public $_table = 'songs';

        public function __construct()
        {
                // Call the CI_Model constructor
                parent::__construct();
        }

}