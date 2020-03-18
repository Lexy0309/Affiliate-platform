<?php 
defined('BASEPATH') OR exit('No direct script access allowed');

$config = array(
	"create_assessment_log" => array(
		array(
			'field' => 'assessment_id',
			'rules' => 'trim|required'
		),
		array(
			'field' => 'assessment_log_id',
			'rules' => 'trim|required'
		),
		array(
			'field' => 'assessment_log_name',
			'rules' => 'trim|required'
		)
	),
	"update_assessment_log" => array(
		array(
			'field' => 'assessment_log_name',
			'rules' => 'trim'
		)
	)
);