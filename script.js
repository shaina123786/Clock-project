document.addEventListener("DOMContentLoaded", () => {
    const hour = document.getElementById('hour');
    const minute = document.getElementById('minute');
    const second = document.getElementById('second');
    
    const setHours = document.getElementById('set-hours');
    const setMinutes = document.getElementById('set-minutes');
    const setSeconds = document.getElementById('set-seconds');
    const setTimeButton = document.getElementById('set-time');
    
    let htime = 0, mtime = 0, stime = 0;

    const updateClock = () => {
        let hrotation = 30 * htime + mtime / 2;
        let mrotation = 6 * mtime;
        let srotation = 6 * stime;

        hour.style.transform = `rotate(${hrotation}deg)`;
        minute.style.transform = `rotate(${mrotation}deg)`;
        second.style.transform = `rotate(${srotation}deg)`;
    };

    setTimeButton.addEventListener('click', () => {
        htime = parseInt(setHours.value, 10) || 0;
        mtime = parseInt(setMinutes.value, 10) || 0;
        stime = parseInt(setSeconds.value, 10) || 0;
        updateClock();
    });

    setInterval(() => {
        stime += 1;
        if (stime >= 60) {
            stime = 0;
            mtime += 1;
        }
        if (mtime >= 60) {
            mtime = 0;
            htime += 1;
        }
        if (htime >= 24) {
            htime = 0;
        }
        updateClock();
    }, 1000);
});
