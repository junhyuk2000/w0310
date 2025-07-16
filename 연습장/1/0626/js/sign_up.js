const signUpBox = document.querySelectorAll('.sign_up_box');
const btn = document.querySelector('.btn');
const stepBar = document.querySelectorAll('.step_bar');
const red = document.querySelector('.input_red');
const green = document.querySelector('.input_green');


let i = 0;
let idx = 0;

//버튼 이벤트
btn.addEventListener('click',()=>{
    if(!validateStep(i)) return;

    if(i === signUpBox.length-1){
        saveUserInfo();
       window.location.href = "/70_pf/steam/sub/sign_up_fin.html"
       return;
    }
    signUpBox[i].classList.remove('active');
    i++;
    signUpBox[i].classList.add('active');
    stepShow();

});

// 스텝바 이벤트
const stepShow = ()=>{
    stepBar[idx].classList.remove('now_step');
    idx = (idx+1) % stepBar.length;
    stepBar[idx].classList.add('now_step');
}

// form 유효성 검사
const validateStep = (step) => {
    if(step === 0) {
        const state = document.querySelector('#state');
        const date = document.querySelector('#date');
        const agree = document.querySelector('#agree_btn');
        if(state.value === '선택' || !date.value || !agree.checked){
            alert('모든 정보를 입력해주세요.');
            return false;
        }
    }
    
    if(step === 1) {
        const firstName = document.querySelector('#first_name');
        const lastName = document.querySelector('#last_name');
        const email = document.querySelector('#email');
        const tel = document.querySelector('#tel');

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const telPattern = /^\d{3}-\d{4}-\d{4}$/;

        if(!firstName.value || !lastName.value || !email.value || !tel.value) {
            alert('모든 정보를 입력해주세요.');
            return false;
        }
        if(!emailPattern.test(email.value)){
            alert('이메일 형식을 다시 확인해주세요.');
            return false;
        }
        if(!telPattern.test(tel.value)){
            alert('전화번호 형식을 다시 확인해주세요');
            return false;
        }
        if(emailPattern.test(email.value)){
            email.style.border = '1px solid green';
        } else {
            email.style.border = '1px solid red';
        }

        email.value.addEventListener('change',()=>{
            if(!emailPattern.test(email.value)){
                email.classList.add('input_red');
            } else {
                email.classList.add('input_green');
            }
        })
    }
    
    if(step === 2) {
        const userName = document.querySelector('#Username');
        const passWord = document.querySelectorAll('.pw');

        const idPattern = /^[a-zA-Z][a-zA-Z0-9]{9,23}$/;
        const pwPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

        if(!userName.value || !passWord[0].value || !passWord[1].value){
            alert('모든 정보를 입력해주세요.');
            return false;
        }
        if(!idPattern.test(userName.value)){
            alert('아이디 형식을 다시 확인해주세요.');
            return false;
        }
        if(!pwPattern.test(passWord[0].value)){
            alert('비밀번호 형식을 다시 확인해주세요.');
            return false;
        }
        if(!pwPattern.test(passWord[1].value)){
            alert('비밀번호 형식을 다시 확인해주세요.');
            return false;
        }
        if(passWord[0].value !== passWord[1].value){
            alert('입력하신 비밀번호가 서로 다릅니다.');
            return false;
        }
    }
    return true;
};




// 로컬스토리지

const saveUserInfo = () =>{
    const data = {
        state : document.querySelector('#state').value ,
        date : document.querySelector('#date').value ,
        agree : document.querySelector('#agree_btn').checked ,
        lastName : document.querySelector('#last_name').value ,
        firsName : document.querySelector('#first_name').value ,
        email : document.querySelector('#email').value ,
        tel : document.querySelector('#tel').value ,
        userName : document.querySelector('#Username').value ,
        passWord : document.querySelectorAll('.pw')[0].value ,
    }
    const userList = JSON.parse(localStorage.getItem('signUpData')) || [];

    userList.push(data);

    localStorage.setItem('signUpData',JSON.stringify(userList));
};


