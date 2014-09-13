// master.ck, Audio Signal Processing
// Week 2 Homework

// you should not have to change any of this code!
// if you've properly coded your FIR filter, everything should be great!
// run this file to test

// adds our Fir filter, must be loaded before test code
me.dir() + "/fir.ck" => string fir;
Machine.add(fir);

// runs our test code
me.dir() + "/main.ck" => string main;
Machine.add(main);
