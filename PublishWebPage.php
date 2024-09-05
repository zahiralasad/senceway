<?php
require 'vendor/autoload.php';

use PhpMqtt\Client\MQTTClient;
use PhpMqtt\Client\ConnectionSettings;

$brokerAddr  = 'localhost';
$brokerPort  = 1883;
$client   	 = 'test-publisher';
$user    	 = 'PhpClient';
$pass    	 = 'PhpPass';

$mqttClient = new MqttClient($brokerAddr, $brokerPort, $client);

// ConnectionSettings can be skippedif anonymous connection is used.
$connSettings = (new ConnectionSettings)
   				 ->setUsername($user)
   				 ->setPassword($pass);
$mqttClient->connect($connSettings);
$mqttClient->subscribe('/test/topic', function ($topic, $message) {
	printf("Received message: %s\n", $message);
}, 0);

$mqttClient->loop(true);

?>