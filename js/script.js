var nombreDeCarte = "12";
var board = document.getElementById("board");



for (var i = 1; i <= nombreDeCarte/2; i++) {

    var carte = document.createElement("div");
    carte.className="card";
    carte.innerHTML = i;
    board.appendChild(carte);

    var carte = document.createElement("div");
    carte.className="card";
    carte.innerHTML = i;
    board.appendChild(carte);

};
for (var i = 1; i <= nombreDeCarte/2; i++) {

    var carte = document.createElement("div");
    carte.className="cache";
    board.appendChild(carte);

    var carte = document.createElement("div");
    carte.className="cache";
    board.appendChild(carte);

}
