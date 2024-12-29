const btn = document.getElementById('btn');
const navbar = document.querySelector('.navbar');
const menuBtn = document.getElementById('bar'); // Correctly reference the menu button

let currentMode = 'light'; // Keep track of the mode

// Toggle dark and light mode on button click
btn.onclick = () => {
    if (currentMode === 'light') {
        currentMode = 'dark';
        document.body.style.backgroundColor = '#1c1c1c'; // Dark mode background
        btn.style.backgroundColor = '#ffffff'; // Button style in dark mode
        btn.style.color = '#000000'; // Button text color
    } else {
        currentMode = 'light';
        document.body.style.backgroundColor = 'white'; // Light mode background
        btn.style.backgroundColor = '#000000'; // Button style in light mode
        btn.style.color = '#ffffff'; // Button text color
    }
    console.log(currentMode); // Log the current mode
};

// Toggle mobile menu
menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});