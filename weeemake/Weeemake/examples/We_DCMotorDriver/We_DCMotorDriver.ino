#include "WeELF328P.h"

WeDCMotor motor1(M9);
WeDCMotor motor2(M10 );

uint8_t motorSpeed = 100;

void setup()
{  
}
void loop() 
{
  motor1.run(motorSpeed);
  motor2.run(motorSpeed);
  delay(500);
  motor1.stop();
  motor2.stop();
  delay(500);
  motor1.run(-motorSpeed);
  motor2.run(-motorSpeed);
  delay(500);
  motor1.stop();
  motor2.stop();
  delay(500);
}
