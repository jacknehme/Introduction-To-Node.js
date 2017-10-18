var maxTime = 1000;
// If input is even, double it
// If input is odd, error
// (call takes random amount of time < 1s)
var evenDoubler = function(v, callback) {
    var t = Math.floor(Math.random() * maxTime);
    setTimeout(function(params) {
        if (v % 2) {
            callback(new Error("Odd input"));
        } else {
            callback(false, v * 2, t);
        }
    }, t);
};

var count = 0;

for (var i = 0; i < 10; i++) {
    console.log("Calling evenDoubler for value: " + i);
    evenDoubler(i, function(err, results, time) {
        if (err) {
            console.log("ERROR: " + err.message);
        } else {
            console.log("The results are: " + results + " (" + time + " ms)");
        }
        if (++count === 10) {
            console.log("Done!");
        }
    });
};

console.log("-----");