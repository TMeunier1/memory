var nombreDeCarte = "12";
var board = document.getElementById("board");



for (var i = 0; i < nombreDeCarte; i++) {
    var carte = document.createElement("div");
    carte.className="card"
    carte.innerHTML = i;
    board.appendChild(carte);
}
