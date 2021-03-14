function setup(){
   createCanvas(1600,400);
   var name = "Ishaan";
   console.log(name)
   console.log(name.length);
   console.log(name.toUpperCase());
   console.log(name.toLowerCase());

   var number = 9;
   console.log(number)
   console.log(2+5);
   console.log(5-4);
   console.log(6*7);
   console.log(8/2);
   console.log(5%6);

   console.log('Hello'+'World');
   console.log('Hello'-'World');
   console.log('Hello'*'World');
   console.log('Hello'/'World');
   console.log('Hello'%'World');

   console.log(2===2);
   if(5!==6){
     console.log('they are unequal')
   }
   else{
     console.log('they are equal');
   }
    
    var rand = Math.round(random(1,2));
    switch (rand) {
      case 1:
        console.log("heads")
        break;
        case 2:
          console.log("tails")
        break; 
    
      default:
        break;
    }

    for (let i = 1; i < 6; i++) {
      console.log(i)

    }

    var n = 2;
    while (n<11) {
      console.log(n)
      n+=2
    }
    
    var friends = ["Rahul","Karan","Ranveer"];
    console.log(friends[1])
    console.log(circumference(6));
}

function draw(){
  background(0);
}
function circumference(radius){
  var perimeter = 2*3.14*radius;
  return perimeter;
}