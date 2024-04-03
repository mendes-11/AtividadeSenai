var nomeGlobal;
    var mensagemGlobal;
    var dateGlobal;

    function conferirMensagemWhatsApp() {
        var nome = document.getElementById("nome").value;
        var mensagem = document.getElementById("mensagem").value;
        var date = new Date();
      
        nomeGlobal = nome;
        mensagemGlobal = mensagem;
        dateGlobal = fortmatDate(date);
      
        document.getElementById("confNome").textContent = "Nome: " + nome;
        document.getElementById("confMsg").textContent = "Observações: " + mensagem;
        document.getElementById("confDate").textContent = "Data: " + dateGlobal;
        document.getElementById("IDconferir").style.visibility = "visible"
      }

    function fortmatDate(date) {
      return date.toLocaleDateString('pt-br') + ", " + date.toLocaleTimeString('pt-br');
    }



    function enviar() {
      var numeroTelefone = "5541999999999";

      var linkWhatsApp =
        "https://wa.me/" +
        numeroTelefone +
        "?text=NOME DO RECEPTOR(A): " +
        nomeGlobal +
        " Menssagem: " +
        mensagemGlobal +
        " Data:" +
        dateGlobal;

      window.open(linkWhatsApp);
    }


    function DarkMode() {
        var element = document.body;
        element.classList.toggle("dark-mode");
     }