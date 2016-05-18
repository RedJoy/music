<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Playlist_model extends RJ_Model {

        public $_table = 'playlists';

        public function __construct()
        {
                // Call the CI_Model constructor
                parent::__construct();
        }

}