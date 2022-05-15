<?php

include_once 'db.php';

global $db;

$jsoninput = file_get_contents('php://input');
$data = json_decode($jsoninput); 

$CSID=$data->CSID ?? 0;
function getStatistic($CSID){
	global $db,$debug;
	$finaldata=array();
	$sql = "SELECT Name,first_exam,second_exam,third_exam FROM `csid_result` WHERE CSID={$CSID} limit 1" ;//{$ClassID}
	$q=$db->query($sql); 
	if($q->numRows()){
		$result = $q->fetchAll(); 
		$result=$result[0];
		$mark= array($result["first_exam"],$result["second_exam"],$result["third_exam"]);
		unset($result["first_exam"],$result["second_exam"],$result["third_exam"]);
		$result["markah"]=$mark;
		
		$finaldata["graph1"]=$result;
		unset($result);
		
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
		unset($result2);
		
		echo(json_encode($finaldata));
	}
	else{
		echo('{"graph1":[{"Name":"Demo","markah":[60,75,90]}],"histogram":{"13":{"CSID":0,"total":1,"Awal":["2","3","5","3"],"Tengah":["3","5","3","2"],"Akhir":["2","4","5","3"]},"Label":["F","C","B","A"]}}');
	}
	$db->close();
}
getStatistic($CSID);


?>