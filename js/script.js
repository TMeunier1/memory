var nombreDeCarte = "12";
var board = document.getElementById("board");
var carte;
var carte2 = null;
var div2 = "";
var divtexte = "";


for (var i = 1; i <= nombreDeCarte/2; i++) {

    carte = document.createElement("div");
    carte.className="cache";
    divtexte = document.createElement("div");
    board.appendChild(divtexte);
    divtexte.className = "card";
    divtexte = i;
    board.appendChild(carte);

    carte.addEventListener("click", function() {
            if (this.className == "cache") {
                this.className = "card";
                if (carte2 == null) {
                    carte2 = this;
                }
                else {
                    if (carte2.innerHTML != this.innerHTML) {
                        this.className = "cache";
                        carte2.className = "cache";
                    }
                    carte2 = null;
                }
            }

    });

    carte = document.createElement("div");
    carte.className="cache";
    carte.innerHTML = i;
    board.appendChild(carte);
    divtexte = document.createElement("div");
    board.appendChild(divtexte);
    divtexte.className = "card";
    divtexte = i;

    carte.addEventListener("click", function() {
            if (this.className == "cache") {
                this.className = "card";
                if (carte2 == null) {
                    carte2 = this;
                }
                else {
                    if (carte2.innerHTML != this.innerHTML) {
                        this.className = "cache";
                        carte2.className = "cache";
                    }
                    carte2 = null;
                }
            }


    });
};
