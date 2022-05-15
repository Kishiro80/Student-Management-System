<?php
include_once 'db.php'; //Connects to your Database 
include_once 'encrypt.php'; 

$jsoninput = file_get_contents('php://input');
$data = json_decode($jsoninput); 
$Action=isset($data->Action) ? (int)$data->Action : NULL; // choose which action 1 for list class and subject 2 for list student 
$ID=isset($data->ID) ? (int)$data->ID : NULL;
$ClassID=isset($data->ClassID) ?(int) $data->ClassID : 0;
$SubID=isset($data->SubID) ?(int) $data->SubID : 0;
$title=isset($data->title) ? $data->title : NULL;
$notes=isset($data->notes) ? $data->notes : NULL;
$date=isset($data->due) ? $data->due : NULL;
$uid = isset($data->uid) ? $data->uid:NULL;
function addNews( $id = 0, int $ClassID =0, int $SubID = 0 ,$title = 0 ,$notes =0,$date =0) 
{
	global $db;
	$sql = "INSERT INTO `news`(`Title`, `Notes`, `Published_Date`) VALUES (\"{$title}\",\"{$notes}\",\"{$date}\")";	
	//echo($sql);
	$db->query($sql);
	$output['msg'] = "Success";
	echo json_encode($output);
	$db->close();
}
function Dummy($a = 0, $b = 0, $c = 0, $d = 0, $e = 0)
{
	//Function dummy exist so that nothing will be done if action == 0
}

function getclass( $id = 0, $ClassID =0, $SubID = 0,$title = 0 ,$notes =0,$date =0 ,$uid = 0) // will change base on what is click  check by class ? subject ?
{
	global $db;
	$sql = "SELECT ID,Class as Name,Year,GROUP_CONCAT(DISTINCT CONCAT(CSID,',',SubID,',',Name,',',TeacherID,',',TeacherName) order by ID SEPARATOR ';' ) as Subject FROM `hometeach2` group by ID"; // dummy syntax
	$studentlist = $db->query($sql)->fetchAll();
	foreach ($studentlist as &$item) {
		$earr = array();
		if ($item["Subject"] != NULL) {
			$hwlist = explode(";", $item["Subject"]);
			foreach ($hwlist as $hwstr) {
				$earr2 = array();
				$hw = explode(",", $hwstr);
				$earr2["CSID"] = $hw[0];
				$earr2["SubID"] = $hw[1];
				$earr2["Sub"] = $hw[2];
				$earr2["TeacherID"] = $hw[3];
				$earr2["TeacherName"] = $hw[4];
				array_push($earr, json_decode(json_encode($earr2)));
			}
		}
		$item["Subject"] = $earr;
	}
	$json_data = json_encode($studentlist);
    $output['msg'] = "Success";
	$output['data']=$json_data;
	echo json_encode($output);	
	$db->close();
}
function getTeacher( $id = 0, $ClassID =0, $SubID = 0,$title = 0 ,$notes =0,$date =0 ,$uid = 0) // will change base on what is click  check by class ? subject ?
{
	global $db;
	$sql = "Select * from teacher"; // dummy syntax
	$studentlist = $db->query($sql)->fetchAll();
	
	$json_data = json_encode($studentlist);
    $output['msg'] = "Success";
	$output['data']=$json_data;
	echo json_encode($output);	
	$db->close();
}

function getSubject( $id = 0, $ClassID =0, $SubID = 0,$title = 0 ,$notes =0,$date =0 ,$uid = 0) // will change base on what is click  check by class ? subject ?
{
	global $db;
	$sql = "Select * from subject"; // dummy syntax
	$studentlist = $db->query($sql)->fetchAll();
	
	$json_data = json_encode($studentlist);
    $output['msg'] = "Success";
	$output['data']=$json_data;
	echo json_encode($output);	
	$db->close();
}

function addClass( $id = 0, int $ClassID =0, int $SubID = 0 ,$title = 0 ,$notes =0,$date =0 ,$uid = 0) 
{
	global $db;
	$sql = "INSERT INTO `Class`( `Name`, `Year`) VALUES (\"{$title}\",\"{$notes}\")";	
	//echo($sql);
	$db->query($sql);
	$output['msg'] = "Success";
	echo json_encode($output);
	$db->close();
}
function deleteClass( $id = 0, int $ClassID =0, int $SubID = 0 ,$title = 0 ,$notes =0,$date =0 ,$uid = 0) 
{
	global $db;
	$sql = "Delete from `Class` where ID =$id";	
	echo($sql);
	$db->query($sql);
	$output['msg'] = "Success";
	echo json_encode($output);
	$db->close();
}
function deleteCS( $id = 0, int $ClassID =0, int $SubID = 0 ,$title = 0 ,$notes =0,$date =0 ,$uid = 0) 
{
	global $db;
	$sql = "Delete from `class_subject` where CSID =$id";	
	echo($sql);
	$db->query($sql);
	$output['msg'] = "Success";
	echo json_encode($output);
	$db->close();
}
function addClass_Subject( $id = 0, int $ClassID =0, int $SubID = 0 ,$title = 0 ,$notes =0,$date =0 ,$uid = 0) 
{
	global $db;
	$sql = "INSERT INTO `class_subject`( `ClassID`, `SubjectID`) VALUES (\"{$ClassID}\",\"{$SubID}\")";	
	//echo($sql);
	$db->query($sql);
	addTeacher_Subject($id);
}
function addTeacher_Subject( $id = 0) 
{
	global $db;
	$sql = "INSERT INTO teacher_subject (TeacherID, CSID,Year) SELECT $id, CSID,2021 FROM class_subject ORDER BY CSID DESC LIMIT 1";	
	//echo($sql);
	$db->query($sql);
	$output['msg'] = "Success";
	echo json_encode($output);
	$db->close();
}
function updateClass_subject(int $id = 0, int $ClassID =0, int $SubID = 0 ,$comment = 0 ,$notes =0,$due =0,$uid = 0) 
{
	global $db;
	$sql = "update class_subject,teacher_subject set class_subject.SubjectID =$SubID, teacher_subject.TeacherID = $id where class_subject.CSID = $ClassID AND teacher_subject.CSID =  $ClassID ";	//comment = first_exam, second_exam ant etc given =  marks . 
	$db->query($sql);
	$output['msg'] = "Success";
	echo json_encode($output);
	$db->close();
}
function getStudent( $id = 0, $ClassID =0, $SubID = 0,$title = 0 ,$notes =0,$due =0,$uid = 0) // will change base on what is click  check by class ? subject ?
{
	global $db;
	$sql = "Select * from student_final"; // dummy syntax
	$studentlist = $db->query($sql)->fetchAll();
	
	$json_data = json_encode($studentlist);
    $output['msg'] = "Success";
	$output['data']=$json_data;
	echo json_encode($output);	
	$db->close();
}
function updateStudent(int $id = 0, int $ClassID =0, int $SubID = 0 ,$title = 0 ,$notes =0,$date =0,$uid = 0) 
{
	global $db;
	$sql = "update student set Name = \"{$title}\", IC = \"{$notes}\" , Address = \"{$date}\" , Contact = $id, ClassID = $ClassID , password = $SubID where ID = $uid";	//comment = first_exam, second_exam ant etc given =  marks . 
	$db->query($sql);
	$output['msg'] = "Success";
	echo json_encode($output);
	$db->close();
}
function addStudent( $id = 0, int $ClassID =0, int $SubID = 0 ,$title = 0 ,$notes =0,$date =0 ,$uid = 0) 
{
	global $db;
	$sql = "INSERT INTO `student`( `Name`, `IC`,`Address`,`Contact`,`ClassID`,`password`) VALUES (\"{$title}\",\"{$notes}\",\"{$date}\",$id,$ClassID,$SubID)";	
	//echo($sql);
	$db->query($sql);
	$output['msg'] = "Success";
	echo json_encode($output);
	$db->close();
}
function deleteStudent( $id = 0, int $ClassID =0, int $SubID = 0 ,$title = 0 ,$notes =0,$date =0 ,$uid = 0) 
{
	global $db;
	$sql = "Delete from `Student` where ID =$uid";	
	echo($sql);
	$db->query($sql);
	$output['msg'] = "Success";
	echo json_encode($output);
	$db->close();
}
function updateTeacher(int $id = 0, int $ClassID =0, int $SubID = 0 ,$title = 0 ,$notes =0,$date =0,$uid = 0) 
{
	global $db;
	$sql = "update teacher set Name = \"{$title}\", Contact = $id, LoginID =\"{$notes}\" , password = \"{$date}\" where ID = $uid";	//comment = first_exam, second_exam ant etc given =  marks . 
	$db->query($sql);
	$output['msg'] = "Success";
	echo json_encode($output);
	$db->close();
}
function addTeacher( $id = 0, int $ClassID =0, int $SubID = 0 ,$title = 0 ,$notes =0,$date =0 ,$uid = 0) 
{
	global $db;
	$sql = "INSERT INTO `teacher`( `Name`, `Contact`,`LoginID`,`password`) VALUES (\"{$title}\",$id,\"{$notes}\",\"{$date}\")";	
	//echo($sql);
	$db->query($sql);
	$output['msg'] = "Success";
	echo json_encode($output);
	$db->close();
}
function deleteTeacher( $id = 0, int $ClassID =0, int $SubID = 0 ,$title = 0 ,$notes =0,$date =0 ,$uid = 0) 
{
	global $db;
	$sql = "Delete from `Teacher` where ID =$uid";	
	echo($sql);
	$db->query($sql);
	$output['msg'] = "Success";
	echo json_encode($output);
	$db->close();
}
function viewNews( $id = 0, int $ClassID =0, int $SubID = 0,$comment = 0 ,$given =0,$due =0,$uid = 0) // will change base on what is click  check by class ? subject ?
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

if ($Action) {
	$fn = array('Dummy', 'addNews', 'getclass','getTeacher','getSubject','addClass','deleteClass','deleteCS','addClass_Subject','updateClass_subject','getStudent','updateStudent','addStudent','deleteStudent','updateTeacher','addTeacher','deleteTeacher');
	$fn[$Action]($ID,$ClassID,$SubID,$title,$notes,$date,$uid);
}


?>