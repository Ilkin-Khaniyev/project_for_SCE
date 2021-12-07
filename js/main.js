const modal = document.querySelector(".modal_box"),
  modalCloseBtn = document.querySelector("[data-close]"),
  okBtn = document.querySelector(".btn-ok");

function showModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

if (modal != null) {
  modalCloseBtn.addEventListener("click", closeModal);
  okBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && modal.classList.contains("show")) {
    closeModal();
  }
});

function setClock() {
  let timeLeft = 0,
    startTime = 10;
  let updateClock = setInterval(function () {
    if (timeLeft >= 9) {
      showModal();
      clearInterval(updateClock);
    }
    timeLeft += 1;

    document.getElementById("seconds").innerHTML = startTime - timeLeft;
    console.log(timeLeft);
  }, 1000);
}
setClock();

function getData() {
  var form = document.getElementById("dataForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(form.action, {
      method: "POST",
      body: new FormData(document.getElementById("dataForm")),
    })
      .then((response) => response.json())
      .then((html) => {
        alert("success");
        window.location.href = 'https://docs.google.com/spreadsheets/d/1OOMWgDKH9sNPSGUBdfqRFWH2nIOkdufCnBsi3z5I7CA/edit#gid=0';
      });
  });
}

getData();
