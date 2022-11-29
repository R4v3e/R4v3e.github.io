
var map = L.map('map').setView([51.505, -0.09], 13);
var puzzles_horizontaly = 2;
var puzzles_verticaly = 2;
var elements = puzzles_verticaly * puzzles_horizontaly;
var button_state = 0;
     

const mylayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
 

function getLocation() 
{
  if (navigator.geolocation) 
  {
    navigator.geolocation.getCurrentPosition(showPosition);
  } 
  else 
  {
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) 
{
  document.getElementById("geoLocation").innerHTML = `<p>Latitude: ${position.coords.latitude} Longitude:${position.coords.longitude}</p>`
  map.setView([position.coords.latitude, position.coords.longitude], 18);
}




function takeshot()
{
  if(0==button_state)
  {
    button_state = 1;
    leafletImage(map, function (err, canvas) 
    {
      let rastDiv = document.getElementById("rastMap");
      rastDiv.appendChild(canvas);
    });
  }
}


function cropTile(canv,x,y,xx,yy) 
{
    let imageData = canv.getContext('2d').getImageData(x, y, xx, yy);
    let canvas = document.createElement('canvas');
    canvas.width = xx - x;
    canvas.height = yy - y;
    canvas.getContext('2d').putImageData(imageData, 0, 0);
    return canvas;    
}

function test()
{
  if(1==button_state)
  {
    button_state = 2;
    puzzles_horizontaly = document.getElementById("Horizontal").value;
    puzzles_verticaly = document.getElementById("Vertical").value;
    if(puzzles_horizontaly < 1)
    {
      puzzles_horizontaly = 4;
    }
    if(puzzles_verticaly < 1)
    {
      puzzles_verticaly = 4;
    }
    elements = puzzles_horizontaly * puzzles_verticaly;
   
    let puzzleCanvas = document.getElementById("rastMap").querySelector("canvas");
    let RastWidth=puzzleCanvas.width;
    let RastHeight=puzzleCanvas.height;
    let singlePuzzleWidth=Math.floor(RastWidth/puzzles_verticaly);
    let singlePuzzleHeight=Math.floor(RastHeight/puzzles_horizontaly);
    let newDiv=document.createElement("div");
    let lastWidth=0;
    let lastHeight=0;

    let id=0;
    let puzzleArray=[];
    for (let j = singlePuzzleHeight; j <= RastHeight; j=j+singlePuzzleHeight){
      for (let i = singlePuzzleWidth; i <= RastWidth; i=i+singlePuzzleWidth) {
        let newCan=cropTile(puzzleCanvas,lastWidth,lastHeight,i,j);
        newCan.setAttribute("id","puzzle-"+id);
        newCan.setAttribute("class","puzzle-canvas");
        newCan.setAttribute("draggable","true");
        newDiv.appendChild(newCan);
        lastWidth=i;
        id++;
      }
      lastWidth=0;
      lastHeight=j;
    }
    newDiv.setAttribute("id", "puzzleContainer");
    document.getElementById("rastMap").appendChild(newDiv);
    puzzleCanvas.remove();
    copyToDesk();
  }
}

function copyToDesk()
{
  var desk = document.getElementById("desk");
  let randomElem = [];
  for(let i = 0; i < elements; i++)
  {
    randomElem.push(i);
  }
  randomElem.sort(() => (Math.random() > .5) ? 1 : -1);

  for(let i = 0; i < elements; i++)
  {
    var test = document.getElementById('puzzle-'+randomElem[i]);
    var newDiv = document.createElement('div');
    test.setAttribute("ondragstart","drag(event)");
    newDiv.setAttribute("ondrop","drop(event)");
    newDiv.setAttribute("ondragover","allowDrop(event)");
    newDiv.setAttribute("style","height: "+ test.height+"px; width: " + test.width + "px; float: left;");
    newDiv.appendChild(test);
    desk.appendChild(newDiv);
  }

  preapareBoard(test.width,test.height);
}

function preapareBoard(width,height)
{
  var board = document.getElementById("rastMap");
  for(let i = 0; i < elements; i++)
  {
    let newCanvas = document.createElement('div');
    newCanvas.height = height;
    newCanvas.width = width;
    newCanvas.setAttribute("id","board-"+i);
    newCanvas.setAttribute("ondrop","drop(event)");
    newCanvas.setAttribute("ondragover","allowDrop(event)");
    newCanvas.setAttribute("style","height: "+height+"px; width: " + width + "px; float: left;");
    board.appendChild(newCanvas);
  }
}


function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  if (ev.target.tagName == 'DIV')
  {
    var data = ev.dataTransfer.getData("text");
    ev.dataTransfer.effectAllowed = 'move';
    ev.target.appendChild(document.getElementById(data));
    check()
  }
}

function check()
{
  let good = true;
  for(let i = 0; i < elements; i++)
  {
    let board = document.getElementById("board-"+i);
    if(board.hasChildNodes())
    {
      if(board.firstChild.id !== "puzzle-"+i)
      {
        good = false;
        break;
      }
    }
    else
    {
      good = false;
      break;
    }
  }
  if(good)
  {
    window.alert("You Won!");
  }
}
