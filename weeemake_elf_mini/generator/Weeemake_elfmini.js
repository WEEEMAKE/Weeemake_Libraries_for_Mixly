'use strict';

goog.provide('Blockly.Arduino.weeemake');

goog.require('Blockly.Arduino');

//
Blockly.Arduino.wm_elfmini_single_led = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['var_led'+dropdown_pin] = 'WeSingleLED led_'+dropdown_pin[5]+'('+dropdown_pin+')'+';';
  var code = 'led_'+dropdown_pin[5]+'.'+dropdown_stat+'();\n';
  return code;
};

Blockly.Arduino.wm_elfmini_led_on_board = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_stat = this.getFieldValue('STAT'); 
    Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  var code = '';
  switch(dropdown_pin[5]){
  		case 'L':Blockly.Arduino.definitions_['var_led'+dropdown_pin] = 'WeSingleLED led_'+dropdown_pin[5]+dropdown_pin[10]+'('+dropdown_pin+')'+';';
		  		code = 'led_'+dropdown_pin[5]+dropdown_pin[10]+'.'+dropdown_stat+'();\n';
		  		break;
  		case 'R':Blockly.Arduino.definitions_['var_led'+dropdown_pin] = 'WeSingleLED led_'+dropdown_pin[5]+dropdown_pin[11]+'('+dropdown_pin+')'+';';
		  		code = 'led_'+dropdown_pin[5]+dropdown_pin[11]+'.'+dropdown_stat+'();\n';
		  		break;
  }
  return code;
};

//Buzzer
Blockly.Arduino.wm_elfmini_buzzer_play_beat = function() {
  var dropdown_tone = this.getFieldValue('TONE');
  var dropdown_beat = this.getFieldValue('BEAT');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['wm_elfmini_buzzer'] = 'WeBuzzer buzzer_OB(OnBoard_Buzzer);';
  var code = 'buzzer_OB.tone('+dropdown_tone+','+dropdown_beat+');\n';
  return code;
};

Blockly.Arduino.wm_elfmini_buzzer_play_pitch = function() {
  var fre = Blockly.Arduino.valueToCode(this, 'FREQUENCY',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var dur = Blockly.Arduino.valueToCode(this, 'DURATION',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['wm_elfmini_buzzer'] = 'WeBuzzer buzzer_OB(OnBoard_Buzzer);';
  var code = 'buzzer_OB.tone('+fre+','+dur+');\n';
  return code;
};

//Sound Sensor
Blockly.Arduino.wm_elfmini_sound_sensor = function() {
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['wm_elfmini_sound_sensor'] = 'WeSoundSensor sound_sensor_OB(OnBoard_Sound);'
  var code = 'sound_sensor_OB.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Light Sensor
Blockly.Arduino.wm_elfmini_light_sensor = function() {
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['wm_elfmini_light_sensor'] = 'WeLightSensor light_sensor_OB(OnBoard_Light);'
  var code = 'light_sensor_OB.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//IR Sensor
Blockly.Arduino.wm_elfmini_ir_loop = function() {
  var dropdown_key_table = this.getFieldValue('KEY_TABLE');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['wm_elfmini_ir'] = 'WeInfraredReceiver ir_OB(OnBoard_IR);'
  Blockly.Arduino.setups_['ir_on_board_for_mini_setup'] = 'ir_OB.begin();'
  var code = 'ir_OB.loop();\n'
  return code;
};

Blockly.Arduino.wm_elfmini_ir = function() {
  var dropdown_key_table = this.getFieldValue('KEY_TABLE');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['wm_elfmini_ir'] = 'WeInfraredReceiver ir_OB(OnBoard_IR);'
  var code = 'ir_OB.isKeyPressed('+dropdown_key_table+')'
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//RGB LED
Blockly.Arduino.wm_elfmini_rgb_on_board = function() {
  var red = Blockly.Arduino.valueToCode(this, 'RED', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var green = Blockly.Arduino.valueToCode(this, 'GREEN', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var blue = Blockly.Arduino.valueToCode(this, 'BLUE', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['rgb_on_board'] = 'WeRGBLed rgb_OB(OnBoard_RGB);';
  var code = 'rgb_OB.setColor(0,'+red+','+green+','+blue+');\n'+'rgb_OB.show();\n';
  return code;
};

Blockly.Arduino.wm_elfmini_rgb_on_board_1 = function() {
  var colour_rgb_led_color = this.getFieldValue('RGB_LED_COLOR');
  var color = goog.color.hexToRgb(colour_rgb_led_color);
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['rgb_on_board'] = 'WeRGBLed rgb_OB(OnBoard_RGB);';
  var code = 'rgb_OB.setColor(0,'+color+');\n'+'rgb_OB.show();\n';
  return code;
};

Blockly.Arduino.wm_elfmini_rgb_ring = function() {
  var red = Blockly.Arduino.valueToCode(this, 'RED', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var green = Blockly.Arduino.valueToCode(this, 'GREEN', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var blue = Blockly.Arduino.valueToCode(this, 'BLUE', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['rgb_ring'] = 'WeRGBLed rgb_ring(13);';
  var code = 'rgb_ring.setColor(0,'+red+','+green+','+blue+');\n'+'rgb_ring.show();\n';
  return code;
};

Blockly.Arduino.wm_elfmini_rgb_ring_1 = function() {
  var colour_rgb_led_color = this.getFieldValue('RGB_LED_COLOR');
  var color = goog.color.hexToRgb(colour_rgb_led_color);
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['rgb_ring'] = 'WeRGBLed rgb_ring(13);';
  var code = 'rgb_ring.setColor(0,'+color+');\n'+'rgb_ring.show();\n';
  return code;
};

Blockly.Arduino.wm_elfmini_rgb_rj = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var pixel = Blockly.Arduino.valueToCode(this, 'PIXEL', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var red = Blockly.Arduino.valueToCode(this, 'RED', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var green = Blockly.Arduino.valueToCode(this, 'GREEN', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var blue = Blockly.Arduino.valueToCode(this, 'BLUE', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['rgb_rj'+dropdown_pin] = 'WeRGBLED_RJ rj_rgb_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'rj_rgb_'+dropdown_pin[5]+'.setColor('+pixel+','+red+','+green+','+blue+');\n'+'rj_rgb_'+dropdown_pin[5]+'.show();\n';
  return code;
};

Blockly.Arduino.wm_elfmini_rgb_rj_1 = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var pixel = Blockly.Arduino.valueToCode(this, 'PIXEL', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var colour_rgb_led_color = this.getFieldValue('RGB_LED_COLOR');
  var color = goog.color.hexToRgb(colour_rgb_led_color);
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['rgb_rj'+dropdown_pin] = 'WeRGBLED_RJ rj_rgb_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'rj_rgb_'+dropdown_pin[5]+'.setColor('+pixel+','+color+');\n'+'rj_rgb_'+dropdown_pin[5]+'.show();\n';
  return code;
};

Blockly.Arduino.wm_elfmini_rgb_strip = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var pixel = Blockly.Arduino.valueToCode(this, 'PIXEL', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var red = Blockly.Arduino.valueToCode(this, 'RED', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var green = Blockly.Arduino.valueToCode(this, 'GREEN', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var blue = Blockly.Arduino.valueToCode(this, 'BLUE', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['rgb_strip'+dropdown_pin] = 'WeRGBLed rgb_strip_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'rgb_strip_'+dropdown_pin[5]+'.setColor('+pixel+','+red+','+green+','+blue+');\n'+'rgb_strip_'+dropdown_pin[5]+'.show();\n';
  return code;
};

Blockly.Arduino.wm_elfmini_rgb_strip_1 = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var pixel = Blockly.Arduino.valueToCode(this, 'PIXEL', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var colour_rgb_led_color = this.getFieldValue('RGB_LED_COLOR');
  var color = goog.color.hexToRgb(colour_rgb_led_color);
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['rgb_strip'+dropdown_pin] = 'WeRGBLed rgb_strip_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'rgb_strip_'+dropdown_pin[5]+'.setColor('+pixel+','+color+');\n'+'rgb_strip_'+dropdown_pin[5]+'.show();\n';
  return code;
};

//Button
Blockly.Arduino.wm_elfmini_button_on_board = function() {
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['button_on_board'] = 'WeButton button_OB(OnBoard_Button);'
  var code = 'button_OB.read()==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.wm_elfmini_button_rj = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_index = this.getFieldValue('INDEX');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['button4_rj'+dropdown_pin] = 'We4LEDButton button4_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'button4_'+dropdown_pin[5]+'.readKey()=='+dropdown_index
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.wm_elfmini_button_rj_set_led = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_index = this.getFieldValue('INDEX');
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['button4_rj'+dropdown_pin] = 'We4LEDButton button4_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'button4_'+dropdown_pin[5]+'.'+dropdown_stat+'('+dropdown_index+');\n';
  return code;
};

//Motor and Servo
Blockly.Arduino.wm_elfmini_dc_motors = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  speed	= speed > 255 ? 255 : speed;
  speed	= speed < -255 ? -255 : speed;
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['dc_motors'+dropdown_pin] = 'WeDCMotor dcmotor_'+dropdown_pin+'('+dropdown_pin+');';
  var code = 'dcmotor_'+dropdown_pin+'.run('+speed+');\n';
  return code;
};

Blockly.Arduino.wm_elfmini_servos = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  degree	= degree > 180 ? 180 : degree;
  degree	= degree < 0 ? 0 : degree;
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['wm_elfmini_servos'+dropdown_pin] = 'Servo servo_'+dropdown_pin[5]+';';
  Blockly.Arduino.setups_['wm_elfmini_servos_setup'+dropdown_pin] = 'servo_'+dropdown_pin[5]+'.attach('+dropdown_pin+');';
  var code = 'servo_'+dropdown_pin[5]+'.write('+degree+');\n';
  return code;
};

Blockly.Arduino.wm_elfmini_130_dc_motor = function() {
	var dropdown_pin = this.getFieldValue('PIN');
	var speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
	speed	= speed > 255 ? 255 : speed;
  speed	= speed < -255 ? -255 : speed;
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
	Blockly.Arduino.definitions_['wm_elfmini_130_dc_motor'+dropdown_pin] = 'We130DCMotor motor130_'+dropdown_pin[5]+'('+dropdown_pin+');';
	var code = 'motor130_'+dropdown_pin[5]+'.run('+speed+');\n';
	return code;
};

//RGB Ultrasonic Sensor
Blockly.Arduino.wm_elfmini_ultrasonic_distance = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['ultrasonic'+dropdown_pin] = 'WeUltrasonicSensor ultrasonic_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'ultrasonic_'+dropdown_pin[5]+'.distanceCm()'
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.wm_elfmini_ultrasonic_rgb = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var index = this.getFieldValue('INDEX');
  var colour_rgb_led_color = this.getFieldValue('RGB_LED_COLOR');
  var color = goog.color.hexToRgb(colour_rgb_led_color);
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['ultrasonic'+dropdown_pin] = 'WeUltrasonicSensor ultrasonic_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'ultrasonic_'+dropdown_pin[5]+'.setColor('+index+','+color+');\n';
  return code;
};

Blockly.Arduino.wm_elfmini_ultrasonic_rgb_1 = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var index = this.getFieldValue('INDEX');
  var red = Blockly.Arduino.valueToCode(this, 'RED', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var green = Blockly.Arduino.valueToCode(this, 'GREEN', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var blue = Blockly.Arduino.valueToCode(this, 'BLUE', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['ultrasonic'+dropdown_pin] = 'WeUltrasonicSensor ultrasonic_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'ultrasonic_'+dropdown_pin[5]+'.setColor('+index+','+red+','+green+','+blue+');\n';
  return code;
};

Blockly.Arduino.wm_elfmini_ultrasonic_led = function() {
	var dropdown_pin = this.getFieldValue('PIN');
	var index = this.getFieldValue('INDEX');
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['ultrasonic'+dropdown_pin] = 'WeUltrasonicSensor ultrasonic_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'ultrasonic_'+dropdown_pin[5]+'.setLed('+index+','+dropdown_stat+');\n';
  return code;
};

//IR Avoid Sensor
Blockly.Arduino.wm_elfmini_ir_avoid_isObstacle = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['ir_avoid'+dropdown_pin] = 'WeIRAvoidSensor ir_avoid_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'ir_avoid_'+dropdown_pin[5]+'.isObstacle()'
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.wm_elfmini_ir_avoid_rgb = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var index = this.getFieldValue('INDEX');
  var colour_rgb_led_color = this.getFieldValue('RGB_LED_COLOR');
  var color = goog.color.hexToRgb(colour_rgb_led_color);
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['ir_avoid'+dropdown_pin] = 'WeIRAvoidSensor ir_avoid_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'ir_avoid_'+dropdown_pin[5]+'.setColor('+index+','+color+');\n';
  return code;
};

Blockly.Arduino.wm_elfmini_ir_avoid_rgb_1 = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var index = this.getFieldValue('INDEX');
  var red = Blockly.Arduino.valueToCode(this, 'RED', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var green = Blockly.Arduino.valueToCode(this, 'GREEN', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var blue = Blockly.Arduino.valueToCode(this, 'BLUE', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['ir_avoid'+dropdown_pin] = 'WeIRAvoidSensor ir_avoid_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'ir_avoid_'+dropdown_pin[5]+'.setColor('+index+','+red+','+green+','+blue+');\n';
  return code;
};

Blockly.Arduino.wm_elfmini_ir_avoid_led = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var index = this.getFieldValue('INDEX');
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['ir_avoid'+dropdown_pin] = 'WeIRAvoidSensor ir_avoid_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'ir_avoid_'+dropdown_pin[5]+'.setLed('+index+','+dropdown_stat+');\n';
  return code;
};

//Line Follower Sensor
Blockly.Arduino.wm_elfmini_linefollower_sensor = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var index = this.getFieldValue('INDEX');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['linefollower'+dropdown_pin] = 'WeLineFollower linefollower_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'linefollower_'+dropdown_pin[5]+'.startRead('+index+')'
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.wm_elfmini_single_linefollower_sensor = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['single_linefollower'+dropdown_pin] = 'WeSingleLineFollower slf_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'slf_'+dropdown_pin[5]+'.read()'
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//LED Panel Matrix
Blockly.Arduino.wm_elfmini_led_matrix_set_brightness = function() {
  var dropdown_type = this.getFieldValue('TYPE');
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_bri = this.getFieldValue('BRIGHTNESS');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['led_matrix'+dropdown_pin] = 'WeLEDPanelModuleMatrix'+dropdown_type+' matrix_'+dropdown_type[0]+dropdown_type[2]+dropdown_type[3]+'_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'matrix_'+dropdown_type[0]+dropdown_type[2]+dropdown_type[3]+'_'+dropdown_pin[5]+'.setBrightness('+dropdown_bri+');\n';
  return code;
};

Blockly.Arduino.wm_elfmini_led_matrix_show_number = function() {
  var dropdown_type = this.getFieldValue('TYPE');
  var dropdown_pin = this.getFieldValue('PIN');
  var num = Blockly.Arduino.valueToCode(this, 'NUMBER', Blockly.Arduino.ORDER_ASSIGNMENT) || '100';
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['led_matrix'+dropdown_pin] = 'WeLEDPanelModuleMatrix'+dropdown_type+' matrix_'+dropdown_type[0]+dropdown_type[2]+dropdown_type[3]+'_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'matrix_'+dropdown_type[0]+dropdown_type[2]+dropdown_type[3]+'_'+dropdown_pin[5]+'.showNum('+num+');\n';
  return code;
};

Blockly.Arduino.wm_elfmini_led_matrix_show_clock = function() {
  var dropdown_type = this.getFieldValue('TYPE');
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_point = this.getFieldValue('POINT');
  var hour = Blockly.Arduino.valueToCode(this, 'HOUR', Blockly.Arduino.ORDER_ATOMIC) || '19';
  var min = Blockly.Arduino.valueToCode(this, 'MINUTE', Blockly.Arduino.ORDER_ATOMIC) || '19';
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['led_matrix'+dropdown_pin] = 'WeLEDPanelModuleMatrix'+dropdown_type+' matrix_'+dropdown_type[0]+dropdown_type[2]+dropdown_type[3]+'_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'matrix_'+dropdown_type[0]+dropdown_type[2]+dropdown_type[3]+'_'+dropdown_pin[5]+'.showClock('+hour+','+min+','+dropdown_point+');\n';
  return code;
};

Blockly.Arduino.wm_elfmini_led_matrix_show_string = function() {
  var dropdown_type = this.getFieldValue('TYPE');
  var dropdown_pin = this.getFieldValue('PIN');
  var x_axis = Blockly.Arduino.valueToCode(this, 'X_AXIS', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y_axis = Blockly.Arduino.valueToCode(this, 'Y_AXIS', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var text = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || '\"WMZX\"';
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['led_matrix'+dropdown_pin] = 'WeLEDPanelModuleMatrix'+dropdown_type+' matrix_'+dropdown_type[0]+dropdown_type[2]+dropdown_type[3]+'_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'matrix_'+dropdown_type[0]+dropdown_type[2]+dropdown_type[3]+'_'+dropdown_pin[5]+'.showChar('+x_axis+','+y_axis+','+text+');\n';
  return code;
};

Blockly.Arduino.wm_elfmini_led_matrix_show_bitmap = function() {
  var dropdown_type = this.getFieldValue('TYPE');
  var dropdown_pin = this.getFieldValue('PIN');
  var x_axis = Blockly.Arduino.valueToCode(this, 'X_AXIS', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y_axis = Blockly.Arduino.valueToCode(this, 'Y_AXIS', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var dotMatrixArray = Blockly.Arduino.valueToCode(this, 'Chars', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['led_matrix'+dropdown_pin] = 'WeLEDPanelModuleMatrix'+dropdown_type+' matrix_'+dropdown_type[0]+dropdown_type[2]+dropdown_type[3]+'_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'matrix_'+dropdown_type[0]+dropdown_type[2]+dropdown_type[3]+'_'+dropdown_pin[5]+'.showBitmap('+x_axis+','+y_axis+','+dotMatrixArray+');\n';
  return code;
};

Blockly.Arduino.wm_elfmini_led_matrix_bitmap_5x14 = function() {
  var varName = this.getFieldValue('VAR');
  var a = new Array();
  for (var i = 0; i < 5; i++) {
    a[i] = new Array();
    for (var j = 0; j < 14; j++) {
      a[i][j] = (this.getFieldValue('a' + i + j) == "TRUE") ? 1 : 0;
    }
  }
  var code = '{';
  for (var j = 0; j < 14; j++) {
    var tmp = ""
    for (var i = 4; i >=0 ; i--) {
      tmp += a[i][j];
    }
    tmp = (parseInt(tmp, 2)).toString(16)
    if (tmp.length == 1) tmp = "0" + tmp;
    code += '0x' + tmp + ((j != 13) ? ',' : '');
  }
  code += '};';
  //Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_["LED721"+varName] = "uint8_t "+varName+"[14]=" + code;

  return [varName, Blockly.Arduino.ORDER_ATOMIC];

};

Blockly.Arduino.wm_elfmini_led_matrix_bitmap_7x21 = function() {
  var varName = this.getFieldValue('VAR');
  var a = new Array();
  for (var i = 0; i < 7; i++) {
    a[i] = new Array();
    for (var j = 0; j < 21; j++) {
      a[i][j] = (this.getFieldValue('a' + i + j) == "TRUE") ? 1 : 0;
    }
  }
  var code = '{';
  for (var j = 0; j < 21; j++) {
    var tmp = ""
    for (var i = 6; i >=0 ; i--) {
      tmp += a[i][j];
    }
    tmp = (parseInt(tmp, 2)).toString(16)
    if (tmp.length == 1) tmp = "0" + tmp;
    code += '0x' + tmp + ((j != 20) ? ',' : '');
  }
  code += '};';
  Blockly.Arduino.definitions_["LED721"+varName] = "uint8_t " + varName + "[21]=" + code;

  return [varName, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.wm_elfmini_led_matrix_bitmap_default_514 = function() {
  var default_image = this.getFieldValue('DEFAULT_IMAGE');
  switch(default_image[10]){
    case '1':Blockly.Arduino.definitions_[default_image+'514'] = "uint8_t "+default_image + "[14]=" + "{0x00, 0x02, 0x01, 0x01, 0x02, 0x08, 0x18, 0x18, 0x08, 0x02, 0x01, 0x01, 0x02, 0x00};";break;
    case '2':Blockly.Arduino.definitions_[default_image+'514'] = "uint8_t "+default_image + "[14]=" + "{0x00, 0x0e, 0x0a, 0x0e, 0x00, 0x08, 0x10, 0x10, 0x08, 0x00, 0x0e, 0x0a, 0x0e, 0x00};";break;
    case '3':Blockly.Arduino.definitions_[default_image+'514'] = "uint8_t "+default_image + "[14]=" + "{0x11, 0x02, 0x04, 0x08, 0x10, 0x00, 0x00, 0x00, 0x00, 0x10, 0x08, 0x04, 0x02, 0x11};";break;
    case '4':Blockly.Arduino.definitions_[default_image+'514'] = "uint8_t "+default_image + "[14]=" + "{0x00, 0x02, 0x0e, 0x02, 0x00, 0x08, 0x04, 0x04, 0x08, 0x00, 0x02, 0x0e, 0x02, 0x00};";break;
    case '5':Blockly.Arduino.definitions_[default_image+'514'] = "uint8_t "+default_image + "[14]=" + "{0x00, 0x1f, 0x00, 0x1a, 0x15, 0x12, 0x00, 0x0a, 0x00, 0x1f, 0x00, 0x1a, 0x15, 0x12};";break;
    case '6':Blockly.Arduino.definitions_[default_image+'514'] = "uint8_t "+default_image + "[14]=" + "{0x00, 0x00, 0x00, 0x00, 0x1f, 0x04, 0x04, 0x1f, 0x00, 0x1d, 0x00, 0x00, 0x00, 0x00};";break;
    case '7':Blockly.Arduino.definitions_[default_image+'514'] = "uint8_t "+default_image + "[14]=" + "{0x00, 0x00, 0x00, 0x00, 0x09, 0x05, 0x03, 0x01, 0x1f, 0x11, 0x10, 0x00, 0x00, 0x00};";break;
    case '8':Blockly.Arduino.definitions_[default_image+'514'] = "uint8_t "+default_image + "[14]=" + "{0x00, 0x00, 0x00, 0x1f, 0x11, 0x1f, 0x00, 0x00, 0x1f, 0x04, 0x0a, 0x11, 0x00, 0x00};";break;
    case '9':Blockly.Arduino.definitions_[default_image+'514'] = "uint8_t "+default_image + "[14]=" + "{0x1f, 0x1f, 0x1f, 0x1f, 0x1f, 0x1f, 0x1f, 0x1f, 0x1f, 0x1f, 0x1f, 0x1f, 0x1f, 0x1f};";break;
  }
  return [default_image, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.wm_elfmini_led_matrix_bitmap_default_721 = function() {
  var default_image = this.getFieldValue('DEFAULT_IMAGE');
  switch(default_image[10]){
    case '1':Blockly.Arduino.definitions_[default_image+'721'] = "uint8_t "+default_image + "[21]=" + "{0x00, 0x00, 0x00, 0x00, 0x00, 0x04, 0x02, 0x02, 0x04, 0x10, 0x30, 0x30, 0x10, 0x04, 0x02, 0x02, 0x04, 0x00, 0x00, 0x00, 0x00};";break;
    case '2':Blockly.Arduino.definitions_[default_image+'721'] = "uint8_t "+default_image + "[21]=" + "{0x00, 0x00, 0x00, 0x00, 0x00, 0x1c, 0x14, 0x1c, 0x00, 0x10, 0x20, 0x20, 0x10, 0x00, 0x1c, 0x14, 0x1c, 0x00, 0x00, 0x00, 0x00};";break;
    case '3':Blockly.Arduino.definitions_[default_image+'721'] = "uint8_t "+default_image + "[21]=" + "{0x00, 0x00, 0x00, 0x00, 0x22, 0x04, 0x08, 0x10, 0x20, 0x00, 0x00, 0x00, 0x00, 0x20, 0x10, 0x08, 0x04, 0x22, 0x00, 0x00, 0x00};";break;
    case '4':Blockly.Arduino.definitions_[default_image+'721'] = "uint8_t "+default_image + "[21]=" + "{0x00, 0x00, 0x00, 0x00, 0x00, 0x04, 0x1c, 0x04, 0x00, 0x10, 0x08, 0x08, 0x10, 0x00, 0x04, 0x1c, 0x04, 0x00, 0x00, 0x00, 0x00};";break;
    case '5':Blockly.Arduino.definitions_[default_image+'721'] = "uint8_t "+default_image + "[21]=" + "{0x00, 0x00, 0x00, 0x00, 0x3e, 0x00, 0x34, 0x2a, 0x24, 0x00, 0x14, 0x00, 0x3e, 0x00, 0x34, 0x2a, 0x24, 0x00, 0x00, 0x00, 0x00};";break;
    case '6':Blockly.Arduino.definitions_[default_image+'721'] = "uint8_t "+default_image + "[21]=" + "{0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x3e, 0x08, 0x08, 0x3e, 0x00, 0x3a, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};";break;
    case '7':Blockly.Arduino.definitions_[default_image+'721'] = "uint8_t "+default_image + "[21]=" + "{0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x12, 0x0a, 0x06, 0x02, 0x3e, 0x22, 0x20, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};";break;
    case '8':Blockly.Arduino.definitions_[default_image+'721'] = "uint8_t "+default_image + "[21]=" + "{0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x3e, 0x22, 0x3e, 0x00, 0x00, 0x3e, 0x08, 0x14, 0x22, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};";break;
    case '9':Blockly.Arduino.definitions_[default_image+'721'] = "uint8_t "+default_image + "[21]=" + "{0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f};";break;
  }
  return [default_image, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.wm_elfmini_led_matrix_show_pixel = function() {
  var dropdown_type = this.getFieldValue('TYPE');
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_stat = this.getFieldValue('STAT');
  var x_axis = Blockly.Arduino.valueToCode(this, 'X_AXIS', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y_axis = Blockly.Arduino.valueToCode(this, 'Y_AXIS', Blockly.Arduino.ORDER_ATOMIC) || '0';
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['led_matrix'+dropdown_pin] = 'WeLEDPanelModuleMatrix'+dropdown_type+' matrix_'+dropdown_type[0]+dropdown_type[2]+dropdown_type[3]+'_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'matrix_'+dropdown_type[0]+dropdown_type[2]+dropdown_type[3]+'_'+dropdown_pin[5]+'.'+dropdown_stat+'('+x_axis+','+y_axis+');\n';
  return code;
};

Blockly.Arduino.wm_elfmini_led_matrix_clear = function() {
  var dropdown_type = this.getFieldValue('TYPE');
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['led_matrix'+dropdown_pin] = 'WeLEDPanelModuleMatrix'+dropdown_type+' matrix_'+dropdown_type[0]+dropdown_type[2]+dropdown_type[3]+'_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'matrix_'+dropdown_type[0]+dropdown_type[2]+dropdown_type[3]+'_'+dropdown_pin[5]+'.clearScreen();\n';
  return code;
};

////4-Digtal LED Module
Blockly.Arduino.wm_elfmini_seven_segment_display_show_number = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var num = Blockly.Arduino.valueToCode(this, 'NUMBER', Blockly.Arduino.ORDER_ASSIGNMENT) || '100';
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['led_matrix'+dropdown_pin] = 'We7SegmentDisplay digital_tube_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'digital_tube_'+dropdown_pin[5]+'.showNumber('+num+');\n';
  return code;
};

//OLED
Blockly.Arduino.wm_elfmini_oled_display_set_char_size = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var char_size = this.getFieldValue('CHAR_SIZE');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['oled'+dropdown_pin] = 'WeOLED oled_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'oled_'+dropdown_pin[5]+'.setSize('+char_size+');\n';
  return code;
};

Blockly.Arduino.wm_elfmini_oled_display_show_string = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var x_axis = Blockly.Arduino.valueToCode(this, 'X_AXIS', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y_axis = Blockly.Arduino.valueToCode(this, 'Y_AXIS', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var text = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || '\"Weeemake Co., Ltd.\"';
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['oled'+dropdown_pin] = 'WeOLED oled_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'oled_'+dropdown_pin[5]+'.showString('+x_axis+','+y_axis+','+text+');\n';
  return code;
};

Blockly.Arduino.wm_elfmini_oled_display_show_number = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var x_axis = Blockly.Arduino.valueToCode(this, 'X_AXIS', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y_axis = Blockly.Arduino.valueToCode(this, 'Y_AXIS', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var num = Blockly.Arduino.valueToCode(this, 'NUMBER', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['oled'+dropdown_pin] = 'WeOLED oled_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'oled_'+dropdown_pin[5]+'.showNum('+x_axis+','+y_axis+','+num+');\n';
  return code;
};

Blockly.Arduino.wm_elfmini_oled_display_clear = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['oled'+dropdown_pin] = 'WeOLED oled_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'oled_'+dropdown_pin[5]+'.clearScreen();\n';
  return code;
};

//MP3 Module
Blockly.Arduino.wm_elfmini_mp3_module_set_device = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var index = this.getFieldValue('INDEX');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['mp3'+dropdown_pin] = 'WeMP3 mp3_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'mp3_'+dropdown_pin[5]+'.appointDevice('+index+');\n';
  return code;
};

Blockly.Arduino.wm_elfmini_mp3_module_set_volume = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var volume = Blockly.Arduino.valueToCode(this, 'VOLUME', Blockly.Arduino.ORDER_ASSIGNMENT) || '20';
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['mp3'+dropdown_pin] = 'WeMP3 mp3_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'mp3_'+dropdown_pin[5]+'.appointVolume('+volume+');\n';
  return code;
};

Blockly.Arduino.wm_elfmini_mp3_module_set_music = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var num = Blockly.Arduino.valueToCode(this, 'NUMBER', Blockly.Arduino.ORDER_ASSIGNMENT) || '1';
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['mp3'+dropdown_pin] = 'WeMP3 mp3_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'mp3_'+dropdown_pin[5]+'.appointMusic('+num+');\n';
  return code;
};

Blockly.Arduino.wm_elfmini_mp3_module_play = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['mp3'+dropdown_pin] = 'WeMP3 mp3_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'mp3_'+dropdown_pin[5]+'.play();\n';
  return code;
};

Blockly.Arduino.wm_elfmini_mp3_module_pause = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['mp3'+dropdown_pin] = 'WeMP3 mp3_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'mp3_'+dropdown_pin[5]+'.pause();\n';
  return code;
};

Blockly.Arduino.wm_elfmini_mp3_module_prev = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['mp3'+dropdown_pin] = 'WeMP3 mp3_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'mp3_'+dropdown_pin[5]+'.prevMusic();\n';
  return code;
};

Blockly.Arduino.wm_elfmini_mp3_module_next = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['mp3'+dropdown_pin] = 'WeMP3 mp3_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'mp3_'+dropdown_pin[5]+'.nextMusic();\n';
  return code;
};

Blockly.Arduino.wm_elfmini_mp3_module_music_is_over = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['mp3'+dropdown_pin] = 'WeMP3 mp3_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'mp3_'+dropdown_pin[5]+'.isOver()';
  return code;
};

//Relay Module
Blockly.Arduino.wm_elfmini_relay_module_set = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['relay'+dropdown_pin] = 'WeRelay relay_'+dropdown_pin[5]+'('+dropdown_pin+')'+';';
  var code = 'relay_'+dropdown_pin[5]+dropdown_stat+'\n';
  return code;
};

//Water Atomizer Module
Blockly.Arduino.wm_elfmini_water_atomizer_set = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['water_atomizer'+dropdown_pin] = 'WeWaterAtomizer water_atomizer_'+dropdown_pin[5]+'('+dropdown_pin+')'+';';
  var code = 'water_atomizer_'+dropdown_pin[5]+dropdown_stat+'\n';
  return code;
};

////Potentiometer Module
Blockly.Arduino.wm_elfmini_potentiometer_get_value = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['potentiometer'+dropdown_pin] = 'WePotentiometer potentiometer_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'potentiometer_'+dropdown_pin[5]+'.readAnalog()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.wm_elfmini_sliding_potentiometer_get_value = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['potentiometer'+dropdown_pin] = 'WeSlidingPotentiometer potentiometer_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'potentiometer_'+dropdown_pin[5]+'.readAnalog()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Joystick Module 
Blockly.Arduino.wm_elfmini_joystick_module_get_value = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_index = this.getFieldValue('INDEX');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['joystick_module'+dropdown_pin] = 'WeJoystick joystick_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'joystick_'+dropdown_pin[5]+'.readValue('+dropdown_index+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Touch Sensor
Blockly.Arduino.wm_elfmini_touch_sensor_set_mode = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_mode = this.getFieldValue('MODE');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['single_touch'+dropdown_pin] = 'WeTouchSensor single_touch_'+dropdown_pin[5]+'('+dropdown_pin+')'+';';
  var code = 'single_touch_'+dropdown_pin[5]+'.setMode('+dropdown_mode+');\n';
  return code;
};

Blockly.Arduino.wm_elfmini_touch_sensor_get_value = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['single_touch'+dropdown_pin] = 'WeTouchSensor single_touch_'+dropdown_pin[5]+'('+dropdown_pin+')'+';';
  var code = 'single_touch_'+dropdown_pin[5]+'.touched()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.wm_elfmini_funny_touch_sensor_get_value = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['single_touch'+dropdown_pin] = 'WeFunnyTouchSensor funny_touch_'+dropdown_pin[5]+'('+dropdown_pin+')'+';';
  var code = 'funny_touch_'+dropdown_pin[5]+'.readValue()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//WeHumiture Sensor
Blockly.Arduino.wm_elfmini_humiture_get_value = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_index = this.getFieldValue('INDEX');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['humiture'+dropdown_pin] = 'WeHumiture humiture_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'humiture_'+dropdown_pin[5]+dropdown_index;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Temperature Sensor
Blockly.Arduino.wm_elfmini_ds18b20_get_value = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['ds18b20'+dropdown_pin] = 'WeTemperature temperature_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'temperature_'+dropdown_pin[5]+".temperature()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Tilt Switch Sensor
Blockly.Arduino.wm_elfmini_tilt_switch_sensor_get_value = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['tilt_switch'+dropdown_pin] = 'WeTiltSwitch tilt_switch_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'tilt_switch_'+dropdown_pin[5]+".readSensor()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Flame Sensor
Blockly.Arduino.wm_elfmini_flame_sensor_get_value = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_index = this.getFieldValue('INDEX');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['flame_sensor'+dropdown_pin] = 'WeFlameSensor flame_sensor_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'flame_sensor_'+dropdown_pin[5]+'.readValue('+dropdown_index+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Gas Sensor
Blockly.Arduino.wm_elfmini_gas_sensor_get_value = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['gas_sensor'+dropdown_pin] = 'WeGasSensor gas_sensor_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'gas_sensor_'+dropdown_pin[5]+".readAnalog()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//PIR Sensor
Blockly.Arduino.wm_elfmini_pir_sensor_get_value = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['pir_sensor'+dropdown_pin] = 'WePIRSensor pir_sensor_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'pir_sensor_'+dropdown_pin[5]+".readSensor()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


//Color Sensor
Blockly.Arduino.wm_elfmini_color_sensor_set = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['color_sensor'+dropdown_pin] = 'WeColorSensor color_sensor_'+dropdown_pin[5]+'('+dropdown_pin+')'+';';
  var code = 'color_sensor_'+dropdown_pin[5]+'.setLight('+dropdown_stat+');\n';
  return code;
};

Blockly.Arduino.wm_elfmini_color_sensor_wb = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['color_sensor'+dropdown_pin] = 'WeColorSensor color_sensor_'+dropdown_pin[5]+'('+dropdown_pin+')'+';';
  var code = 'color_sensor_'+dropdown_pin[5]+'.whitebalance();\n';
  return code;
};

Blockly.Arduino.wm_elfmini_color_sensor_get_value = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_index = this.getFieldValue('INDEX');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['color_sensor'+dropdown_pin] = 'WeColorSensor color_sensor_'+dropdown_pin[5]+'('+dropdown_pin+')'+';';
  var code = 'color_sensor_'+dropdown_pin[5]+'.readValue('+dropdown_index+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Gyro Sensor
Blockly.Arduino.wm_elfmini_gyro_sensor_get_gyration = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_index = this.getFieldValue('INDEX');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['gyro_sensor'+dropdown_pin] = 'WeGyroSensor gyro_sensor_'+dropdown_pin[5]+'('+dropdown_pin+')'+';';
  var code = 'gyro_sensor_'+dropdown_pin[5]+'.getGyration('+dropdown_index+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.wm_elfmini_gyro_sensor_get_aacceleration = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_index = this.getFieldValue('INDEX');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['gyro_sensor'+dropdown_pin] = 'WeGyroSensor gyro_sensor_'+dropdown_pin[5]+'('+dropdown_pin+')'+';';
  var code = 'gyro_sensor_'+dropdown_pin[5]+'.getAcceleration('+dropdown_index+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Compass Sensor
Blockly.Arduino.wm_elfmini_compass_sensor_get_value = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_index = this.getFieldValue('INDEX');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['compass_sensor'+dropdown_pin] = 'WeCompassSensor compass_'+dropdown_pin[5]+'('+dropdown_pin+')'+';';
  var code = 'compass_'+dropdown_pin[5]+'.readValue('+dropdown_index+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//PM2.5 Sensor
Blockly.Arduino.wm_elfmini_pm25_sensor_set_mode = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_stat = this.getFieldValue('MODE');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['pm25_sensor'+dropdown_pin] = 'WePM25Sensor pm25_sensor_'+dropdown_pin[5]+'('+dropdown_pin+')'+';';
  var code = 'pm25_sensor_'+dropdown_pin[5]+'.setFanLaser('+dropdown_stat+');\n';
  return code;
};

Blockly.Arduino.wm_elfmini_pm25_sensor_get_value = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_index = this.getFieldValue('INDEX');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['pm25_sensor'+dropdown_pin] = 'WePM25Sensor pm25_sensor_'+dropdown_pin[5]+'('+dropdown_pin+')'+';';
  var code = 'pm25_sensor_'+dropdown_pin[5]+dropdown_index;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.wm_elfmini_pm25_sensor_get_value_1 = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_index = this.getFieldValue('INDEX');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['pm25_sensor'+dropdown_pin] = 'WePM25Sensor pm25_sensor_'+dropdown_pin[5]+'('+dropdown_pin+')'+';';
  var code = 'pm25_sensor_'+dropdown_pin[5]+dropdown_index;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Water Sensor
Blockly.Arduino.wm_elfmini_water_sensor_get_value = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['water_sensor'+dropdown_pin] = 'WeWaterSensor water_sensor_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'water_sensor_'+dropdown_pin[5]+".readAnalog()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Barometer Sensor
Blockly.Arduino.wm_elfmini_barometer_sensor_get_value = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['barometer_sensor'+dropdown_pin] = 'WeBarometerSensor barometer_sensor_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'barometer_sensor_'+dropdown_pin[5]+".readPressure()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//UV Sensor
Blockly.Arduino.wm_elfmini_uv_sensor_get_value = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_index = this.getFieldValue('INDEX');
  Blockly.Arduino.definitions_['wm_elfmini_head'] = '#include <WeELFMini.h>';
  Blockly.Arduino.definitions_['uv_sensor'+dropdown_pin] = 'WeUVSensor uv_sensor_'+dropdown_pin[5]+'('+dropdown_pin+');';
  var code = 'uv_sensor_'+dropdown_pin[5]+dropdown_index;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};