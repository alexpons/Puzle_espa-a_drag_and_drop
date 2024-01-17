const errorElement = document.getElementById('error');

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  const imageComunidad = document.getElementById(data).getAttribute("data-comunidad");
  const areaTarget = ev.target.getAttribute("data-comunidad");

  var coords = ev.target.coords.split(','); // Las coordenadas son una cadena separada por comas
  var xRelativo = parseInt(coords[0], 10); // Coordenada X relativa al área
  var yRelativo = parseInt(coords[1], 10); 
    

  if (imageComunidad === areaTarget) {
    errorElement.style.display = "none";
    const newImage = new Image();
    newImage.src = document.getElementById(data).getAttribute("src");
    newImage.style.top = `${yRelativo}px`;
    newImage.style.left = `${xRelativo}px`;
    newImage.style.position = "absolute";

    ev.target.appendChild(newImage);
  } else {
    errorElement.style.display = "block";
  }
}
