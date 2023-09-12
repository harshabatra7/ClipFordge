const SignUpBtnLink = document.querySelector('.SignUpbtnlink');
const SignInBtnLink = document.querySelector('.SignInbtnlink');
const wrapper = document.querySelector('.wrapper');

SignUpBtnLink.addEventListener('click',() => {
    wrapper.classList.toggle('active');
});

SignInBtnLink.addEventListener('click',() => {
    wrapper.classList.toggle('active');
});