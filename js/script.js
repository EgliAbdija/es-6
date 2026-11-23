const listaUtenti = ["ciccioGamer", "icardi", "khaby", "rocco", "anna"];
const listaPassword = [
  "ciccio1",
  "wandanara",
  "tiktok",
  "siffredi33",
  "tatangelo",
];

function mostraNascondiPassword() {
  let inputPass = document.getElementById("campoPassword");
  let occhio = document.getElementById("iconaOcchio");

  if (inputPass.type == "password") {
    inputPass.type = "text";
  } else {
    inputPass.type = "password";
  }
  occhio.classList.toggle("bi-eye");
  occhio.classList.toggle("bi-eye-slash");
}

function eseguiAccesso() {
  let nomeInserito = document.getElementById("campoUtente").value;
  let passInserita = document.getElementById("campoPassword").value;

  for (let i = 0; i < listaUtenti.length; i++) {
    if (listaUtenti[i] === nomeInserito && listaPassword[i] === passInserita) {
      document.getElementById("messaggioAccesso").innerHTML =
        "Login Successful";
      document.getElementById("messaggioAccesso").classList.remove("bg-danger");
      document.getElementById("messaggioAccesso").classList.add("bg-success");
      return;
    }
  }
  document.getElementById("messaggioAccesso").innerHTML =
    "Login Failed, user not registered.";
  document.getElementById("messaggioAccesso").classList.remove("bg-success");
  document.getElementById("messaggioAccesso").classList.add("bg-danger");
}

function apriNuovaScheda(aprire){
    if (aprire==true){

        let grayPage = document.getElementById("create").classList.remove("d-none")
        let everythingElse = document.getElementById("tutto").classList.add("opacity-50")
    }
    else {
        let grayPage = document.getElementById("create").classList.add("d-none")
        let everythingElse = document.getElementById("tutto").classList.remove("opacity-50")

    }
}
