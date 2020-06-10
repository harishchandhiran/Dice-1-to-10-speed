var randomNumber = [];

function setup(){
  createCanvas(400,400);

  slow = createButton('slow');
  slow.position(100,100);

  medium = createButton('medium');
  medium.position(160,100);

  fast = createButton('fast');
  fast.position(240,100);
}

function draw(){
  background(0);

  stroke("red");
  textSize(30);
  slow.mousePressed(()=>{
    randomNumber = [];
    randomNumber.push(Math.round(random(1,10)));
  });

  medium.mousePressed(()=>{
    randomNumber = [];
    randomNumber.push(Math.round(random(1,10)));
    randomNumber = [];
    randomNumber.push(Math.round(random(1,10)));
  });

  fast.mousePressed(()=>{
    randomNumber = [];
    randomNumber.push(Math.round(random(1,10)));
    randomNumber = [];
    randomNumber.push(Math.round(random(1,10)));
    randomNumber = [];
    randomNumber.push(Math.round(random(1,10)));
  });


  text(randomNumber,200,200);  

}