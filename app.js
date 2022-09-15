function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}
const coin = document.querySelector('#coin');

const avatar = document.querySelector('#player');
avatar.style.top = '100px';

window.addEventListener('keyup', (e) => {        
    if (e.key === 'ArrowDown' || e.key === 'Down'){
        const currTop = extractPos(avatar.style.top);
        avatar.style.top = `${currTop+50}px`;
    }
    else if (e.key === 'ArrowUp' || e.key === 'Up'){
        const currTop = extractPos(avatar.style.top);
        avatar.style.top = `${currTop-50}px`;
    }
    if (e.key === 'ArrowRight' || e.key === 'Right'){
        const currTop = extractPos(avatar.style.left);
        avatar.style.left = `${currTop+50}px`;
        avatar.style.transform = 'scale(1,1)';
    }
    else if (e.key === 'ArrowLeft' || e.key === 'Left'){
        const currTop = extractPos(avatar.style.left);
        avatar.style.left = `${currTop-50}px`;
        avatar.style.transform = 'scale(-1,1)';
    }

    if(isTouching(avatar, coin)) {movecoin()};
});

const extractPos = (pos) => {
    if(!pos) return 100;
    return parseInt(pos.slice(0, -2));
}

const movecoin = () => {
    const x = Math.floor(Math.random() * window.innerHeight);
    const y = Math.floor(Math.random() * window.innerWidth);
    coin.style.top = `${y}px`;
    coin.style.left = `${x}px`;
}

movecoin();