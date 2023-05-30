# BirithDay-Counter-SimpleWay
I develope a simple birthday counter. 
Ok let's first discuss the Time duration calculation

1 hour - > 3600  seconds
	   60	 Minutes

1 Day - > 86400 seconds
	  1440  Minutes

1 Second -> 1000 MiliiSeconds

1 Minutes -> 60000 Miliseconds
	     60	   Seconds.

So basically if I do this calculation than i find the Exact A day time, 24 * 60 * 60 * 1000
1000 -> refer to for converting seconds to miliSeconds.
24 * 60 * 60 --> refer to number of seconds in a Day,
1 Seconds --> 1000 miliseconds.

So calculating the expression 24 * 60 * 60 * 1000 -> we get number of miliSeconds in a day.

Math.floor ===> give the nearest Value like 10.9 gives 10 or 3.2 gives 3.

So we know the properties of Date object.

So refering the above calculation you can understand better how the working was goin on.
