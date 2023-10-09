document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("a[data-scroll]");

    for (const link of links) {
        link.addEventListener("click", clickHandler);
    }

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;
        const navHeight = document.querySelector('nav').offsetHeight;

        scroll({
            top: offsetTop - navHeight, // subtract the nav height here
            behavior: "smooth"
        });
    }
});

function playVideo(videoSrc, event) {
    event.preventDefault();

    const videoPlayer = document.getElementById('videoPlayer');
    const source = videoPlayer.querySelector('source');
    
    source.src = videoSrc;
    videoPlayer.load();
    videoPlayer.play();
}


function chooseScene(scene, event) {
    event.preventDefault();

    const videoPlayer = document.getElementById('videoPlayer');
    const source = videoPlayer.querySelector('source');
    const kitchenButtons = document.getElementById('kitchen-buttons');
    const switchButtons = document.getElementById('switch-buttons');
    const uncoverButtons = document.getElementById('uncover-buttons');
    const ggButtons = document.getElementById('gg-buttons');
    const scButtons = document.getElementById('sc-buttons');
    
    if (scene === 'kitchen') {
        source.src = 'materials/cut_carrot-final.mp4'; // Load the initial video for kitchen scene
        kitchenButtons.style.display = 'flex';
        switchButtons.style.display = 'none';
	uncoverButtons.style.display = 'none';
	ggButtons.style.display = 'none';
	scButtons.style.display = 'none';
    } else if (scene === 'switch') {
        source.src = 'materials/press_left-final.mp4'; // Load the initial video for switch scene
        kitchenButtons.style.display = 'none';
        switchButtons.style.display = 'flex';
	uncoverButtons.style.display = 'none';
	ggButtons.style.display = 'none';
	scButtons.style.display = 'none';	
    } else if (scene === 'uncover') {
        source.src = 'materials/uncover_pen-final.mp4'; // Load the initial video for switch scene
        kitchenButtons.style.display = 'none';
        switchButtons.style.display = 'none';
	uncoverButtons.style.display = 'flex';
	ggButtons.style.display = 'none';
	scButtons.style.display = 'none';
    } else if (scene === 'gg') {
        source.src = 'materials/gg_left.mp4'; // Load the initial video for switch scene
        kitchenButtons.style.display = 'none';
        switchButtons.style.display = 'none';
	uncoverButtons.style.display = 'none';
	ggButtons.style.display = 'flex';
	scButtons.style.display = 'none';	
    } else if (scene === 'sc') {
        source.src = 'materials/sc_left.mp4'; // Load the initial video for switch scene
        kitchenButtons.style.display = 'none';
        switchButtons.style.display = 'none';
	uncoverButtons.style.display = 'none';
	ggButtons.style.display = 'none';
	scButtons.style.display = 'flex';	
    }
    
    
    videoPlayer.load(); // This loads the new video but doesn't play it.
}
