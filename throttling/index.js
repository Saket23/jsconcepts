function getData(data) {
  console.log("Fetching Data", data);
}

function throttle(fn, limit) {
  let flag = true;
  return function() {
    if (flag) {
      const context = this;
      const args = arguments;
      getData.call(context, args[0].value);
      flag = false;
      setTimeout(function() {
        flag = true;
      }, limit);
    }
  };
}

const betterExpensive = throttle(getData, "300");
