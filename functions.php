<?php
include_once 'lib/theme-helpers.php';
include_once 'lib/theme-enqueue.php';
include_once 'lib/theme-endpoints.php';
include_once 'lib/theme-support.php';

$Theme_Support = new Theme_Support();
$Theme_Support->init();

$Theme_Enqueue = new Theme_Enqueue();
$Theme_Enqueue->init();

$Theme_Endpoints = new Theme_Endpoints();
$Theme_Endpoints->init();