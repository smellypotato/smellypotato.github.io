let query = new URLSearchParams(window.location.search);
let fullString = query.get("text").replace(",", "");



for (const letter of fullString) {
    let div = document.createElement("DIV");
    div.className = `${query.get("paper")}a4s`;
    div.innerText = letter;
    div.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    document.body.appendChild(div);
}
