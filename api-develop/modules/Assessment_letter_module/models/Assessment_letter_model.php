<?php 
// donot cast to int while the column is varchar. it will cause so many security hole. juggling type
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Assessment_letter_model extends CI_Model 
{
	public function __construct()
	{
		if (ENVIRONMENT == "development") $this->db->conn_id->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	}

	function check($check, $graph)
  	{
	    try
	    {
		    $this->db->select($graph->select)->from('v_assessment_letter');
		    $this->db->where(array('assessment_letter_name' => $check));

		    // filter
		    if (!empty($graph->filter))
		    {
		    	foreach ($graph->filter as $field => $each) {
		    		$this->db->group_start();
		    		foreach ($each as $key => $value) {
			    		$this->db->or_where($field, $value);
		    		}
		    		$this->db->group_end();
		    	}
		    }

		    $query = $this->db->limit(1)->get();
	    }
	    catch (PDOException $e) {
		    log_message("error", 'Error check: '.$check."<||>" . $e->getMessage());
	    	throw new PDOException($e->getMessage(), 1);
		}

		$row = $query->row();
		
		return $row;
  	}

  	function get_last_letter_number()
  	{
	    try
	    {
		    $this->db->select("letter_number")->from('v_assessment_letter')->order_by('letter_number', 'DESC');

		    $query = $this->db->limit(1)->get();
	    }
	    catch (PDOException $e) {
		    log_message("error", 'Error check: '.$check."<||>" . $e->getMessage());
	    	throw new PDOException($e->getMessage(), 1);
		}

		$row = $query->row();
		
		return $row;
  	}

  	function get_assessment_letter_by_id($assessment_letter_id, $graph)
  	{
	    try
	    {
		    $this->db->select($graph->select)->from('v_assessment_letter');
		    $this->db->where(array('assessment_letter_id' => $assessment_letter_id));

		    // filter
		    if (!empty($graph->filter))
		    {
		    	foreach ($graph->filter as $field => $each) {
		    		$this->db->group_start();
		    		foreach ($each as $key => $value) {
			    		$this->db->or_where($field, $value);
		    		}
		    		$this->db->group_end();
		    	}
		    }

		    $query = $this->db->limit(1)->get();
	    }
	    catch (PDOException $e) {
		    log_message("error", 'Error get_assessment_letter_by_id: '.$assessment_letter_id."<||>" . $e->getMessage());
	    	throw new PDOException($e->getMessage(), 1);
		}

		$row = $query->row();
		
		return $row;
  	}

  	function get_assessment_letter_list($graph)
  	{
	    try
	    {
		    // select
		    $this->db->select($graph->select)
		    	->from('v_assessment_letter');

		    // datetime filter
	    	if (!empty($graph->created_time))
		    {
	    		$this->db->group_start();
	    		$this->db->where(" created_date BETWEEN '".$graph->created_time[0]."' AND '".$graph->created_time[1]."'", NULL, FALSE);
	    		$this->db->group_end();
		    }

		    if (!empty($graph->modified_time))
		    {
	    		$this->db->or_group_start();
	    		$this->db->where(" modified_date BETWEEN '".$graph->modified_time[0]."' AND '".$graph->modified_time[1]."'", NULL, FALSE);
	    		$this->db->group_end();
		    }

		    // filter
		    if (!empty($graph->filter))
		    {
		    	foreach ($graph->filter as $field => $each) {
		    		$this->db->group_start();
		    		foreach ($each as $key => $value) {
			    		$this->db->or_where($field, $value);
		    		}
		    		$this->db->group_end();
		    	}
		    }

		    // filter in
		    if (!empty($graph->filter_in))
		    {
		    	foreach ($graph->filter_in as $field => $value) {
	    			$this->db->group_start();
		    		$this->db->or_where_in($field, $value);
		    		$this->db->group_end();
		    	}
		    }

		    // filter not in
		    if (!empty($graph->filter_not_in))
		    {
		    	foreach ($graph->filter_not_in as $field => $value) {
	    			$this->db->group_start();
		    		$this->db->or_where_not_in($field, $value);
		    		$this->db->group_end();
		    	}
		    }

		    // search
		    if (!empty($graph->search))
		    {
		    	foreach ($graph->search as $key => $value) {
		    		$this->db->group_start();
		    		$this->db->or_like($value, NULL, 'after'); // pro index
		    		$this->db->group_end();
		    	}
		    }

		    // grouping
		    if (!empty($graph->group))
		    {
		    	$this->db->group_by($graph->group);
		    }

		    // sorting
		    if (!empty($graph->sort))
		    {
		    	foreach ($graph->sort as $key => $value) {
		    		$this->db->order_by($key, $value);
		    	}
		    }

		    // limit
		    $this->db->limit($graph->limit, $graph->offset);
		    // execute
		    $query = $this->db->get();
	    }
	    catch (PDOException $e) {
		    log_message("error", 'Error get_assessment_letter_list: '.json_encode($graph)."<||>" . $e->getMessage());
	    	throw new PDOException($e->getMessage(), 1);
		}

		$row = $query->result();

		return $row;
  	}

  	function get_assessment_letter_count($graph)
  	{
	    try
	    {
		    // select
		    $this->db->select("COUNT(*) as count", FALSE)
		    	->from('v_assessment_letter');

		    // datetime filter
	    	if (!empty($graph->created_time))
		    {
	    		$this->db->group_start();
	    		$this->db->where(" created_date BETWEEN '".$graph->created_time[0]."' AND '".$graph->created_time[1]."'", NULL, FALSE);
	    		$this->db->group_end();
		    }

		    if (!empty($graph->modified_time))
		    {
	    		$this->db->or_group_start();
	    		$this->db->where(" modified_date BETWEEN '".$graph->modified_time[0]."' AND '".$graph->modified_time[1]."'", NULL, FALSE);
	    		$this->db->group_end();
		    }

		    // filter
		    if (!empty($graph->filter))
		    {
		    	foreach ($graph->filter as $field => $each) {
		    		$this->db->group_start();
		    		foreach ($each as $key => $value) {
			    		$this->db->or_where($field, $value);
		    		}
		    		$this->db->group_end();
		    	}
		    }

		    // filter in
		    if (!empty($graph->filter_in))
		    {
		    	foreach ($graph->filter_in as $field => $value) {
	    			$this->db->group_start();
		    		$this->db->or_where_in($field, $value);
		    		$this->db->group_end();
		    	}
		    }

		    // filter not in
		    if (!empty($graph->filter_not_in))
		    {
		    	foreach ($graph->filter_not_in as $field => $value) {
	    			$this->db->group_start();
		    		$this->db->or_where_not_in($field, $value);
		    		$this->db->group_end();
		    	}
		    }

		    // search
		    if (!empty($graph->search))
		    {
		    	foreach ($graph->search as $key => $value) {
		    		$this->db->group_start();
		    		$this->db->or_like($value, NULL, 'after'); // pro index
		    		$this->db->group_end();
		    	}
		    }

		    // grouping
		    if (!empty($graph->group))
		    {
		    	$this->db->group_by($graph->group);
		    }

		    // sorting
		    if (!empty($graph->sort))
		    {
		    	foreach ($graph->sort as $key => $value) {
		    		$this->db->order_by($key, $value);
		    	}
		    }

		    // execute
		    $query = $this->db->get();
	    }
	    catch (PDOException $e) {
		    log_message("error", 'Error get_assessment_letter_count: '.json_encode($graph)."<||>" . $e->getMessage());
	    	throw new PDOException($e->getMessage(), 1);
		}

		$row = $query->row();

		return $row;
  	}

  	function create_assessment_letter($params, $auto_commit = TRUE)
  	{
		try 
		{
			if ($auto_commit) $this->db->trans_start();
			$assessment_letter_id = $this->db->insert('tbl_assessment_letter', $params);
		}
		catch (PDOException $e) {
			log_message("error", 'Error create_assessment_letter: '.json_encode($params)."<||>" . $e->getMessage());
  			$this->db->trans_rollback();
  			throw new PDOException($e->getMessage(), 1);
		}
		
		$assessment_letter_id = $this->db->insert_id();
		if ($auto_commit) $this->db->trans_complete();
		return $assessment_letter_id;
  	}

  	function update_assessment_letter_by_id($params, $assessment_id, $assessment_letter_id, $auto_commit = TRUE)
	{
		$affeted_rows = 0;

		try 
		{
			if ($auto_commit) $this->db->trans_start();
			$this->db->set($params);
			$this->db->where("assessment_id", $assessment_id);
			$this->db->where("assessment_letter_id", $assessment_letter_id);
			$affeted_rows = $this->db->update('tbl_assessment_letter');
			if ($auto_commit) $this->db->trans_complete();
		}
		catch (PDOException $e) {
			log_message("error", 'Error update_assessment_letter_by_id: '.$assessment_letter_id."<||>" . $e->getMessage());
  			$status = FALSE;
  			throw new PDOException($e->getMessage(), 1);
		}

		return $affeted_rows;
	}

	function delete_soft_assessment_letter_by_id($assessment_letters, $auto_commit = TRUE)
	{
		$affeted_rows = 0;
		if (empty($assessment_letters)) return TRUE;

		try 
		{
			if ($auto_commit) $this->db->trans_start();
			$affeted_rows = $this->db->update_batch('tbl_assessment_letter', $assessment_letters, 'assessment_letter_id');
		}
		catch (PDOException $e) {
			log_message("error", 'Error delete_soft_assessment_letter_by_id: '.json_encode($assessment_letters)."<||>" . $e->getMessage());
  			$affeted_rows = FALSE;
			if ($auto_commit) $this->db->trans_rollback();
  			throw new PDOException($e->getMessage(), 1);
		}

		if ($affeted_rows != count($assessment_letters))
		{
			if ($auto_commit) $this->db->trans_rollback();
		}
		else
		{
			if ($auto_commit) $this->db->trans_complete();
		}

		return $affeted_rows;
	}

	function delete_hard_assessment_letter_by_id($assessment_id, $assessment_letter_id, $auto_commit = TRUE)
	{
		$affeted_rows = 0;

		if (empty($assessment_id) || empty($assessment_letter_id)) return TRUE;

		try 
		{
			if ($auto_commit) $this->db->trans_start();
			
			$tables = array('tbl_assessment_letter');

			$this->db->where(array('assessment_id' => $assessment_id, 'assessment_letter_id' => $assessment_letter_id));
			
			$affeted_rows = $this->db->delete($tables);
		}
		catch (PDOException $e) {
			log_message("error", 'Error delete_hard_assessment_letter_by_id: '.json_encode($assessment_letter_id)."<||>" . $e->getMessage());
  			$affeted_rows = FALSE;
			if ($auto_commit) $this->db->trans_rollback();
  			throw new PDOException($e->getMessage(), 1);
		}

		if ($auto_commit) $this->db->trans_complete();

		return $affeted_rows;
	}
}