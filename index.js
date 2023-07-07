const btn = document.querySelector(".btn")
const ved = document.querySelector(".video-container")
const clse = document.querySelector(".close")
const v = document.querySelector("video")
btn.addEventListener("click", ()=>{
    ved.classList.remove("active")
})

clse.addEventListener("click",()=>{
    ved.classList.add("active")
    v.pause();
    v.currentTime=0;
})