<?php
include_once 'db.php'; //Connects to your Database 
include_once 'encrypt.php';

$jsoninput = file_get_contents('php://input');
$data = json_decode($jsoninput);
$Action = isset($data->Action) ? (int)$data->Action : NULL; // choose which action 1 for list class and subject 2 for list student 
$ID = isset($data->ID) ? (int)$data->ID : 0;
$ClassID = isset($data->ClassID) ? (int) $data->ClassID : 0;
$SubID = isset($data->SubID) ? (int) $data->SubID : 0;
$CSID = isset($data->CSID) ? (int) $data->CSID : 0;

function Dummy($a = 0, $b = 0, $c = 0, $d = 0, $e = 0)
{
	//Function dummy exist so that nothing will be done if action == 0
}
function viewSubject(int $id = 0, int $ClassID = 0, int $SubID = 0,int $CSID = 0)
{
	global $db;
	$output = array();
	$sql = "Select * from view_subject where ClassID = $ClassID";
	$result = $db->query($sql)->fetchAll();
	$json_data = json_encode($result);
	$output['msg'] = "Success";
	$output['data'] = $json_data;
	echo json_encode($output);
	$db->close();
}
function viewResult(int $id = 0, int $ClassID = 0, int $SubID = 0,int $CSID = 0) // will change base on what is click  check by class ? subject ?
{
	global $db;
	$sql = "Select * from list_student where CSID= $CSID and StudentID = $id"; // dummy syntax
	$result = $db->query($sql)->fetchAll();
	$json_data = json_encode($result);
	$output['msg'] = "Success";
	$output['data'] = $json_data;
	echo json_encode($output);
	$db->close();
}

function viewHomework(int $id = 0, int $ClassID = 0, int $SubID = 0,int $CSID = 0) // will change base on what is click  check by class ? subject ?
{
	global $db;
	$sql = "Select * from final_class where ClassID = $ClassID OR CSID = $CSID"; // dummy syntax
	$homework = $db->query($sql)->fetchAll();

	foreach ($homework as &$item) {
		$earr = array();
		if ($item["homework2"] != NULL) {
			$hwlist = explode(";", $item["homework2"]);
			foreach ($hwlist as $hwstr) {
				$earr2 = array();
				$hw = explode(",", $hwstr);

				$earr2["title"] = $hw[0];
				$earr2["due"] = $hw[1];
				array_push($earr, json_decode(json_encode($earr2)));
			}
		}
		$item["homework2"] = $earr;
	}
	
	$json_data = json_encode($homework);
	$output['msg'] = "Success";
	$output['data'] = $json_data;
	echo json_encode($output);
	$db->close();
}

function viewNews(int $id = 0, int $ClassID = 0, int $SubID = 0,int $CSID = 0) // will change base on what is click  check by class ? subject ?
{
	global $db;
	$sql = "Select * from list_student where ClassID = $ClassID OR SubID = $SubID"; // dummy syntax
	$news = $db->query($sql)->fetchAll();
	$json_data = json_encode($news);
	$output['msg'] = "Success";
	$output['data'] = encrypt($json_data);
	echo json_encode($output);
	$db->close();
}

if ($Action) {
	$fn = array('Dummy', 'viewSubject', 'viewResult', 'viewHomework', 'viewNews');
	$fn[$Action]($ID, $ClassID, $SubID,$CSID);
}
