<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Publish Test</title>
</head>
<body>

<h1>Pro Mosquitto PHP Publish test page</h1>

<h3>Broker hostname: localhost</h3>
<h3>Publish topic: /test/topic</h3>
<h3>Publish data: Hello World!</h3>


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
$connSettings = (new ConnectionSettings)
   				 ->setUsername($user)
   				 ->setPassword($pass);

$mqttClient->connect($connSettings);
$mqttClient->publish('/test/topic', 'Hello World!', 0);
$mqttClient->disconnect();

?>

</body>
</html>