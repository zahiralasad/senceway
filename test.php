
<?php
require 'vendor/autoload.php';

$server   = 'localhost';
$port     = 1883;
$clientId = 'test-publisher';

$mqtt = new \PhpMqtt\Client\MqttClient($server, $port, $clientId);
$mqtt->connect();
$mqtt->publish('php-mqtt/client/test', 'Hello World!', 0);
$mqtt->disconnect();

?>