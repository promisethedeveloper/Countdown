let count = 60;

while (count >= 0) {
  if (count === 50) {
    console.log("Orbiter transfers from ground to internal power(T-"+count+"+seconds)");
  } else if (count === 31) {
    console.log("Ground launch sequencer is go for auto sequence start(T-"+count+" seconds)");
  } else if (count === 16) {
    console.log("Activate launch pad sound suppression system(T-"+count+" seconds)");
  } else if (count === 10) {
     console.log("Activate main engine hydrogen burnoff system(T-"+count+" seconds)");
  } else if (count === 6) {
    console.log("Main engine start(T-"+count+" seconds)");
  } else if (count === 0) {
     console.log("Solid rocket booster ignition and liftoff!(T-"+count+" seconds)");
  } else {
    console.log("T-" +count+ " seconds");
    
  }
  count = count - 1;
}