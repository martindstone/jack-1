const everything = {
    shower: {
        image: 'Pug-2.jpg',
        alert: 'Your pug is now clean!',
    },
    feed: {
        image: 'Pug-3.jpg',
        alert: 'Your pug is no longer hungry!',
    },
}

function doActivity(activityName) {
    const el2 = document.querySelector('#myparagraph')
    el2.innerHTML = " "
    const el1 = document.querySelector('#pug');
    el1.src = everything[activityName]['image'];
    window.setTimeout(function () {
        normal(everything[activityName]['alert'])
    }, 3000)
}

function normal(message) {
    const el2 = document.querySelector('#pug');
    el2.src = "Pug-1.jpg";
    alert(message);
    const el1 = document.querySelector('#myparagraph')
    el1.innerHTML = "This is your brand new pug!!! "
}
