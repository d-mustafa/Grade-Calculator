// CS10 Grade Calculator

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let CSS1 = +document.getElementById("cs1-in").value;
  let SP1 = +document.getElementById("sp1-in").value;
  let SP2 = +document.getElementById("sp2-in").value;
  let CSS2 = +document.getElementById("cs2-in").value;
  let PA = +document.getElementById("project-in").value;

  // Process
  let add = CSS1 + SP1 + SP2 + CSS2 + PA;
  let average = add / 5;

  // Output
  document.getElementById("output").innerHTML = average;
}
