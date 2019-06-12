//var app;  //expression이 아님. declaration임

var app = (function(){//IIFE(이파이) 패턴
    let init=function(){ // let 블럭 스코프에 대응한 변수 선언.
        alert("IIFE 성공 !!");
        login_form();
        
    }
    //시블링
    let login_form = function(){
        let wrapper = document.querySelector('#wrapper'); //wrapper 객체 '#'=id,'.'=class 
        // bom > dom > 컴퍼넌트
        wrapper.innerHTML = +'<form action="/action_page.php">'
        +'  First name:<br>'
        +'  <input type="text" name="firstname" value="Mickey">'
        +'  <br>'
        +'  Last name:<br>'
        +'  <input type="text" name="lastname" value="Mouse">'
        +'  <br><br>'
        +'  <input type="button" id="login-btn" value="로그인">'
        +'  <input type="button" id="join-btn" value="회원가입">'
        +'</form> ';

        
        let join_btn = document.querySelector('#join-btn');
        join_btn.addEventListener('click', function(){
            join_form();
        });
            
        
    }

    let join_form = function(){
        let wrapper = document.querySelector('#wrapper');
        wrapper.innerHTML = '<form>'
        +'	ID<br>'
        +'	<input type="text" name="id"><br>'
        +'	PW<br>'
        +'	<input type="password" name="pw"><br>'
        +'	이름<br>'
        +'	<input type="text" name="name"><br>'
        +'	주민번호<br>'
        +'	<input type="password" name="ssn"><br>'
        +'	전화번호<br>'
        +'	<input type="text" name="phone"><br><br>'
        +'	<input id="btn3" type="submit" value="확인">'
        +'	<input id="btn4" type="reset" value="취소">'
        +'</form>';
    }
    return {init : init}; // <--클로저. function은 인풋, 아웃풋 
    //맨마지막 단계 -> 클로저(마무리)라고 한다.
    //init의 값을app에 전달해 준다.
    //json 
})(); // '자바스크립트 객체'라 부름. DOM객체가 아님.
