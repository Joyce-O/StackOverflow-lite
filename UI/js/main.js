const modal = document.querySelector(".modal1");
const open = document.querySelectorAll(".modal");

const switchForm = (event) => {
    if (event.target.id === 'login' || event.target.id === 'toggleLogin') {
        modal.style.display = "block";
        open[0].style.display = 'block';
        open[1].style.display = 'none';
    }
    if (event.target.id === 'join' || event.target.id === 'toggleJoin') {
        modal.style.display = "block";
        open[1].style.display = 'block';
        open[0].style.display = 'none';
    }

};

const closeModal = () => {
    if (closeLogin || closeJoin) {
        modal.style.display = 'none';
    }
    else if (modal) {
        modal.style.display = 'none';
    }
    return;

}

const login = document.querySelector('#login');
const toggleLogin = document.querySelector('#toggleLogin');
const join = document.querySelector('#join');
const toggleJoin = document.querySelector('#toggleJoin');
const closeLogin = document.querySelector("#closeLogin");
const closeJoin = document.querySelector("#closeJoin");

login.addEventListener('click', switchForm);
toggleLogin.addEventListener('click', switchForm);
join.addEventListener('click', switchForm);
toggleJoin.addEventListener('click', switchForm);
closeLogin.addEventListener('click', closeModal);
closeJoin.addEventListener('click', closeModal);
// modal.addEventListener('click', closeModal);

