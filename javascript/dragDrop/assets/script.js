// let div1 = document.getElementById("div1");
// let div2 = document.getElementById("div2");
// let drag = document.getElementById("drag");

function allowDrop(allowdropevent) {
    allowdropevent.target.style.color = 'blue';
    allowdropevent.preventDefault();
};

function drag(dragevent) {
    dragevent.dataTransfer.setData("text", dragevent.target.id);
    dragevent.target.style.color = 'green';
};

function drop(dropevent) {
    dropevent.preventDefault();
    let data = dropevent.dataTransfer.getData("text");
    console.log("valor da data" + data);
    dropevent.target.appendChild(document.getElementById(data));
    document.getElementById("drag").style.color = 'black';
};
