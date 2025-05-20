console.log("Hello There")
//initialising the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('MyProgressBar');
let songItem = Array.from(document.getElementsByClassName('songItem'))
let songIcon = Array.from(document.getElementsByClassName('songIcon'))
let nextButton = document.getElementById('NextButton')
let previousButton = document.getElementById('PreviousButton')

// initiallsing the songs 
let songs = [{songName:"Night-Changes", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Hold my hand", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Sanam-Mix", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Ye raate", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"phela", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"phela 2", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Night-Changes", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Night-Changes", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    // {songName:"Night-Changes", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
];
songItem.forEach((element,i)=>{
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName
})

// let audioElement = new Audio('1.mp3')
//playing the music from master play
masterPlay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play')
        masterPlay.classList.add('fa-pause')
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause')
        masterPlay.classList.add('fa-play')
    }
})
//updating the progress bar 
audioElement.addEventListener('timeupdate',()=>{
    progress = ((audioElement.currentTime/audioElement.duration)*100)
    // console.log(progress)
    progressBar.value = progress
})
progressBar.addEventListener("change",()=>{
    audioElement.currentTime = progressBar.value*audioElement.duration/100
})
makeAllPause = ()=>{
    songIcon.forEach(
        (element)=>{
            element.classList.remove('fa-pause')
            element.classList.add('fa-play')
        }
    )
}
songIcon.forEach(
    (element)=>{
        element.addEventListener('click',(e)=>{
            // console.log(e.target)
            makeAllPause()
            Index = parseInt(e.target.id)
            if (Index == songIndex){
                e.target.classList.remove('fa-pause')
                e.target.classList.add('fa-play')
                audioElement.pause()
                masterPlay.classList.remove('fa-pause')
                masterPlay.classList.add('fa-play')

            }
            else{
                songIndex = Index
                e.target.classList.remove('fa-play')
                e.target.classList.add('fa-pause')
                audioElement.src = `songs/${songIndex+1}.mp3`
                audioElement.currentTime = 0
                audioElement.play()
                masterPlay.classList.remove('fa-play')
                masterPlay.classList.add('fa-pause')
            }
        })
    }
)

//working of sideline buttons
nextButton.addEventListener('click',
    ()=>{
        if(songIndex == 7){
            songIndex = 0
            audioElement.src = `songs/${songIndex + 1}.mp3`
            audioElement.currentTime = 0
            audioElement.play()

        }
        else{
            songIndex+=1
            audioElement.src = `songs/${songIndex + 1}.mp3`
            audioElement.currentTime = 0
            audioElement.play()
        }
    }
)
previousButton.addEventListener('click',
    ()=>{
        if (songIndex == 0){
            songIndex = 7
            audioElement.src = `songs/${songIndex+1}.mp3`
            audioElement.currentTime = 0
            audioElement.play()
        }
        else{
            songIndex-=1
            audioElement.src = `songs/${songIndex+1}.mp3`
            audioElement.currentTime = 0
            audioElement.play()
        }

    }
)