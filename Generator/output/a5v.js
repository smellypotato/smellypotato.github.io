let query = new URLSearchParams(window.location.search);
let fullString = query.get("text");
let className = `${query.get("paper")}a5v`;
let textArr = fullString.split(",");
let colArr = [];
let colOffset = [];

let table = document.getElementById("left");
document.getElementsByClassName("a5v")[1].className = className;
document.getElementsByClassName("a5v")[0].className = className;

for (let i = 0; i < textArr.length; i++) {
    colArr.push(addCol(table, textArr[i]));
}

colArr.forEach((col, i) => {
    col.style.width = `${table.parentNode.offsetWidth / textArr.length}px`;
    let width = col.offsetWidth;
    col.style.fontSize = `${width}px`;
    col.style.lineHeight = `${width}px`;
    colOffset.push(col.offsetHeight);
})

let height = document.getElementsByClassName(className)[0].offsetHeight;
let largestOffset = Math.max(...colOffset);

while (largestOffset > height) {
    colOffset = [];
    colArr.forEach(col => {
        col.style.fontSize = `${parseInt(col.style.fontSize) - 1}px`;
        col.style.lineHeight = `${parseInt(col.style.fontSize)}px`;
        colOffset.push(col.offsetHeight);
    })
    largestOffset = Math.max(...colOffset);
}

colArr.forEach(col => {
    col.style.fontSize = `${parseInt(col.style.fontSize) - 5}px`;
})

function addCol(table, text) {
    let row = table.rows[0];
    let cell = row.insertCell(-1);
    let div = document.createElement("DIV");
    div.className = "vertical";
    div.innerText = text
    cell.appendChild(div);
    return cell
}

window.print();
