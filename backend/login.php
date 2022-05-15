<?php
include_once 'db.php'; //Connects to your Database 
include_once 'encrypt.php'; //Connects to your Database 
global $db;

$jsoninput = file_get_contents('php://input');
$data = json_decode($jsoninput);
$loginid = isset($data->username) ? $data->username : NULL;
$pass = isset($data->pass) ? $data->pass : NULL;
$output = array();

function login($loginid = 0, $pass = 0, $type = 0, $detail = 0)
{
	global $db;
	$output = array();
	$check = "SELECT * FROM $type WHERE $detail = \"{$loginid}\"";
	$info = $db->query($check)->fetchArray();
	if (count($info)) {   //check if array is empty
		if ($pass != $info['password']) {
			die('{"msg":"Incorrect password, please try again."}'); //refer to main page later
		} else { // if login is ok then we return value  
			$info['msg'] = "Login Success"; // this is how to add new item to php array
			$info['type'] = $type;
			unset($info['password']); //this is how to remove specific element
			$json_data = json_encode($info);
			$output['msg'] = "Login Success";
			$output['data'] = encrypt($json_data);
			return $output;
		}
	} else {
		die('{"msg":"Incorrect credential, please try again."}'); //refer to main page later
	}
}


if (!$loginid) {
	die('{"msg":"You did not fill in LoginID"}');
}

if (!$pass) {
	die('{"msg":"You did not fill in Password"}');
}

if (is_numeric($loginid[0])) {
	$length = strlen($loginid);
	if ($length == 12) {
		$output = login($loginid, $pass, 'student', 'IC');
	} else if ($length == 9) {
		$output = login($loginid, $pass, 'teacher', 'LoginID');
	}
} else {
	$output = login($loginid,$pass,'admin','username');
}

echo json_encode($output);//return whateva data yang ada, or return no user found.
