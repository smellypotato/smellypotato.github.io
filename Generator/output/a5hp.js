let query = new URLSearchParams(window.location.search);
let fullString = query.get("text");
let className = `${query.get("paper")}a5hp`;
let textArr = fullString.split(",");
let rowArr = [];
let rowOffset = [];

let table = document.getElementById("top");
document.getElementsByClassName("a5hp")[1].className = className;
document.getElementsByClassName("a5hp")[0].className = className;

for (let i = 0; i < textArr.length; i++) {
    rowArr.push(addRow(table, textArr[i]));
}
for (let i = 0; i < textArr.length; i++) {
    rowArr[i].style.height = `${table.parentNode.offsetHeight / textArr.length}px`;
    let height = rowArr[i].offsetHeight;
    rowArr[i].style.fontSize = `${height}px`;
    rowArr[i].style.lineHeight = `${height}px`;
    rowArr[i].style["whiteSpace"] = "nowrap";
    rowOffset.push(rowArr[i].offsetWidth);
}

let width = document.getElementsByClassName(className)[0].offsetWidth;
let largestOffset = Math.max(...rowOffset);

while (largestOffset > width) {
    rowOffset = [];
    rowArr.forEach(row => {
        row.style.fontSize = `${parseInt(row.style.fontSize) - 1}px`;
        rowOffset.push(row.offsetWidth);
    })
    largestOffset = Math.max(...rowOffset);
}

rowArr.forEach(row => {
    row.style.fontSize = `${parseInt(row.style.fontSize) - 5}px`;
})

function addRow(table, text) {
    let row = table.insertRow(-1);
    let cell = row.insertCell(-1);
    cell.innerText = text;
    return row;
}

window.print();
