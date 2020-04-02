function onSubmit(e) {
    // e.preventDefault();
    let form = document.getElementById("form");

    let typeDiv = document.getElementById("type");
    let type;
    typeDiv.childNodes.forEach((element) => {
        if (element.tagName =="INPUT") {
            if (element.checked) {
                type = element.value;
                return;
            }
        }
    });
    let paperDiv = document.getElementById("paper");
    let paper;
    paperDiv.childNodes.forEach((element) => {
        if (element.tagName == "INPUT") {
            if (element.checked) {
                paper = element.value;
                return;
            }
        }
    })

    let textDiv = document.getElementById("text");
    let text;
    textDiv.childNodes.forEach((element) => {
        if (element.tagName == "INPUT") {
            text = element.value;
            return;
        }
    });

    location.assign(`./output/${type}.html?text=${text}&paper=${paper == "A4"? "" : "letter"}`);
    return false;
}
