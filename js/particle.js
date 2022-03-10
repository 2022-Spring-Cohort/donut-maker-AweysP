// const canvas = document.querySelector('#canvas');
// const context = canvas.getContext('2d');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;


// let particleArray = []; // the list of all sprites to be drawn on the canvas
// const maxSize = 200;

// const donutImage = new Image();

// class SpinningDonut{
//     constructor(){
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.xMomentum = Math.random() *15 -7.5;
//         this.yMomentum =Math.random() *15 -7.5;;
//         this.rotation = 0;
//         this.opacity = 1; 
//         this.size = Math.random() *3;
//         this.donutSource = "/pics/animatedPink.png"
//     }

//     update(){
//         this.rotation+= 3;
//         this.size -= 0.01;
//         this.opacity -= 0.01;
//         this.x += this.xMomentum;
//         this.y += this.yMomentum;
//     }
//     draw(){
//         context.save();
//         context.globalAplha; this.opacity;
//         context.translate(this.x,this.y);
//         context.rotate(Math.Pi / 180 * this.rotation);
//         donutImage.src = this.donutSource;
//         context.drawImage(donutImage,(-donutImage.width /4)*this.size,(-donutImage/4)*this.size,(donutImage.width /2) *this.size,(donutImage.height/2)*this.size);
//         context.restore();
//     }
// }
// function spawnSpinningDonut(){
//     if(particleArray.length <maxSize)
//     particleArray.push(new SpinningDonut());
//     console.log(particleArray);
    
// }

// function init(){
//     particleArray= [];
// }

// function animate (){
//     requestAnimationFrame(animate);
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     particleArray.forEach(function(particle){
//      //update-function that updates the logic
    
//     //draw-function that draws our information
//         particle.update();
//         particle.draw();
//     });
//    particleArray = particleArray.filter(function(particle){
//        return particle.opacity >= 0.08 && particle.size >= .1;
//    })
    
   
// }

// init();
// animate();
// export{spawnSpinningDonut}