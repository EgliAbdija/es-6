const listaUtenti = ["ciccioGamer", "icardi", "khaby", "rocco", "anna"];
const listaPassword = ["ciccio1", "wandanara", "tiktok", "siffredi33", "tatangelo"];

function mostraNascondiPassword() {
  let inputPwd = document.getElementById("campoPassword");
  let occhio = document.getElementById("iconaOcchio");

  if (inputPwd.type == 'password') {
    inputPwd.type = 'text';
  } else {
    inputPwd.type = 'password';
  }
  occhio.classList.toggle("bi-eye");
  occhio.classList.toggle("bi-eye-slash");
}

function eseguiAccesso() {
  let nomeInserito = document.getElementById("campoUtente").value;
  let pwdInserita = document.getElementById("campoPassword").value;

  for (let i = 0; i < listaUtenti.length; i++) {
    if (listaUtenti[i] === nomeInserito && listaPassword[i] === pwdInserita) {
      document.getElementById("messaggioAccesso").innerHTML = "Login Successful";
      document.getElementById("messaggioAccesso").classList.remove("bg-danger");
      document.getElementById("messaggioAccesso").classList.add("bg-success");
      return;
    }
  }

  document.getElementById("messaggioAccesso").innerHTML = "Login Failed, user not registered.";
  document.getElementById("messaggioAccesso").classList.remove("bg-success");
  document.getElementById("messaggioAccesso").classList.add("bg-danger");
}
