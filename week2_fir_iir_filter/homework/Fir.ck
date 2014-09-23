// Fir.ck, Audio Signal Processing
// Week 2 Homework

// this should be the only code that you edit!
// run master.ck to test

public class Fir extends Chugen {
    // FIR Filter Class

    // you'll have to use the following three variables in your function
    0.0 => float x1;

    // filter coefficients
    0.0 => float a0;
    1.0 => float a1;

    // function for setting filter cutoff
    // called from main.ck
    fun void filt(float x) {
        x => a0;    
        1.0 - a0 => a1;
    }

    // function that updates every sample
    // write your code inside of this function!
    fun float tick(float x) {
        a1 * (x - x1) => x
        x => x1  
        x => float out;
        return out;
    }
}
