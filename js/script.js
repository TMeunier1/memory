var nombreDeCarte = 12;
var board = document.getElementById("board");
var carte;
var carteRetournee1 = null;
var carteRetournee2 = null;



for (var i = 0; i < nombreDeCarte/2; i++) {
    for (var j = 0; j < 2; j++) {
        carte = document.createElement("div");
        carte.className="card";
        var cardValue = document.createElement("div");
        carte.appendChild(cardValue);
        cardValue.innerHTML = i;
        var divcache = document.createElement("div");
        divcache.className = "cache";

        carte.appendChild(divcache);
        board.appendChild(carte);

        divcache.addEventListener("click", function() {
            if (carteRetournee1 == null) {
                carteRetournee1 = this;
            }
            else if (carteRetournee2 == null) {
                carteRetournee2 = this;
            }
            else {
                carteRetournee1.style.display = "block";
                carteRetournee2.style.display = "block";
                carteRetournee1 = this;
                carteRetournee2 = null;
                if (carteRetournee1.previousSibling.innerHTML == carteRetournee2.previousSibling.innerHTML) {
                }

            }

            this.style.display = "none";
        });
    }
};
