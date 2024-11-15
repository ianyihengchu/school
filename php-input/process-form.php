
<?php 
	$fName = $_POST["fName"];
	$lName = $_POST["lName"];
	$DOB = $_POST["DOB"];
	$role = $_POST["role"];
	$workLocation = $_POST["workLocation"];

	$tmp_location = $_FILES["userfile"]["tmp_name"];
     
	$uploadFolder = "uploads/";
	$upload_location = $uploadFolder . basename($_FILES["userfile"]["name"]);

	if (move_uploaded_file($tmp_location, $upload_location)) {
	 echo "File is valid, and was successfully uploaded.\n";
	} else {
	 echo "File upload problem.\n";
	}

	echo 'Here is some more debugging info:';
	print_r($_FILES);
     
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
</head>
<body>
	<p>Hi! you submitted the form</p>
	<p>Here is your info!</p>
	<div><img src="<?= $upload_location ?>">
		<?= $fName ?> <?= $lName ?> was a <?= $role ?> at <?= $workLocation ?></div>
</body>
</html>