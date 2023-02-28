const btn = document.getElementById('menubtn');
const sidparLeft = document.getElementById('sidpar');
btn.addEventListener('click',() => {
    btn.classList.toggle('active');
    sidparLeft.classList.toggle('active');

});

