'use strict';

goog.provide('Blockly.Blocks.weeemake');

goog.require('Blockly.Blocks');

Blockly.Blocks.weeemake.HUE = 120;
var WM_EXECUTION = "#E94C4A";
var WM_DISPLAY = "#EB5B18";
var WM_SENSOR = "#25B7DB";
var WM_CONTROL = "#B9D01E";
var WM_COMMUNICATION = "#46A5D3";


var WEEEMAKE_MAIN_CONTROL_BOARD=[["ELF_MEGA-328P", "1"],["ELF_MEGA-2560", "2"],["ELF_MINI", "3"]];
var WEEEMAKE_PORTS =[["PORT_A", "PORT_A"],["PORT_B", "PORT_B"],["PORT_C", "PORT_C"],["PORT_D", "PORT_D"]];
var WEEEMAKE_MOTORS=[["M1", "M1"],["M2", "M2"]];
var WEEEMAKE_SLOTS=[["SLOT1", "1"],["SLOT2", "2"]];
var WEEEMAKE_UNIT=[["cm", "Cm"],["inch", "Inch"]];
var WEEEMAKE_ISON=[["On", "On"],["Off", "Off"]];


//Single LED Module
Blockly.Blocks.wm_elfmini_single_led = {
  init: function() {
    this.setColour(WM_DISPLAY);
    this.appendDummyInput("")
        .appendField("单色LED灯模块")
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
		.appendField(Blockly.WEEEMAKE_SINGLE_LED_SET)
        .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_ON, "openLED"], [Blockly.MIXLY_OFF, "closeLED"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.WEEEMAKE_SINGLE_LED_TOOLTIP);
  }
};

var WEEEMAKE_MINI_LED=[["左侧红灯", "MINI_LEFT_RED"], ["左侧黄灯", "MINI_LEFT_YELLOW"],["右侧红灯", "MINI_RIGHT_RED"],["右侧黄灯", "MINI_RIGHT_YELLOW"]];
Blockly.Blocks.wm_elfmini_led_on_board = {
  init: function() {
    this.setColour(WM_DISPLAY);
    this.appendDummyInput("")
        .appendField("ELF MINI主控板的")
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_MINI_LED), "PIN")
        .appendField(Blockly.WEEEMAKE_SINGLE_LED_SET)
        .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_ON, "openLED"], [Blockly.MIXLY_OFF, "closeLED"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

//Buzzer Module
var WEEEMAKE_TONE =[["C2", "65"],["D2", "73"],["E2", "82"],["F2", "87"],["G2", "98"],["A2", "110"],["B2", "123"],
                    ["C3", "131"],["D3", "147"],["E3", "165"],["F3", "175"],["G3", "196"],["A3", "220"],["B3", "247"],
                    ["C4", "262"],["D4", "294"],["E4", "330"],["F4", "349"],["G4", "392"],["A4", "440"],["B4", "494"],
                    ["C5", "523"],["D5", "587"],["E5", "659"],["F5", "698"],["G5", "784"],["A5", "880"],["B5", "988"],
                    ["C6", "1047"],["D6", "1175"],["E6", "1319"],["F6", "1397"],["G6", "1568"],["A6", "1760"],["B6", "1976"],
                    ["C7", "2093"],["D7", "2349"],["E7", "2637"],["F7", "2794"],["G7", "3136"],["A7", "3520"],["B7", "3951"],
                    ["C8", "4186"],["D8", "4699"]];
var WEEEMAKE_BEAT =[["二分之一","500"],["四分之一","250"],["八分之一","125"],["整拍","1000"],["双拍","2000"]]; 

Blockly.Blocks.wm_elfmini_buzzer_play_beat = {
  init: function() {
    this.setColour(WM_EXECUTION);
    this.appendDummyInput("")
        .appendField("蜂鸣器播放音调为")
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_TONE), "TONE")
        .appendField("节拍为")
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_BEAT), "BEAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.WEEEMAKE_SINGLE_LED_TOOLTIP);
  }
};

Blockly.Blocks.wm_elfmini_buzzer_play_pitch = {
  init: function() {
    this.setColour(WM_EXECUTION);
    this.appendDummyInput("")
        .appendField("蜂鸣器以频率");
    this.appendValueInput('FREQUENCY',Number)
        .setCheck(Number)
        .appendField("(Hz)");
    this.appendValueInput('DURATION',Number)
        .appendField("播放")
        .setCheck(Number)
        .appendField("(ms)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.WEEEMAKE_SINGLE_LED_TOOLTIP);
  }
};

//Sound Sensor
Blockly.Blocks.wm_elfmini_sound_sensor = {
  init: function() {
    this.setColour(WM_SENSOR);
    this.appendDummyInput("")
        .appendField('板载声音传感器读值');
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
}

//Light Sensor
Blockly.Blocks.wm_elfmini_light_sensor = {
  init: function() {
    this.setColour(WM_SENSOR);
    this.appendDummyInput("")
        .appendField('板载光线传感器读值');
    this.setOutput(true, Number);
    this.setTooltip('');
  }
}

//RGB LED
Blockly.Blocks.wm_elfmini_rgb_rj = {
  init: function() {
    this.setColour(WM_DISPLAY);
    this.appendDummyInput("")
        .appendField('RGBLED-5模块')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN");
    this.appendValueInput("PIXEL", Number)
        .setCheck(Number)
        .appendField('灯号(0为全部)');
    this.appendValueInput("RED", Number)
        .setCheck(Number)
        .appendField("显示红色");
    this.appendValueInput("GREEN", Number)
        .setCheck(Number)
        .appendField('绿色');
    this.appendValueInput("BLUE", Number)
        .setCheck(Number)
        .appendField('蓝色');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
}

Blockly.Blocks.wm_elfmini_rgb_rj_1 = {
    init: function () {
        this.setColour(WM_DISPLAY);
        this.appendDummyInput("")
            .appendField('RGBLED-5模块')
            .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN");
        this.appendValueInput("PIXEL", Number)
            .setCheck(Number)
            .appendField('灯号(0为全部)');
        this.appendDummyInput("")
            .appendField('显示')
            .appendField(new Blockly.FieldColour("#000000"), "RGB_LED_COLOR");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

Blockly.Blocks.wm_elfmini_rgb_strip = {
  init: function() {
    this.setColour(WM_DISPLAY);
    this.appendDummyInput("")
        .appendField('RGB灯带')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN");
    this.appendValueInput("PIXEL", Number)
        .setCheck(Number)
        .appendField('灯号(0为全部)');
    this.appendValueInput("RED", Number)
        .setCheck(Number)
        .appendField("显示红色");
    this.appendValueInput("GREEN", Number)
        .setCheck(Number)
        .appendField('绿色');
    this.appendValueInput("BLUE", Number)
        .setCheck(Number)
        .appendField('蓝色');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
}

Blockly.Blocks.wm_elfmini_rgb_strip_1 = {
    init: function () {
        this.setColour(WM_DISPLAY);
        this.appendDummyInput("")
            .appendField('RGB灯带')
            .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN");
        this.appendValueInput("PIXEL", Number)
            .setCheck(Number)
            .appendField('灯号(0为全部)');
        this.appendDummyInput("")
            .appendField('显示') 
            .appendField(new Blockly.FieldColour("#000000"), "RGB_LED_COLOR");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

//InfraredReceiver
var WEEEMAKE_IR_PORTS =[["PORT_1", "PORT_1"],["PORT_2", "PORT_2"],["PORT_3", "PORT_3"],["PORT_4", "PORT_4"],["PORT_5", "PORT_5"],["PORT_6", "PORT_6"]];
var WEEEMAKE_KEY_TABLE =[["A", "IR_CONTROLLER_A"],["B", "IR_CONTROLLER_B"],["C", "IR_CONTROLLER_C"],["D", "IR_CONTROLLER_D"],["E", "IR_CONTROLLER_E"],["F", "IR_CONTROLLER_F"],["OK", "IR_CONTROLLER_OK"],
                         ["UP", "IR_CONTROLLER_UP"],["DOWN", "IR_CONTROLLER_DOWN"],["LEFT", "IR_CONTROLLER_LEFT"],["RIGHT", "IR_CONTROLLER_RIGHT"],
                         ["0", "IR_CONTROLLER_0"],["1", "IR_CONTROLLER_1"],["2", "IR_CONTROLLER_2"],["3", "IR_CONTROLLER_3"],["4", "IR_CONTROLLER_4"],["5", "IR_CONTROLLER_5"],["6", "IR_CONTROLLER_6"],
                         ["7", "IR_CONTROLLER_7"],["8", "IR_CONTROLLER_8"],["9", "IR_CONTROLLER_9"]];


Blockly.Blocks.wm_elfmini_ir_loop = {
  init: function() {
    this.setColour(WM_COMMUNICATION);
    this.appendDummyInput("")
        .appendField('ELF MINI板载红外接收模块对红外遥控按键扫描');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
}

Blockly.Blocks.wm_elfmini_ir = {
  init: function() {
    this.setColour(WM_COMMUNICATION);
    this.appendDummyInput("")
        .appendField('ELF MINI板载红外接收到')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_KEY_TABLE), "KEY_TABLE")
        .appendField('被按下？');
    this.setOutput(true, Boolean);
    this.setTooltip('');
  }
}

//Button
Blockly.Blocks.wm_elfmini_button_on_board = {
  init: function() {
    this.setColour(WM_CONTROL);
    this.appendDummyInput("")
        .appendField('板载按钮是否被按下？')
    this.setOutput(true, Boolean);
    this.setTooltip('');
  }
}

var WEEEMAKE_4BUTTON_INDEX=[['K1','1'],['K2','2'],['K3','3'],['K4','4']];
Blockly.Blocks.wm_elfmini_button_rj = {
  init: function() {
    this.setColour(WM_CONTROL);
    this.appendDummyInput("")
        .appendField("4位LED按键模块")
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField("按键")
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_4BUTTON_INDEX), "INDEX");
    this.appendDummyInput("")    
        .appendField("被按下？") 
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
}

Blockly.Blocks.wm_elfmini_button_rj_set_led = {
  init: function() {
    this.setColour(WM_CONTROL);
    this.appendDummyInput("")
        .appendField("4位LED按键模块")
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField("按键")
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_4BUTTON_INDEX), "INDEX")
        .appendField("LED灯") 
        .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_ON, "openLED"], [Blockly.MIXLY_OFF, "closeLED"]]), "STAT");  
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
}

//Motor and Servo
Blockly.Blocks.wm_elfmini_dc_motors = {
  init: function() {
    this.setColour(WM_EXECUTION);
    this.appendDummyInput("")
        .appendField("直流电机接")
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_MOTORS), "PIN");
    this.appendValueInput("SPEED")
        .appendField("设置转速为")
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks.wm_elfmini_servos = {
  init: function() {
    this.setColour(WM_EXECUTION);
    this.appendDummyInput("")
        .appendField("舵机接")
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN");
    this.appendValueInput("DEGREE")
        .appendField("设置角度为")
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks.wm_elfmini_130_dc_motor = {
  init: function() {
    this.setColour(WM_EXECUTION);
    this.appendDummyInput("")
        .appendField("130直流电机接")
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN");
    this.appendValueInput("SPEED")
        .setCheck(Number)
        .appendField("设置转速为");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks.wm_elfmini_encoder_motor_move = {
  init: function() {
    this.setColour(WM_EXECUTION);
    this.appendDummyInput("")
        .appendField("编码电机接")
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_ENCODER_MOTOR_PORTS), "PIN"); 
    this.appendValueInput("SPEED")
        .appendField("以速度")
        .setCheck(Number);
    this.appendValueInput("POSITION")
        .appendField("移动到")
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

//RGB Ultrasonic Sensor
Blockly.Blocks.wm_elfmini_ultrasonic_distance = {
  init: function() {
    this.setColour(WM_SENSOR);
    this.appendDummyInput("")
        .appendField('RGB超声波接')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField('读取距离值(CM)');
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
    this.setHelpUrl('https://www.weeemake.com.cn/wiki/doku.php?id=wm_wiki:rgb_ultrasonic_sensor:rgb_ultrasonic_sensor');
  }
}

var WEEEMAKE_ULTRASONIC_RGB=[["全部","3"],["左边","2"],["右边","1"]];
Blockly.Blocks.wm_elfmini_ultrasonic_rgb = {
  init: function() {
    this.setColour(WM_SENSOR);
    this.appendDummyInput("")
        .appendField('RGB超声波接')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_ULTRASONIC_RGB), "INDEX")
        .appendField('RGB灯显示')
        .appendField(new Blockly.FieldColour("#000000"), "RGB_LED_COLOR");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('https://www.weeemake.com.cn/wiki/doku.php?id=wm_wiki:rgb_ultrasonic_sensor:rgb_ultrasonic_sensor');
  }
}

Blockly.Blocks.wm_elfmini_ultrasonic_rgb_1 = {
  init: function() {
    this.setColour(WM_SENSOR);
    this.appendDummyInput("")
        .appendField('RGB超声波接')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_ULTRASONIC_RGB), "INDEX")
        .appendField('RGB灯');
    this.appendValueInput("RED", Number)
        .setCheck(Number)
        .appendField("显示红色");
    this.appendValueInput("GREEN", Number)
        .setCheck(Number)
        .appendField('绿色');
    this.appendValueInput("BLUE", Number)
        .setCheck(Number)
        .appendField('蓝色');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('https://www.weeemake.com.cn/wiki/doku.php?id=wm_wiki:rgb_ultrasonic_sensor:rgb_ultrasonic_sensor');
  }
}

Blockly.Blocks.wm_elfmini_ultrasonic_led = {
  init: function() {
    this.setColour(WM_SENSOR);
    this.appendDummyInput("")
        .appendField('RGB超声波接')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_ULTRASONIC_RGB), "INDEX")
        .appendField('黄色LED灯')
        .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_ON, "1"], [Blockly.MIXLY_OFF, "0"]]), "STAT");
    this.appendDummyInput("")
        .appendField('(此程序块仅适用于Mini RGB超声波传感器)');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('https://www.weeemake.com.cn/wiki/doku.php?id=wm_wiki:rgb_ultrasonic_sensor:rgb_ultrasonic_sensor');
  }
}

//IR Avoid Sensor
Blockly.Blocks.wm_elfmini_ir_avoid_isObstacle = {
  init: function() {
    this.setColour(WM_SENSOR);
    this.appendDummyInput("")
        .appendField('红外避障传感器')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField('检测到障碍?');
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
}

var WEEEMAKE_ULTRASONIC_RGB=[["全部","3"],["左边","2"],["右边","1"]];
Blockly.Blocks.wm_elfmini_ir_avoid_rgb = {
  init: function() {
    this.setColour(WM_SENSOR);
    this.appendDummyInput("")
        .appendField('红外避障传感器')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_ULTRASONIC_RGB), "INDEX")
        .appendField('RGB灯显示')
        .appendField(new Blockly.FieldColour("#000000"), "RGB_LED_COLOR");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
}

Blockly.Blocks.wm_elfmini_ir_avoid_rgb_1 = {
  init: function() {
    this.setColour(WM_SENSOR);
    this.appendDummyInput("")
        .appendField('红外避障传感器')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_ULTRASONIC_RGB), "INDEX")
        .appendField('RGB灯');
    this.appendValueInput("RED", Number)
        .setCheck(Number)
        .appendField("显示红色");
    this.appendValueInput("GREEN", Number)
        .setCheck(Number)
        .appendField('绿色');
    this.appendValueInput("BLUE", Number)
        .setCheck(Number)
        .appendField('蓝色');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
}

Blockly.Blocks.wm_elfmini_ir_avoid_led = {
  init: function() {
    this.setColour(WM_SENSOR);
    this.appendDummyInput("")
        .appendField('红外避障传感器')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_ULTRASONIC_RGB), "INDEX")
        .appendField('黄色LED灯')
        .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_ON, "1"], [Blockly.MIXLY_OFF, "0"]]), "STAT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
}

//Line Follower Sensor
var WEEEMAKE_LINE_FOLLOWER_SENSOR=[["S1","1"],["S2","2"]];
Blockly.Blocks.wm_elfmini_linefollower_sensor = {
  init: function() {
    this.setColour(WM_SENSOR);
    this.appendDummyInput("")
        .appendField('双路巡线传感器接')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField('读取')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_LINE_FOLLOWER_SENSOR), "INDEX")
        .appendField('的值');
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
}

Blockly.Blocks.wm_elfmini_single_linefollower_sensor = {
  init: function() {
    this.setColour(WM_SENSOR);
    this.appendDummyInput("")
        .appendField('单路巡线传感器接')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField('读取值');
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
}

// Blockly.Blocks.wm_elfmini_led_linefollower_sensor = {
//   init: function() {
//     this.setColour(WM_SENSOR);
//     this.appendDummyInput("")
//         .appendField('单路LED巡线传感器接')
//         .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
//         .appendField('读取值');
//     this.setInputsInline(true);
//     this.setOutput(true, Number);
//     this.setTooltip('');
//   }
// }

//LED Panel Matrix
var WEEEMAKE_LED_MATRIX_TYPE=[["7*21","7_21"],["5*14","5_14"]];
var WEEEMAKE_LED_MATRIX_7_21=[["7*21","7_21"]];
var WEEEMAKE_LED_MATRIX_5_14=[["5*14","5_14"]];
var WEEEMAKE_LED_MATRIX_POINT=[[":","1"],[" ","0"]];
Blockly.Blocks.wm_elfmini_led_matrix_show_number = {
  init: function() {
    this.setColour(WM_DISPLAY);
    this.appendDummyInput("")
        .appendField('LED点阵屏')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_LED_MATRIX_TYPE), "TYPE")
        .appendField('接')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN");
    this.appendValueInput("NUMBER",Number)
        .appendField('显示数字')
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
}

Blockly.Blocks.wm_elfmini_led_matrix_show_clock = {
  init: function() {
    this.setColour(WM_DISPLAY);
    this.appendDummyInput("")
        .appendField('LED点阵屏')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_LED_MATRIX_7_21), "TYPE")
        .appendField('接')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN");
    this.appendValueInput("HOUR",Number)
        .appendField('显示时间')
        .setCheck(Number);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_LED_MATRIX_POINT), "POINT");
    this.appendValueInput("MINUTE",Number)
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
}

Blockly.Blocks.wm_elfmini_led_matrix_show_string = {
  init: function() {
    this.setColour(WM_DISPLAY);
    this.appendDummyInput("")
        .appendField('LED点阵屏')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_LED_MATRIX_TYPE), "TYPE")
        .appendField('接')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN");
    this.appendValueInput("X_AXIS")
        .appendField('从X:')
        .setCheck(Number);
    this.appendValueInput("Y_AXIS")
        .appendField('Y:')
        .setCheck(Number);
    this.appendValueInput("TEXT",String)
        .setCheck([String,Number])
        .appendField("开始显示字符");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
}

Blockly.Blocks.wm_elfmini_led_matrix_show_bitmap = {
  init: function() {
    this.setColour(WM_DISPLAY);
    this.appendDummyInput("")
        .appendField('LED点阵屏')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_LED_MATRIX_TYPE), "TYPE")
        .appendField('接')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN");
    this.appendValueInput("X_AXIS",Number)
        .appendField('从X:')
        .setCheck(Number);
    this.appendValueInput("Y_AXIS",Number)
        .appendField('Y:')
        .setCheck(Number);
    this.appendDummyInput("")
        .appendField("显示图案");
    this.appendValueInput("Chars").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
}

Blockly.Blocks.wm_elfmini_led_matrix_bitmap_5x14 = {
  init: function() {
    this.setColour(WM_DISPLAY);
    this.appendDummyInput("")
        .appendField("创建名为")
        .appendField(new Blockly.FieldTextInput("Matrix_5x14"), "VAR")
        .appendField("的(5*14)LED点阵屏图案")

    for(var row = 0 ; row < 5; row ++) {
        var leds = this.appendDummyInput();
        for (var col = 0; col < 14; col++) {
            var cbox = new Blockly.FieldCheckbox(false);
            leds.appendField(cbox, 'a'+ row + col);
        }
    }
    this.setOutput(true, Number);
    this.setTooltip('');
  }
}

Blockly.Blocks.wm_elfmini_led_matrix_bitmap_7x21 = {
  init: function() {
    this.setColour(WM_DISPLAY);
    this.appendDummyInput("")
        .appendField("创建名为")
        .appendField(new Blockly.FieldTextInput("Matrix_7x21"), "VAR")
        .appendField("的(7*21)LED点阵屏图案")


    for(var row = 0 ; row < 7; row ++) {
        var leds = this.appendDummyInput();
        for (var col = 0; col < 21; col++) {
            var cbox = new Blockly.FieldCheckbox(false);
            leds.appendField(cbox, 'a' + row + col);
        }
    }
    this.setOutput(true, Number);
    this.setTooltip('');
  }
}

var WEEEMAKE_DEFAULT_IMAGE_514=[["Image1","IMAGE_514_1"],["Image2","IMAGE_514_2"],["Image3","IMAGE_514_3"],["Image4","IMAGE_514_4"],["Image5","IMAGE_514_5"],["Image6","IMAGE_514_6"],["Image7","IMAGE_514_7"],["Image8","IMAGE_514_8"],["全部点亮","IMAGE_514_9"]];
Blockly.Blocks.wm_elfmini_led_matrix_bitmap_default_514 = {
  init: function() {
    this.setColour(WM_DISPLAY);
    this.appendDummyInput("")
        .appendField("5*14LED点阵屏预设图案")
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_DEFAULT_IMAGE_514), "DEFAULT_IMAGE");
    this.setOutput(true, Number);
    this.setTooltip('');
  }
}

var WEEEMAKE_DEFAULT_IMAGE_721=[["Image1","IMAGE_721_1"],["Image2","IMAGE_721_2"],["Image3","IMAGE_721_3"],["Image4","IMAGE_721_4"],["Image5","IMAGE_721_5"],["Image6","IMAGE_721_6"],["Image7","IMAGE_721_7"],["Image8","IMAGE_721_8"],["全部点亮","IMAGE_721_9"]];
Blockly.Blocks.wm_elfmini_led_matrix_bitmap_default_721 = {
  init: function() {
    this.setColour(WM_DISPLAY);
    this.appendDummyInput("")
        .appendField("7*21LED点阵屏预设图案")
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_DEFAULT_IMAGE_721), "DEFAULT_IMAGE");
    this.setOutput(true, Number);
    this.setTooltip('');
  }
}

Blockly.Blocks.wm_elfmini_led_matrix_clear = {
  init: function() {
    this.setColour(WM_DISPLAY);
    this.appendDummyInput("")
        .appendField('LED点阵屏')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_LED_MATRIX_TYPE), "TYPE")
        .appendField('接')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField("清空屏幕");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
}

Blockly.Blocks.wm_elfmini_led_matrix_show_pixel = {
  init: function() {
    this.setColour(WM_DISPLAY);
    this.appendDummyInput("")
        .appendField('LED点阵屏')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_LED_MATRIX_TYPE), "TYPE")
        .appendField('接')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField(new Blockly.FieldDropdown([["点亮","turnOnDot"],["熄灭","turnOffDot"]]), "STAT");
    this.appendValueInput("X_AXIS",Number)
        .appendField('位于X:')
        .setCheck(Number);
    this.appendValueInput("Y_AXIS",Number)
        .appendField('Y:')
        .setCheck(Number);
    this.appendDummyInput("")
        .appendField('的LED灯');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
}

var WEEEMAKE_BRIGHTNESS=[["7","7"],["6","6"],["5","5"],["4","4"],["3","3"],["2","2"],["1","1"],["0","0"]];
Blockly.Blocks.wm_elfmini_led_matrix_set_brightness = {
  init: function() {
    this.setColour(WM_DISPLAY);
    this.appendDummyInput("")
        .appendField('LED点阵屏')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_LED_MATRIX_TYPE), "TYPE")
        .appendField('接')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField('设置亮度等级:')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_BRIGHTNESS), "BRIGHTNESS");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
}

//4-Digtal LED Module
Blockly.Blocks.wm_elfmini_seven_segment_display_show_number = {
  init: function() {
    this.setColour(WM_DISPLAY);
    this.appendDummyInput("")
        .appendField('四位数码管模块接')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN");
    this.appendValueInput("NUMBER",Number)
        .appendField('显示数字')
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
}

//OLED Module
Blockly.Blocks.wm_elfmini_oled_display_set_char_size = {
  init: function() {
    this.setColour(WM_DISPLAY);
    this.appendDummyInput("")
        .appendField("OLED显示屏接")
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField("设置字符尺寸为")
        .appendField(new Blockly.FieldDropdown([["8", "8"], ["16", "16"]]), "CHAR_SIZE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(" ");
  }
};

Blockly.Blocks.wm_elfmini_oled_display_show_string = {
  init: function() {
    this.setColour(WM_DISPLAY);
    this.appendDummyInput("")
        .appendField('OLED显示屏接')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN");
    this.appendValueInput("X_AXIS")
        .appendField('从X:')
        .setCheck(Number);
    this.appendValueInput("Y_AXIS")
        .appendField('Y:')
        .setCheck(Number);
    this.appendValueInput("TEXT",String)
        .setCheck([String,Number])
        .appendField("开始显示字符");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
}

Blockly.Blocks.wm_elfmini_oled_display_show_number = {
  init: function() {
    this.setColour(WM_DISPLAY);
    this.appendDummyInput("")
        .appendField('OLED显示屏接')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN");
    this.appendValueInput("X_AXIS")
        .appendField('从X:')
        .setCheck(Number);
    this.appendValueInput("Y_AXIS")
        .appendField('Y:')
        .setCheck(Number);
    this.appendValueInput("NUMBER")
        .setCheck(Number)
        .appendField("开始显示数字");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks.wm_elfmini_oled_display_clear = {
  init: function() {
    this.setColour(WM_DISPLAY);
    this.appendDummyInput("")
        .appendField("OLED显示屏接")
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField("清空屏幕");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(" ");
  }
};

//MP3 Module
Blockly.Blocks.wm_elfmini_mp3_module_set_device = {
  init: function() {
    this.setColour(WM_EXECUTION);
    this.appendDummyInput("")
        .appendField("MP3模块接")
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField("设置播放路径为")
        .appendField(new Blockly.FieldDropdown([["FLASH", "4"], ["TF", "2"]]), "INDEX");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(" ");
  }
};

Blockly.Blocks.wm_elfmini_mp3_module_set_volume = {
  init: function() {
    this.setColour(WM_EXECUTION);
    this.appendDummyInput("")
        .appendField("MP3模块接")
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN");
    this.appendValueInput("VOLUME")
        .appendField("设置播放音量为")
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(" ");
  }
};

Blockly.Blocks.wm_elfmini_mp3_module_set_music = {
  init: function() {
    this.setColour(WM_EXECUTION);
    this.appendDummyInput("")
        .appendField("MP3模块接")
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN");
    this.appendValueInput("NUMBER")
        .appendField("播放第")
        .setCheck(Number);
    this.appendDummyInput("")
        .appendField("首");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(" ");
  }
};

Blockly.Blocks.wm_elfmini_mp3_module_play = {
  init: function() {
    this.setColour(WM_EXECUTION);
    this.appendDummyInput("")
        .appendField("MP3模块接")
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField("恢复播放");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(" ");
  }
};

Blockly.Blocks.wm_elfmini_mp3_module_pause = {
  init: function() {
    this.setColour(WM_EXECUTION);
    this.appendDummyInput("")
        .appendField("MP3模块接")
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField("暂停播放");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(" ");
  }
};

Blockly.Blocks.wm_elfmini_mp3_module_prev = {
  init: function() {
    this.setColour(WM_EXECUTION);
    this.appendDummyInput("")
        .appendField("MP3模块接")
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField("播放上一首");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(" ");
  }
};

Blockly.Blocks.wm_elfmini_mp3_module_next = {
  init: function() {
    this.setColour(WM_EXECUTION);
    this.appendDummyInput("")
        .appendField("MP3模块接")
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField("播放下一首");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(" ");
  }
};

Blockly.Blocks.wm_elfmini_mp3_module_music_is_over = {
  init: function() {
    this.setColour(WM_EXECUTION);
    this.appendDummyInput("")
        .appendField('MP3模块接')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField('当前曲目播放结束？');
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

//Relay Module
Blockly.Blocks.wm_elfmini_relay_module_set = {
  init: function() {
    this.setColour(WM_EXECUTION);
    this.appendDummyInput("")
        .appendField("继电器模块接")
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField("设置为")
        .appendField(new Blockly.FieldDropdown([["打开", ".openNC();"], ["关闭", ".closeNC();"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(" ");
  }
};

//Water Atomizer Module
Blockly.Blocks.wm_elfmini_water_atomizer_set = {
  init: function() {
    this.setColour(WM_EXECUTION);
    this.appendDummyInput("")
        .appendField("雾化器模块接")
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField("设置为")
        .appendField(new Blockly.FieldDropdown([["打开", ".start();"], ["关闭", ".stop();"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(" ");
  }
};

//Potentiometer Module
Blockly.Blocks.wm_elfmini_potentiometer_get_value = {
  init: function() {
    this.setColour(WM_CONTROL);
    this.appendDummyInput("")
        .appendField('旋转电位器接')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField('读取值');
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

Blockly.Blocks.wm_elfmini_sliding_potentiometer_get_value = {
  init: function() {
    this.setColour(WM_CONTROL);
    this.appendDummyInput("")
        .appendField('滑动电位器接')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField('读取值');
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

//Joystick Module 
Blockly.Blocks.wm_elfmini_joystick_module_get_value = {
  init: function() {
    this.setColour(WM_CONTROL);
    this.appendDummyInput("")
        .appendField('全向摇杆接')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField('获取')
        .appendField(new Blockly.FieldDropdown([["X轴","0"],["Y轴","1"]]), "INDEX")
        .appendField('方向上的值');
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

//Touch Sensor
Blockly.Blocks.wm_elfmini_touch_sensor_set_mode = {
  init: function() {
    this.setColour(WM_CONTROL);
    this.appendDummyInput("")
        .appendField("单路触摸传感器接")
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField("设置模式为")
        .appendField(new Blockly.FieldDropdown([["模式1","0"],["模式2","1"]]), "MODE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(" ");
  }
};

Blockly.Blocks.wm_elfmini_touch_sensor_get_value = {
  init: function() {
    this.setColour(WM_CONTROL);
    this.appendDummyInput("")
        .appendField('单路触摸传感器接')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField('读取值');
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

Blockly.Blocks.wm_elfmini_funny_touch_sensor_get_value = {
  init: function() {
    this.setColour(WM_CONTROL);
    this.appendDummyInput("")
        .appendField('多路触摸传感器接')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField('读取值');
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

//WeHumiture Sensor
Blockly.Blocks.wm_elfmini_humiture_get_value = {
  init: function() {
    this.setColour(WM_SENSOR);
    this.appendDummyInput("")
        .appendField('温湿度传感器接')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField('读取')
        .appendField(new Blockly.FieldDropdown([["温度值(℃)",".getTemperature(true)"],["湿度值(%)",".getHumidity(true)"]]), "INDEX")
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
}

//Temperature Sensor
Blockly.Blocks.wm_elfmini_ds18b20_get_value = {
  init: function() {
    this.setColour(WM_SENSOR);
    this.appendDummyInput("")
        .appendField('温度传感器(DS18B20)接')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField('读取温度值(℃)');
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
}

//Tilt Switch Sensor
Blockly.Blocks.wm_elfmini_tilt_switch_sensor_get_value = {
  init: function() {
    this.setColour(WM_SENSOR);
    this.appendDummyInput("")
        .appendField('倾斜开关传感器接')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField('读取值');
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
}

//Flame Sensor
Blockly.Blocks.wm_elfmini_flame_sensor_get_value = {
  init: function() {
    this.setColour(WM_SENSOR);
    this.appendDummyInput("")
        .appendField('火焰传感器接')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField('读取探头')
        .appendField(new Blockly.FieldDropdown([["1","1"],["2","2"],["3","3"]]), "INDEX")
        .appendField('的值');
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
}

//Gas Sensor
Blockly.Blocks.wm_elfmini_gas_sensor_get_value = {
  init: function() {
    this.setColour(WM_SENSOR);
    this.appendDummyInput("")
        .appendField('气体传感器(MQ2)接')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField('读取值');
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
}

//PIR Sensor
Blockly.Blocks.wm_elfmini_pir_sensor_get_value = {
  init: function() {
    this.setColour(WM_SENSOR);
    this.appendDummyInput("")
        .appendField('人体红外传感器接')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField('读取值');
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
}

//Color Sensor
Blockly.Blocks.wm_elfmini_color_sensor_set = {
  init: function() {
    this.setColour(WM_SENSOR);
    this.appendDummyInput("")
        .appendField("颜色识别传感器接")
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField("将LED灯")
        .appendField(new Blockly.FieldDropdown([["打开", "1"], ["关闭", "0"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(" ");
  }
};

Blockly.Blocks.wm_elfmini_color_sensor_wb = {
  init: function() {
    this.setColour(WM_SENSOR);
    this.appendDummyInput("")
        .appendField("颜色识别传感器接")
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField("进行白平衡操作");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(" ");
  }
};

Blockly.Blocks.wm_elfmini_color_sensor_get_value = {
  init: function() {
    this.setColour(WM_SENSOR);
    this.appendDummyInput("")
        .appendField('颜色识别传感器接')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField('读取')
        .appendField(new Blockly.FieldDropdown([["光强","0"],["红色","1"],["绿色","2"],["蓝色","3"]]), "INDEX")
        .appendField('分量值');
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

//Gyro Sensor
Blockly.Blocks.wm_elfmini_gyro_sensor_get_gyration = {
  init: function() {
    this.setColour(WM_SENSOR);
    this.appendDummyInput("")
        .appendField('陀螺仪接')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField('获取')
        .appendField(new Blockly.FieldDropdown([["X轴","0"],["Y轴","1"],["Z轴","2"]]), "INDEX")
        .appendField('方向角度值');
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

Blockly.Blocks.wm_elfmini_gyro_sensor_get_aacceleration = {
  init: function() {
    this.setColour(WM_SENSOR);
    this.appendDummyInput("")
        .appendField('陀螺仪接')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField('获取')
        .appendField(new Blockly.FieldDropdown([["X轴","0"],["Y轴","1"],["Z轴","2"]]), "INDEX")
        .appendField('方向加速度值');
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

//Compass Sensor
Blockly.Blocks.wm_elfmini_compass_sensor_get_value = {
  init: function() {
    this.setColour(WM_SENSOR);
    this.appendDummyInput("")
        .appendField('电子罗盘接')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField('获取')
        .appendField(new Blockly.FieldDropdown([["X轴","0"],["Y轴","1"],["Z轴","2"]]), "INDEX")
        .appendField('方向上的值');
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

//PM2.5 Sensor
Blockly.Blocks.wm_elfmini_pm25_sensor_set_mode = {
  init: function() {
    this.setColour(WM_SENSOR);
    this.appendDummyInput("")
        .appendField("PM2.5传感器接")
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField("设置内置风扇")
        .appendField(new Blockly.FieldDropdown([["打开","1"],["关闭","0"]]), "MODE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(" ");
  }
};

Blockly.Blocks.wm_elfmini_pm25_sensor_get_value = {
  init: function() {
    this.setColour(WM_SENSOR);
    this.appendDummyInput("")
        .appendField('PM2.5传感器接')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField('获取')
        .appendField(new Blockly.FieldDropdown([["PM1.0",".readPm1_0Concentration()"],["PM2.5",".readPm2_5Concentration()"],["PM10",".readPm10Concentration()"]]), "INDEX")
        .appendField('的值(ug/m^3)');
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

Blockly.Blocks.wm_elfmini_pm25_sensor_get_value_1 = {
  init: function() {
    this.setColour(WM_SENSOR);
    this.appendDummyInput("")
        .appendField('PM2.5传感器接')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField('获取0.1L空气中直径为')
        .appendField(new Blockly.FieldDropdown([["0.3um",".read0_3NumIn100ml()"],["0.5um",".read0_5NumIn100ml()"],["1.0um",".read1_0NumIn100ml()"],["2.5um",".read2_5NumIn100ml()"],["5.0um",".read5_0NumIn100ml()"],["10um",".read10NumIn100ml()"]]), "INDEX")
        .appendField('的颗粒物个数');
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

//Water Sensor
Blockly.Blocks.wm_elfmini_water_sensor_get_value = {
  init: function() {
    this.setColour(WM_SENSOR);
    this.appendDummyInput("")
        .appendField('雨滴传感器接')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField('读取值');
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

//Barometer Sensor
Blockly.Blocks.wm_elfmini_barometer_sensor_get_value = {
  init: function() {
    this.setColour(WM_SENSOR);
    this.appendDummyInput("")
        .appendField('气压传感器接')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField('读取气压值(帕)');
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

//UV Sensor
Blockly.Blocks.wm_elfmini_uv_sensor_get_value = {
  init: function() {
    this.setColour(WM_SENSOR);
    this.appendDummyInput("")
        .appendField('紫外线传感器接')
        .appendField(new Blockly.FieldDropdown(WEEEMAKE_PORTS), "PIN")
        .appendField('读取')
        .appendField(new Blockly.FieldDropdown([["模拟值",".readAnalog()"],["指数值",".readIndex()"]]), "INDEX");
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};