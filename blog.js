const btn = document.getElementById('btn');
        const navbar = document.querySelector('.navbar');
        const menuBtn = document.getElementById('bar'); 
    
        let currentMode = 'light'; 
    
       
        btn.onclick = () => {
            if (currentMode === 'light') {
                currentMode = 'dark';
                document.body.style.backgroundColor = '#1c1c1c'; 
                btn.style.backgroundColor = '#ffffff'; 
                btn.style.color = '#000000';
            } else {
                currentMode = 'light';
                document.body.style.backgroundColor = 'white'; 
                btn.style.backgroundColor = '#000000';
                btn.style.color = '#ffffff';
            }
            console.log(currentMode); 
        };

        menuBtn.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });