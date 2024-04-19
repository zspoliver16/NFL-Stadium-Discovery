function displayStadiums() {
    fetch("http://localhost:3000/stadiums")
    .then((resp) => resp.json())
    .then((data) => {
        const imgContainer = document.querySelector('#stadium-image-container');

        data.forEach((stadiumObj) => {
            const card = document.createElement('div');
            card.classList.add('stadium-card');

            const name = document.createElement('h3');
            name.textContent = stadiumObj.name;
            card.appendChild(name);

            const open = document.createElement('h3');
            open.textContent = stadiumObj.opened;
            card.appendChild(open);

            const team = document.createElement('h3');
            team.textContent = stadiumObj.team;
            card.appendChild(team);
            
            const img = document.createElement('img');
            img.src = stadiumObj.image;
            img.setAttribute('id', 'images');
            card.appendChild(img);

            imgContainer.appendChild(card);
        });
    });
};


//* code that I tried to use to consolodate my code more. Reason for not using was because I was getting  a different putcome than I had wanted.*//

// document.addEventListener("DOMContentLoaded", function () {
//     const teams = ['#steelers', '#rams', '#raiders', '#falcons', '#colts', '#cowboys', '#packers', '#lions', '#dolphins', '#chiefs'];

//     function changeBgColor(e) {
//         const newBackgroundColor = e.target;
//         newBackgroundColor.style.backgroundColor = 'orange';
//     }

//     function revertBgColor(e) {
//         const newBackgroundColor = e.target;
//         newBackgroundColor.style.backgroundColor = '';
//     }

//     function alertMe(e) {
//         const newBackgroundColor = e.target;
//         newBackgroundColor.style.backgroundColor = 'lightgrey';
//     }

//     teams.forEach(team => {
//         const newBackgroundColor = document.querySelector('#listed-stadiums');
//         newBackgroundColor.addEventListener("mouseover", changeBgColor);
//         newBackgroundColor.addEventListener("mouseout", revertBgColor);
//         newBackgroundColor.addEventListener('click', alertMe);
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const newBackgroundColor = document.querySelector('#steelers');

    function changeBgColor() {
        newBackgroundColor.style.backgroundColor = 'orange';
    }

    function revertBgColor() {
        newBackgroundColor.style.backgroundColor = '';
    }
    function alertMe() {
        newBackgroundColor.style.backgroundColor = 'lightgrey';
    }

    newBackgroundColor.addEventListener("mouseover", changeBgColor);
    newBackgroundColor.addEventListener("mouseout", revertBgColor);
    newBackgroundColor.addEventListener('click', alertMe);
});

document.addEventListener("DOMContentLoaded", function () {
    const newBackgroundColor = document.querySelector('#rams');

    function changeBgColor() {
        newBackgroundColor.style.backgroundColor = 'orange';
    }

    function revertBgColor() {
        newBackgroundColor.style.backgroundColor = '';
    }
    function alertMe() {
        newBackgroundColor.style.backgroundColor = 'lightgrey';
    }

    newBackgroundColor.addEventListener("mouseover", changeBgColor);
    newBackgroundColor.addEventListener("mouseout", revertBgColor);
    newBackgroundColor.addEventListener('click', alertMe);
});

document.addEventListener("DOMContentLoaded", function () {
    const newBackgroundColor = document.querySelector('#raiders');

    function changeBgColor() {
        newBackgroundColor.style.backgroundColor = 'orange';
    }

    function revertBgColor() {
        newBackgroundColor.style.backgroundColor = '';
    }
    function alertMe() {
        newBackgroundColor.style.backgroundColor = 'lightgrey';
    }

    newBackgroundColor.addEventListener("mouseover", changeBgColor);
    newBackgroundColor.addEventListener("mouseout", revertBgColor);
    newBackgroundColor.addEventListener('click', alertMe);
});

document.addEventListener("DOMContentLoaded", function () {
    const newBackgroundColor = document.querySelector('#falcons');

    function changeBgColor() {
        newBackgroundColor.style.backgroundColor = 'orange';
    }

    function revertBgColor() {
        newBackgroundColor.style.backgroundColor = '';
    }
    function alertMe() {
        newBackgroundColor.style.backgroundColor = 'lightgrey';
    }

    newBackgroundColor.addEventListener("mouseover", changeBgColor);
    newBackgroundColor.addEventListener("mouseout", revertBgColor);
    newBackgroundColor.addEventListener('click', alertMe);
});

document.addEventListener("DOMContentLoaded", function () {
    const newBackgroundColor = document.querySelector('#colts');

    function changeBgColor() {
        newBackgroundColor.style.backgroundColor = 'orange';
    }

    function revertBgColor() {
        newBackgroundColor.style.backgroundColor = '';
    }
    function alertMe() {
        newBackgroundColor.style.backgroundColor = 'lightgrey';
    }

    newBackgroundColor.addEventListener("mouseover", changeBgColor);
    newBackgroundColor.addEventListener("mouseout", revertBgColor);
    newBackgroundColor.addEventListener('click', alertMe);
});

document.addEventListener("DOMContentLoaded", function () {
    const newBackgroundColor = document.querySelector('#cowboys');

    function changeBgColor() {
        newBackgroundColor.style.backgroundColor = 'orange';
    }

    function revertBgColor() {
        newBackgroundColor.style.backgroundColor = '';
    }
    function alertMe() {
        newBackgroundColor.style.backgroundColor = 'lightgrey';
    }

    newBackgroundColor.addEventListener("mouseover", changeBgColor);
    newBackgroundColor.addEventListener("mouseout", revertBgColor);
    newBackgroundColor.addEventListener('click', alertMe);
});

document.addEventListener("DOMContentLoaded", function () {
    const newBackgroundColor = document.querySelector('#packers');

    function changeBgColor() {
        newBackgroundColor.style.backgroundColor = 'orange';
    }

    function revertBgColor() {
        newBackgroundColor.style.backgroundColor = '';
    }
    function alertMe() {
        newBackgroundColor.style.backgroundColor = 'lightgrey';
    }

    newBackgroundColor.addEventListener("mouseover", changeBgColor);
    newBackgroundColor.addEventListener("mouseout", revertBgColor);
    newBackgroundColor.addEventListener('click', alertMe);
});

document.addEventListener("DOMContentLoaded", function () {
    const newBackgroundColor = document.querySelector('#lions');

    function changeBgColor() {
        newBackgroundColor.style.backgroundColor = 'orange';
    }

    function revertBgColor() {
        newBackgroundColor.style.backgroundColor = '';
    }
    function alertMe() {
        newBackgroundColor.style.backgroundColor = 'lightgrey';
    }

    newBackgroundColor.addEventListener("mouseover", changeBgColor);
    newBackgroundColor.addEventListener("mouseout", revertBgColor);
    newBackgroundColor.addEventListener('click', alertMe);
});

document.addEventListener("DOMContentLoaded", function () {
    const newBackgroundColor = document.querySelector('#dolphins');

    function changeBgColor() {
        newBackgroundColor.style.backgroundColor = 'orange';
    }

    function revertBgColor() {
        newBackgroundColor.style.backgroundColor = '';
    }
    function alertMe() {
        newBackgroundColor.style.backgroundColor = 'lightgrey';
    }

    newBackgroundColor.addEventListener("mouseover", changeBgColor);
    newBackgroundColor.addEventListener("mouseout", revertBgColor);
    newBackgroundColor.addEventListener('click', alertMe);
});

document.addEventListener("DOMContentLoaded", function () {
    const newBackgroundColor = document.querySelector('#chiefs');

    function changeBgColor() {
        newBackgroundColor.style.backgroundColor = 'orange';
    }

    function revertBgColor() {
        newBackgroundColor.style.backgroundColor = '';
    }
    function alertMe() {
        newBackgroundColor.style.backgroundColor = 'lightgrey';
    }

    newBackgroundColor.addEventListener("mouseover", changeBgColor);
    newBackgroundColor.addEventListener("mouseout", revertBgColor);
    newBackgroundColor.addEventListener('click', alertMe);
});


const revealBtn = document.querySelector('.reveal-btn')
const hiddenContent = document.querySelector('.hidden-content')

function revealContent() {
    
    if (hiddenContent.classList.contains('reveal-btn')) {
        hiddenContent.classList.remove('reveal-btn');
    } else {
        hiddenContent.classList.add('reveal-btn');
    }
}

revealBtn.addEventListener('click', revealContent);

displayStadiums()