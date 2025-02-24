document.getElementById("check").addEventListener(
  "click",

  function input() {
    const nisab = 2000000;

    const name = document.getElementById("zakat").value.trim();

    if (name >= nisab) {
      document.getElementById("status").textContent = "You're eligible!";
    } else {
      document.getElementById("status"). textContent = "You're not eligible";
    }
  }
);
