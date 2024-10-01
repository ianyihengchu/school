<?php

$fname = "wasim";
$lname = "singh";
$myscore = 80;
$passmark = 50;
$israining = true;

echo ("<h1>Server is alive</h1>");
echo ("<p>my name is " . $fname . " " . $lname . " </p>");

$fruits = ["orange", "grapes", "tomatoes"];

for ($i = 0; $i < count($fruits); $i++) {
    echo ("<p>" . $fruits[$i] . "</p>");
}

$person = [
    "first" => "wasim",
    "last" => "singh",
    "height" => "180"
];
echo ($person["first"]);
echo ($person["last"]);
echo ($person["height"]);

?>


<div id="if"> you
    <?php
    if ($myscore > $passmark) {
        echo ("passed!");
    } else {
        echo ("failed:(");
    }
    ?>
</div>


<ul>
    <?php
    $Courses = [
        [
            "image" => "",
            "coursename" => " web app development",
            "enddate" => "dec 20th 2024",
            "url" => "www.google.com"
        ],
        [
            "image" => "",
            "coursename" => " web app development",
            "enddate" => "dec 20th 2024",
            "url" => "www.google.com"
        ],
        [
            "image" => "",
            "coursename" => " web app development",
            "enddate" => "dec 20th 2024",
            "url" => "www.google.com"
        ]
    ];

   // print_r($Courses);

    for ($i = 0; $i < count($Courses); $i++) {
        ?>
        <li>
            <img src="<?= $Courses[$i]["image"] ?>" width="400">
            <h2> <?= $Courses[$i]["coursename"] ?> </h2>
            <span>Course ends: <?= $Courses[$i]["enddate"] ?> </span>
            <a href="<?= $Courses[$i]["url"] ?>"> Open Course </a>
        </li>
        <?php
    }
    ?>
</ul>


<li>
    <img src="">
    <h2>Web app dev</h2>
    <span>Course ends: dec 20th 2023</span>
</li>


<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>


<?php
echo ("more php driven content")
    ?>