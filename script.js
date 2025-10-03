setInterval(() => {
    let d = new Date();
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();

    let hrotation = 30 * htime + mtime / 2; // 30° per hour + half a degree per min
    let mrotation = 6 * mtime;             // 6° per min
    let srotation = 6 * stime;             // 6° per sec

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

}, 1000);
