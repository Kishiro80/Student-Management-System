<?php
include_once 'db.php'; //Connects to your Database 
include_once 'encrypt.php'; 

$jsoninput = file_get_contents('php://input');
$data = json_decode($jsoninput); 
$Action=isset($data->Action) ? (int)$data->Action : NULL; // choose which action 1 for list class and subject 2 for list student 
$ID=isset($data->ID) ? (int)$data->ID : NULL;
$ClassID=isset($data->ClassID) ?(int) $data->ClassID : 0;
$SubID=isset($data->SubID) ?(int) $data->SubID : 0;
$comment=isset($data->comment) ? $data->comment : NULL;
$given=isset($data->given) ? $data->given : NULL;
$due=isset($data->due) ? $data->due : NULL;
function getList(int $id = 0, int $ClassID = 0,int $SubID = 0)
{
	global $db;
	$output = array();
	$sql = "Select * from hometeach where TeacherID = $id";
	$result = $db->query($sql)->fetchAll();
	$json_data = json_encode($result);
	$output['msg'] = "Success";
	$output['data']=$json_data;
	echo json_encode($output);	
	$db->close();

}
function Dummy($a = 0, $b = 0, $c = 0, $d = 0, $e = 0)
{
	//Function dummy exist so that nothing will be done if action == 0
}

function getStudent(int $id = 0, int $ClassID =0, int $SubID = 0,$comment = 0 ,$given =0,$due =0) // will change base on what is click  check by class ? subject ?
{
	global $db;
	$sql = "Select * from list_student where ClassID = $ClassID OR SubID = $SubID OR CSID=$id"; // dummy syntax
	$studentlist = $db->query($sql)->fetchAll();
	$json_data = json_encode($studentlist);
    $output['msg'] = "Success";
	$output['data']=$json_data;
	echo json_encode($output);	
	$db->close();
}

function addHomework(int $id = 0, int $ClassID =0, int $SubID = 0 ,$comment = 0 ,$given =0,$due =0) 
{
	global $db;
	$sql = "INSERT INTO `homework`( `CSID`, `Comment`, `Date_given`, `DueDate`) VALUES ($id,\"{$comment}\",\"{$given}\",\"{$due}\")";	
	//echo($sql);
	$db->query($sql);
	$output['msg'] = "Success";
	echo json_encode($output);
	$db->close();
}
function updateResult(int $id = 0, int $ClassID =0, int $SubID = 0 ,$comment = 0 ,$given =0,$due =0) 
{
	global $db;
	$sql = "Update `result` set  first_exam = $comment , second_exam = $given, third_exam = $due  where StudentID = $id AND SubjectID = $SubID ";	//comment = first_exam, second_exam ant etc given =  marks . 
	$db->query($sql);
	$output['msg'] = "Success";
	echo json_encode($output);
	$db->close();
}

function viewNews( $id = 0, int $ClassID =0, int $SubID = 0,$comment = 0 ,$given =0,$due =0) // will change base on what is click  check by class ? subject ?
{
	global $db;
	$sql = "Select * from news"; // dummy syntax
	$news = $db->query($sql)->fetchAll();
	$json_data = json_encode($news);
    $output['msg'] = "Success";
	$output['data']=$json_data;
	echo json_encode($output);	
	$db->close();
}

function getStatistic($CSID= 0, $ClassID =0,  $SubID = 0,$comment = 0 ,$given =0,$due =0){
	global $db,$debug;
	$output=array();
	$finaldata=array();
	$sql = "SELECT Name as `name`,first_exam,second_exam,third_exam FROM `csid_result` WHERE CSID={$CSID} " ;//{$ClassID}
	
	$q=$db->query($sql); 
	$count=$q->numRows();
	$result=$q->fetchAll();	
	if($count){
 
	foreach ($result as &$student) {
        
        $mark= array($student["first_exam"],$student["second_exam"],$student["third_exam"]);
        unset($student["first_exam"],$student["second_exam"],$student["third_exam"]);
        $student["data"]=$mark;
    
//        print_r($mark);

    } 
	$finaldata["graph1"]=$result;
		 
		
		$sql = "SELECT * FROM `mark_list`   WHERE CSID={$CSID} limit 1" ;//{$ClassID}
		$result2 = $db->query($sql)->fetchAll();
		$result2=$result2[0];
		$result2["Label"] = ["F","C","B","A"];
		
			
		$result2["Awal"]= array($result2["Awal_F"],$result2["Awal_C"],$result2["Awal_B"],$result2["Awal_A"]);
		$result2["Tengah"]= array($result2["Tengah_F"],$result2["Tengah_C"],$result2["Tengah_B"],$result2["Tengah_A"]);
		$result2["Akhir"]= array($result2["Akhir_F"],$result2["Akhir_C"],$result2["Akhir_B"],$result2["Akhir_A"]);
		unset($result2["Awal_F"],$result2["Awal_C"],$result2["Awal_B"],$result2["Awal_A"]);
		unset($result2["Tengah_F"],$result2["Tengah_C"],$result2["Tengah_B"],$result2["Tengah_A"]);
		unset($result2["Akhir_F"],$result2["Akhir_C"],$result2["Akhir_B"],$result2["Akhir_A"]);

		$finaldata["histogram"]=$result2;
		
		$output['msg'] = "Success";
		$output['data']=$finaldata;
		unset($result2);
		
		echo(json_encode($output));
	}
	else{
		echo('{"msg":"Success","graph1":[{"Name":"Demo","markah":[60,75,90]}],"histogram":{"13":{"CSID":0,"total":1,"Awal":["2","3","5","3"],"Tengah":["3","5","3","2"],"Akhir":["2","4","5","3"]},"Label":["F","C","B","A"]}}');
	}
	$db->close();
}
if ($Action) {
	$fn = array('Dummy', 'getList', 'getStudent','addHomework','updateResult','viewNews','getStatistic');
	$fn[$Action]($ID, $ClassID,$SubID,$comment,$given,$due);
}

?>