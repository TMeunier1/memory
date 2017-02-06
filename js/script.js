var nombreDeCarte = "12";
var board = document.getElementById("board");
var carte


for (var i = 1; i <= nombreDeCarte/2; i++) {

    carte = document.createElement("div");
    carte.className="cache";
    carte.innerHTML = i;
    board.appendChild(carte);

    carte.addEventListener("click", function() {
            if (this.className == "cache") {
                this.className = "card";
            }

            else {
                this.className = "cache";
            }
    });

    carte = document.createElement("div");
    carte.className="cache";
    carte.innerHTML = i;
    board.appendChild(carte);

    carte.addEventListener("click", function() {
            if (this.className == "cache") {
                this.className = "card";
            }

            else {
                this.className = "cache";
            }
    });
};
