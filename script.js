console.log("Welcome to soptify");

//initialise the index
let songIndex=0;
let audioElement=new Audio("songs/1.mp3");
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songsItem=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"Salam-e-Ishq", filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"fagshsh Salam-e-Ishq", filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Salam-e-Ishq", filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"qty4y4y Salam-e-Ishq", filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"sgge Salam-e-Ishq", filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"Salam-e-Ishq", filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"agrhh Salam-e-Ishq", filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"Salam-e-Ishq", filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName:"agggrgSalam-e-Ishq", filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
    {songName:"agggrgSalam-e-Ishq", filePath:"songs/10.mp3",coverPath:"covers/10.jpg"},
]

songsItem.forEach((Element,i)=>{
    // console.log(Element,i);
    Element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    Element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    // Element.getElementsByClassName("timeStamp")[0].innerText=
})

// audioElement.play;
//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        console.log("Audio is Playing");
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle") ;masterPlay.classList.add("fa-play-circle");
        gif.style.opacity=0;
    }

});

//listen to events
audioElement.addEventListener('timeupdate', ()=>{
    // console.log("TimeUpadate");
    // update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element)=>{
        Element.classList.remove('fa-pause');
        Element.classList.add('fa-play');

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element)=>{
    Element.addEventListener('click', (e)=>{
        // console.log(e.target);
        makeAllPlays();
        index=parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src='songs/${index}+1.mp3';
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
})