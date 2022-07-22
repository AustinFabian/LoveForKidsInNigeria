

// Detecting button press

var a = document.querySelectorAll('.drum');


// Code below still works perfectly

// for(let i = 0; i < a.length; i++){
//     if(i == 0){
//         a[i].addEventListener('click', function(){
//             var audio = new Audio ('sounds/crash.mp3');
//             audio.play();
        
//             a[0].classList.add('pressed');
        
//             setTimeout(()=>{
//                 a[0].classList.remove('pressed');
//             },100)
//         })
//     }else if(i == 1){
//         a[i].addEventListener('click', function(){
//             var audio = new Audio ('sounds/kick-bass.mp3');
//             audio.play();
        
//             a[i].classList.add('pressed');
        
//             setTimeout(()=>{
//                 a[i].classList.remove('pressed');
//             },100)
//         })
//     }else if(i == 2){
//         a[i].addEventListener('click', function(){
//             var audio = new Audio ('sounds/snare.mp3');
//             audio.play();
        
//             a[i].classList.add('pressed');
        
//             setTimeout(()=>{
//                 a[i].classList.remove('pressed');
//             },100)
//         })
//     }else{
//         a[i].addEventListener('click', function(){
//             var audio = new Audio ('sounds/tom-'+ (i-2) +'.mp3');
//             audio.play();
        
//             a[i].classList.add('pressed');
        
//             setTimeout(()=>{
//                 a[i].classList.remove('pressed');
//             },100)
//         })
//     }
// }







// currently the processing code as it's seen not commented on

for (let i = 0; i < a.length; i++){
    a[i].addEventListener('click', function(){
        var innerletter = this.innerHTML;

        makeSoundOnKeyPress(innerletter);

        buttonAnimation(innerletter)
    })
}









// This also works perfectly

// for(let i = 0; i < a.length; i++){
//     a[i].addEventListener('click', function(){
//         makeSound(i);
        
//     });
// }

// function makeSound(key){
    
//     if (key == 0){
//         var audio = new Audio('sounds/crash.mp3' );
//         audio.play();
//         a[key].classList.add('pressed');
//         setTimeout(function(){
//             a[key].classList.remove('pressed');
//         }, 100)
//     }else if(key == 1){
//         var audio = new Audio('sounds/kick-bass.mp3' );
//         audio.play();
//         a[key].classList.add('pressed');
//         setTimeout(function(){
//             a[key].classList.remove('pressed');
//         }, 100)
//     }else if(key == 2){
//         var audio = new Audio('sounds/snare.mp3' );
//         audio.play();
//         a[key].classList.add('pressed');
//         setTimeout(function(){
//             a[key].classList.remove('pressed');
//         }, 100)
//     }else{
//         var audio = new Audio('sounds/tom-' + (key-2) + '.mp3' );
//         audio.play();
//         console.log(key);
//         a[key].classList.add('pressed');
//         setTimeout(function(){
//             a[key].classList.remove('pressed');
//         }, 100)
//     }
// }

// all the above code works for when you click the button or they listen for the click event, that means In javscript you can use different stones to kill jst a bird

/*
    The uncommented code above is the currnet wroking code; to get same effect from other code above, just comment on the current working code and uncomment any of the commented


    N.B There are three different codes above that does exactly same work
*/



// Detecting Keyboard press

document.addEventListener('keypress', function(e){
    makeSoundOnKeyPress(e.key);

    buttonAnimation(e.key);
});


var w = document.getElementById('dd').classList

w = w[0];


function makeSoundOnKeyPress(press){
    switch (press){
        case w:
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case 'a':
            var kick_bass = new Audio('sounds/kick-bass.mp3');
            kick_bass.play();
            break;

        case 's':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        
        case 'd':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case 'j':
            var tom1 = new Audio('sounds/tom-2.mp3');
            tom1.play();
            break;

        case 'k':
            var tom1 = new Audio('sounds/tom-3.mp3');
            tom1.play();
            break;

        case 'l':
            var tom1 = new Audio('sounds/tom-4.mp3');
            tom1.play();
            break;
    }
}


function buttonAnimation(currentKey){

    var activeButton = document.querySelector('.' + currentKey);

    var buttonClass = activeButton.classList;

    buttonClass.add('pressed');

    setTimeout(function(){
        buttonClass.remove('pressed');
    }, 100)


}

