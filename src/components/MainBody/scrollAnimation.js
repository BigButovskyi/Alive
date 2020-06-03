export let sliderHandler = (position, isNext) => {
    const SCROLLCOEF = getCoef(position, isNext);
    if (SCROLLCOEF !== 0) {
        let html = document.documentElement;
        let totalTime = 600;
        let easingPower = 3;
        let timeInterval = 1; //in ms
        let scrollPosition = Math.round(html.scrollTop);
        scrollPosition = (scrollPosition === 0)? 1:scrollPosition;
        let timeLeft = totalTime;
        let scrollByPixel = setInterval(() => {
            let percentSpent = (totalTime - timeLeft) / totalTime;
            if (timeLeft >= 0) {
                let newScrollPosition = scrollPosition * (1 - SCROLLCOEF * easeInOut(percentSpent, easingPower));
                html.scrollTop = newScrollPosition;
                timeLeft--;
            } else {
                clearInterval(scrollByPixel);
            }
        }, timeInterval);
    }
};

let getCoef = (position, isNext) => {
    if (position === 1 && isNext) {
        return -(window.innerHeight - 1);
    } else if (position === 2) {
        if (isNext) {
            return -1;
        } else {
            return 1;
        }
    } else if (position === 3 && (!isNext)) {
        return 0.5;
    }

    return 0;
};

let easeInOut = (t, power) => {
    if (t < 0.5) {
        return 0.5 * Math.pow(2 * t, power);
    } else {
        return 0.5 * (2 - Math.pow(2 * (1 - t), power));
    }
}