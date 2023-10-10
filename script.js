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

function playVideo(videoSrc, primaryAction, event) {
    event.preventDefault();

    const videoPlayer = document.getElementById('videoPlayer');
    const source = videoPlayer.querySelector('source');
    
    // Get all buttons in the current scene
    const allButtons = event.target.closest('ul').querySelectorAll('a');
    allButtons.forEach(button => {
        // If the current button in the loop is the one clicked, remove the 'faded' class
        if(button === event.target) {
            button.classList.remove('faded');
        } else { // Otherwise, add the 'faded' class to fade it
            button.classList.add('faded');
        }
    });

    source.src = videoSrc;
    videoPlayer.load();
    videoPlayer.play();    

    let secondaryButtonsContainer; // Reference to the container holding secondary buttons
    //const secondaryButtonsContainer = document.getElementById('kitchen-secondary-buttons'); // Make sure this line exists
    //document.getElementById('step2-container').style.display = 'flex';
    
    // If a primary action is provided, then set secondary buttons
    if(primaryAction) {
        // Choose the right set of secondary buttons based on scene and primary action
        if (primaryAction.startsWith('kitchen')) {
            secondaryButtonsContainer = document.getElementById('kitchen-secondary-buttons');
            document.getElementById('step2-container').style.display = 'flex';
	
	    // Reset content of secondary buttons
	    secondaryButtonsContainer.innerHTML = '';

	    // Determine the secondary buttons based on primary action
	    if (primaryAction === 'kitchen_wash') {
		secondaryButtonsContainer.innerHTML = `
		    <li><a href="#" onclick="playVideo('materials/Kitchen_wash_bowl.mp4', null, event);">Wash bowl</a></li>
		    <li><a href="#" onclick="playVideo('materials/Kitchen_wash_water.mp4', null, event);">Shut off water</a></li>`;
	    } else if (primaryAction === 'kitchen_pick') {
		secondaryButtonsContainer.innerHTML = `
		    <li><a href="#" onclick="playVideo('materials/Kitchen_bowl_carrot.mp4', null, event);">Put carrots in bowl</a></li>
		    <li><a href="#" onclick="playVideo('materials/Kitchen_bowl_down.mp4', null, event);">Put bowl down</a></li>`;
	    } else if (primaryAction === 'kitchen_cut') {
		secondaryButtonsContainer.innerHTML = `
		    <li><a href="#" onclick="playVideo('materials/Kitchen_carrot_clean.mp4', null, event);">Wash cutting board</a></li>
		    <li><a href="#" onclick="playVideo('materials/Kitchen_carrot_wash.mp4', null, event);">Wash carrots</a></li>`;
	    } else if (primaryAction === 'kitchen_dry') {
		secondaryButtonsContainer.innerHTML = `
		    <li><a href="#" onclick="playVideo('materials/Kitchen_dry_table.mp4', null, event);">Wipe table</a></li>
		    <li><a href="#" onclick="playVideo('materials/Kitchen_dry_sink.mp4', null, event);">Wash carrots</a></li>`;
	    }

	    // Show the secondary buttons
	    secondaryButtonsContainer.style.display = 'block';
	} else if (primaryAction.startsWith('uncover')) {
            secondaryButtonsContainer = document.getElementById('uncover-secondary-buttons');
            document.getElementById('uncover-step2-container').style.display = 'flex';
            secondaryButtonsContainer.innerHTML = '';
            if (primaryAction === 'uncover_spider') {
                secondaryButtonsContainer.innerHTML = `
                    <li><a href="#" onclick="playVideo('materials/spider_touch.mp4', null, event);">Touch spider with hand</a></li>
                    <li><a href="#" onclick="playVideo('materials/spider_paper.mp4', null, event);">Put paper under spider</a></li>
                `;
            } else if (primaryAction === 'uncover_pen') {
                secondaryButtonsContainer.innerHTML = `
                    <li><a href="#" onclick="playVideo('materials/pen_pinch.mp4', null, event);">Pinch pen</a></li>
                    <li><a href="#" onclick="playVideo('materials/pen_blue.mp4', null, event);">Put another blue pen</a></li>
                    <li><a href="#" onclick="playVideo('materials/pen_black.mp4', null, event);">Put another black pen</a></li>
                `;		
	    } else if (primaryAction === 'uncover_toothpaste') {
                secondaryButtonsContainer.innerHTML = `
                    <li><a href="#" onclick="playVideo('materials/toothpaste_pick.mp4', null, event);">Pickup toothpaste</a></li>
                    <li><a href="#" onclick="playVideo('materials/toothpaste_left.mp4', null, event);">Slide toothpaste to the left</a></li>
                `;		
	    } else if (primaryAction === 'uncover_plate') {
                secondaryButtonsContainer.innerHTML = `
                    <li><a href="#" onclick="playVideo('materials/plate_apple.mp4', null, event);">Put apple on plate</a></li>
                    <li><a href="#" onclick="playVideo('materials/plate_push.mp4', null, event);">Push plate further away</a></li>
                `;		
	    } else if (primaryAction === 'uncover_bottle') {
                secondaryButtonsContainer.innerHTML = `
                    <li><a href="#" onclick="playVideo('materials/bottle_right.mp4', null, event);">Move bottle to the right</a></li>
                    <li><a href="#" onclick="playVideo('materials/bottle_cup.mp4', null, event);">Put a cup next to the bottle</a></li>
                `;		
	    } else if (primaryAction === 'uncover_pickup') {
                secondaryButtonsContainer.innerHTML = `
                    <li><a href="#" onclick="playVideo('materials/pickup_wipe.mp4', null, event);">Wipe the floor</a></li>
                    <li><a href="#" onclick="playVideo('materials/pickup_walk.mp4', null, event);">Walk a few steps</a></li>
                `;		
	    }
	    
	    secondaryButtonsContainer.style.display = 'block';
	}
    }
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

    const kitchenThumbnail = document.querySelector('.scene-selection video[src="materials/cut_carrot-final.mp4"]');
    const switchThumbnail = document.querySelector('.scene-selection video[src="materials/press_left-final.mp4"]');
    const uncoverThumbnail = document.querySelector('.scene-selection video[src="materials/uncover_pen-final.mp4"]');
    const ggThumbnail = document.querySelector('.scene-selection video[src="materials/gg_left.mp4"]');
    const scThumbnail = document.querySelector('.scene-selection video[src="materials/sc_left.mp4"]');
       
    
    if (scene === 'kitchen') {
        source.src = 'materials/cut_carrot-final.mp4'; // Load the initial video for kitchen scene
        kitchenButtons.style.display = 'flex';
        switchButtons.style.display = 'none';
	uncoverButtons.style.display = 'none';
	ggButtons.style.display = 'none';
	scButtons.style.display = 'none';
        kitchenThumbnail.classList.remove('faded');
        switchThumbnail.classList.add('faded');
        uncoverThumbnail.classList.add('faded');
	ggThumbnail.classList.add('faded');
	scThumbnail.classList.add('faded');
    } else if (scene === 'switch') {
        source.src = 'materials/press_left-final.mp4'; // Load the initial video for switch scene
        kitchenButtons.style.display = 'none';
        switchButtons.style.display = 'flex';
	uncoverButtons.style.display = 'none';
	ggButtons.style.display = 'none';
	scButtons.style.display = 'none';
        kitchenThumbnail.classList.add('faded');
        switchThumbnail.classList.remove('faded');
        uncoverThumbnail.classList.add('faded');
	ggThumbnail.classList.add('faded');
	scThumbnail.classList.add('faded');
    } else if (scene === 'uncover') {
        source.src = 'materials/uncover_pen-final.mp4'; // Load the initial video for switch scene
        kitchenButtons.style.display = 'none';
        switchButtons.style.display = 'none';
	uncoverButtons.style.display = 'flex';
	ggButtons.style.display = 'none';
	scButtons.style.display = 'none';
        kitchenThumbnail.classList.add('faded');
        switchThumbnail.classList.add('faded');
        uncoverThumbnail.classList.remove('faded');
	ggThumbnail.classList.add('faded');
	scThumbnail.classList.add('faded');
    } else if (scene === 'gg') {
        source.src = 'materials/gg_left.mp4'; // Load the initial video for switch scene
        kitchenButtons.style.display = 'none';
        switchButtons.style.display = 'none';
	uncoverButtons.style.display = 'none';
	ggButtons.style.display = 'flex';
	scButtons.style.display = 'none';
        kitchenThumbnail.classList.add('faded');
        switchThumbnail.classList.add('faded');
        uncoverThumbnail.classList.add('faded');
	ggThumbnail.classList.remove('faded');
	scThumbnail.classList.add('faded');	
    } else if (scene === 'sc') {
        source.src = 'materials/sc_left.mp4'; // Load the initial video for switch scene
        kitchenButtons.style.display = 'none';
        switchButtons.style.display = 'none';
	uncoverButtons.style.display = 'none';
	ggButtons.style.display = 'none';
	scButtons.style.display = 'flex';
        kitchenThumbnail.classList.add('faded');
        switchThumbnail.classList.add('faded');
        uncoverThumbnail.classList.add('faded');
	ggThumbnail.classList.add('faded');
	scThumbnail.classList.remove('faded');	
    }
    
    
    videoPlayer.load(); // This loads the new video but doesn't play it.
}
