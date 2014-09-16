// main.ck, Audio Signal Processing
// Week 2 Homework

// you should not have to change any of this code!
// if you've properly coded your FIR filter, everything should be great!
// run master.ck to test

// imports our Fir ChuGen
Fir fir;

// signal chain, using noise as our test audio 
Noise nois => fir => dac;

// so we don't kill our ears
nois.gain(0.5);

while (true) {
    // oscillates filter coefficient between 0.0 and 0.5
    (Math.sin(now/second * 4.0) + 1.0)/4.0 => float cutoff;

    // calls the filt function from our Fir Chugen
    fir.filt(cutoff);

    // loops every 0.1 second
    0.01::second => now;

    // print for sanity, uncomment if needed
    // <<< "Filter Cutoff:", cutoff, "" >>>;
}
