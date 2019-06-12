//var app;  //expression이 아님. declaration임

var app = (function(){//IIFE(이파이) 패턴
    let init=function(){ // let 블럭 스코프에 대응한 변수 선언.
        alert("IIFE 성공 !!");
        login_form();
        
    }
    //시블링
    let login_form = function(){
        var wrapper = document.querySelector('#wrapper'); //wrapper 객체 '#'=id,'.'=class 
        // bom > dom > 컴퍼넌트
        wrapper.innerHTML = +'<form action="/action_page.php">'
        +'  First name:<br>'
        +'  <input type="text" name="firstname" value="Mickey">'
        +'  <br>'
        +'  Last name:<br>'
        +'  <input type="text" name="lastname" value="Mouse">'
        +'  <br><br>'
        +'  <input type="button" id="login" value="로그인">'
        +'  <input type="button" id="signUp" value="회원가입">'
        +'</form> ';

        var login = document.querySelector('#login'); //id로 접근해서 변수 받아오기
        var signUp = document.querySelector('#signUp'); //id로 접근해서 변수 받아오기
        login.addEventListener('click', function(){   // 버튼에 이벤트 걸기
            alert('로그인 클릭');
            //wrapper.innerHTML =''; // wrapper 컴퍼넌트에 html 지우기
 //           wrapper.innerHTML='로그인 번튼 후 이동';    // target 컴퍼넌트에 html 지우기
        });
        
        signUp.addEventListener('click', function(){
            alert('회원가입 클릭');
            //wrapper 컴퍼넌트에 회원가입 폼 html 넣기
            wrapper.innerHTML=+'<form action="/action_page.php">'
            +'  id:<br>'
            +'  <input type="text" name="id" >'
            +'  <br>'
            +'  pass:<br>'
            +'  <input type="text" name="pass" >'
            +'  <br>'
            +'  name:<br>'
            +'  <input type="text" name="home" >'
            +'  <br>'
            +'  ssn:<br>'
            +'  <input type="text" name="ssn" >'
            +'  <br>'
            +'  phone:<br>'
            +'  <input type="text" name="phone" >'
            +'  <br>'
            +'  <input type="button" id="signupOk" value="회원가입">'
            +'  <input type="button" id="cancle" value="취소"> '
            +'</form>';

            var signupOK = document.querySelector('#signupOk');
            var cancle = document.querySelector('#cancle');
            signupOk.addEventListener('click', function(){   // 버튼에 이벤트 걸기
                alert('회원가입 완료 클릭');
//                wrapper.innerHTML =''; // wrapper 컴퍼넌트에 html 지우기
//                wrapper.innerHTML='로그인 번튼 후 이동';    // target 컴퍼넌트에 html 지우기
            });
 //           cancle.addEventListener()
        });
    }
    return {init : init}; // <--클로저. function은 인풋, 아웃풋 
    //맨마지막 단계 -> 클로저(마무리)라고 한다.
    //init의 값을app에 전달해 준다.
    //json 
})(); // '자바스크립트 객체'라 부름. DOM객체가 아님.
