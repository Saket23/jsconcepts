function handleButtonClick() {
  localStorage.setItem("myCat", "Tom");
}

function handleButtonClick2() {
  console.log(localStorage.getItem("myCat"));
}

function handleSessionButtonClick() {
  sessionStorage.setItem("myCat", "Tommy");
}

function handleSessionButtonClick2() {
  console.log(sessionStorage.getItem("myCat"));
}
