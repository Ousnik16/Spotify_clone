console.log("Welcome to Spotify")
let songIndex=0;
let audioElement=new Audio('faded.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"Let me Love You", filePath:"songs-1.mp3",coverPath:"cover.jpg"},
    {songName:"Dzanum", filePath:"songs-2.mp3",coverPath:"covers-2.jpg"},
    {songName:"Blinding Lights", filePath:"songs-3.mp3",coverPath:"covers-2.jpg"},
    {songName:"Starboy", filePath:"songs-4.mp3",coverPath:"covers-2.jpg"},
    {songName:"Shape of You", filePath:"songs-5.mp3",coverPath:"covers-2.jpg"},
    {songName:"Mood", filePath:"songs-6.mp3",coverPath:"covers-2.jpg"},
    {songName:"Am Coming Home", filePath:"songs-7.mp3",coverPath:"covers-2.jpg"}
]
songItems.forEach((element,i)=>{
    element.querySelector("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target)
        makeAllPlays();
        songIndexindex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        masterSongName.innerText=songs[songIndex].songName
        audioElement.src='songs-${songindex}.mp3';
        audioElement.currentTime=0;
        audioElement.play()
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>7){
        songIndex=0
    }
    else{
        songIndex+=1;
    }
    audioElement.src='songs-${songindex}.mp3';
    masterSongName.innerText=songs[songIndex].songName
    audioElement.currentTime=0;
    audioElement.play()
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex-=1;
    }
    audioElement.src='songs-${songindex}.mp3';
    masterSongName.innerText=songs[songIndex].songName
    audioElement.currentTime=0;
    audioElement.play()
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})