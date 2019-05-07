#include "WeELF328P.h"

WeWaterAtomizer water_atomizer(PORT_A);

void setup()
{
	
}

void loop()
{
	water_atomizer.start();
	delay(2000);
	water_atomizer.stop();
	delay(1000);
}