// input number maxlength 제한 함수
const userPw1 = document.getElementById("new_userPw1");
const userPw2 = document.getElementById("new_userPw2");
const pwWrong = document.querySelector(".pwWrong");

function init() {
    if(userPw1.value !== userPw2.value) {
        pwWrong.innerHTML = "처음 입력하신 비밀번호와 동일하게 입력해주세요.";
    } else {
        pwWrong.innerHTML = "";
    }
}
setInterval(init, 1000);

function numberMaxLength(e){
    if(e.value.length > e.maxLength){
        e.value = e.value.slice(0, e.maxLength);
    }
}


function CheckAll(){
    let checkedAll = document.getElementById("CheckedAll");
    let checkBox = document.getElementsByName("checkbox");

    if(checkedAll.checked === true){
        for(let i = 0; i < checkBox.length; i++){
            checkBox[i].checked = true;
        }
    } else {
        for(let i =0; i < checkBox.length; i++){
            checkBox[i].checked = false;
        }
    }
}

document.getElementById("CheckedAll").addEventListener("click", CheckAll);


const signUpSubmit = document.querySelector(".sign_up_btn");

signUpSubmit.addEventListener("click", function(){
    location.href="Sign_Up_Success.html";
});