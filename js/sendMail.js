import contains from "./contains.js";
let form = document.getElementById("form");
let submit = document.getElementById("submit");
let alertBorder = document.getElementById("alert-border");
let sending = document.getElementById("sending");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let nameTo = document
    .getElementById("nameTo")
    .value.split(" ")
    .map((item) => {
      return item.slice(0, 1).toUpperCase() + item.slice(1).toLowerCase();
    })
    .join(" ");
  let sendTo = document.getElementById("email").value;
  let contain = await contains();

  if (alertBorder.classList.contains("left-0")) {
    alertBorder.classList.remove("left-0");
  }
  alertBorder.classList.add("-left-full");

  let bodyFecth = {
    nameFrom: "Zunna Digital",
    sendFrom: "zunna.digital47@gmail.com",
    password: "jtli vpnl pcwc gdga",
    nameTo: nameTo,
    sendTo: sendTo,
    subject: "E-Book",
    bodyHTML: `<b>Hallo kak ${nameTo} terima kasih sudah order...<br>semoga suka dengan buku nya ^_^ dan rezeki kakak sekeluarga lancar selalu,<br><br>Happy reading</b><br><br>${contain}`,
  };
  let request = await fetch(
    "https://zunnaserver.vercel.app/email/SendToEmail",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyFecth),
    }
  );
  let response = await request.json();
  console.log(response);

  if (response.isSucceeded) {
    alertBorder.classList.remove("-left-full");

    alertBorder.classList.add("left-0");

    sending.innerHTML = response.response;
    submit.disabled = false;
    submit.classList.add("text-gray-400", "hover:bg-slate-600");
    submit.classList.remove("text-black", "cursor-progress");
    submit.innerHTML = "Kirim";
    document.getElementById("nameTo").value = "";
    document.getElementById("email").value = "";
    document.getElementById("skuID").value = "";
  }
});
