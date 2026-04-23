(function loop() {
  setTimeout(() => {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
    loop();
  }, 5000);
})();