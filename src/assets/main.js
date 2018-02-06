const main = function(){
    // mobile navigation
      let mobile = false;
      document.querySelector('.mobile').addEventListener('click', (e) => {
        if(!mobile){
          document.querySelector('.mobile-menu').style.display = "block";
          mobile = true;
          e.stopPropagation();
        }else{
          document.querySelector('.mobile-menu').style.display = "none";
          mobile = false;
        }
      });
  
      // video
      let video = document.getElementById('top-video');
      let image = document.getElementById('bg-image');
      document.getElementById('play-button').addEventListener('click', (e) => {
        if(video.paused){
          image.style.display = "none";
          video.style.display = "block";
          e.target.innerHTML = "<i class='fa fa-pause margin-right-20' aria-hidden='true'></i> PAUSE TRAILER";
          video.play();
        }else{
          e.target.innerHTML = "<i class='fa fa-play margin-right-20' aria-hidden='true'></i> PLAY TRAILER";
          video.pause();
        } 
        
      });
    console.log("hello world") 
  };
export default main