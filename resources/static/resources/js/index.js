//var app;  //expression이 아님. declaration임

var app = (()=>{//IIFE(이파이) 패턴
    let init=()=>{ // let 블럭 스코프에 대응한 변수 선언.
        alert("IIFE 성공 !!");
        login_form();
        
    }
    //시블링 (형제)
    let login_form = ()=>{
        let wrapper = document.querySelector('#wrapper'); //wrapper 객체 '#'=id,'.'=class 
        // bom > dom > 컴퍼넌트
        //id 주는 이유. dom 객체 만들어 select 하려고
        wrapper.innerHTML ='<form action="/action_page.php">'
        +'  Login Id:<br>'
        +'  <input type="text" id="customerId" name="customerId" >'
        +'  <br>'
        +'  Password:<br>'
        +'  <input type="text" id="password" name="password">'
        +'  <br><br>'
        +'  <input id="login-btn"  type="button" value="LOGIN">'
        +'  <input id="join-btn" type="button" value="JOIN">'
        +'</form> ';

        let join_btn = document.querySelector('#join-btn');
        join_btn.addEventListener('click', ()=>{
            join_form();
        });
        let login_btn = document.querySelector('#login-btn');
        login_btn.addEventListener('click', (e)=>{
            
            e.preventDefault();
            alert('로그인 버튼 클릭');
//            count();
//            login();
            //ajax
            id = document.getElementById('customerId').value;
                          
            pass = document.getElementById('password').value;
            alert('40404040');
            let xhr = new XMLHttpRequest(),
                method = 'GET',//가장 빠름
                url = 'login/'+id+'/'+pass;
                
            xhr.open(method, url, true);
            
            xhr.onreadystatechange=()=>{
                if(xhr.readyState===4 && xhr.status === 200){
                    
                    let d = xhr.responseText;
                    if (d==="SUCCESS") {
                        let wrapper = document.querySelector('#wrapper');
                        wrapper.innerHTML = '<h1>마이페이지</h1> '; 
                    }else{
                        let wrapper = document.querySelector('#wrapper');
                        wrapper.innerHTML = '<form action="/action_page.php">'
                        +'  First name:<br>'
                        +'  <input type="text" id="customerId" name="customerId" >'
                        +'  <br>'
                        +'  Last name:<br>'
                        +'  <input type="text" id="password" name="password">'
                        +'  <br><br>'
                        +'  <input id="login-btn"  type="button" value="로그인">'
                        +'  <input id="join-btn" type="button" value="회원가입">'
                        +'</form> ';
                    }
                }
            };
            xhr.send();
        });  
    }
/*
    let login =()=>{
        var xhr = new XMLHttpRequest();
        method = 'GET';
        url= 'login';
        xhr.open(method, url, true);
        xhr.onreadystatechange=()=>{
            if(xhr.readyState === 4 && xhr.status === 200){
                let warapper = document.querySelector('#wrapper');
//                wrapper.innerHTML = '로그인 성공 실패 여부 : <h1>'+xhr.responseText+'</h1>';
                rapper.innerHTML = '마이페이지 ';
            }else{
                wrapper.innerHTML = +'<form action="/action_page.php">'
                +'  First name:<br>'
                +'  <input type="text" id="customerId" name="customerId" value="">'
                +'  <br>'
                +'  Last name:<br>'
                +'  <input type="text" id="password" name="password" value="">'
                +'  <br><br>'
                +'  <input type="button" id="login-btn" value="로그인">'
                +'  <input type="button" id="join-btn" value="회원가입">'
                +'</form> ';

            }
        }
        xhr.send();
    }
*/
    
    let count =()=>{
        var xhr = new XMLHttpRequest();
        method = 'GET';
        url= 'count';
        xhr.open(method, url, true);
        xhr.onreadystatechange=()=>{ // state : 데이터 상태
            if(xhr.readyState===4 && xhr.status === 200){
                alert('성공');
                let wrapper = document.querySelector('#wrapper');
                wrapper.innerHTML = '총 고객수 : <h1>' +xhr.responseText+'</h1>';
            }
        }
        xhr.send();
    }
    
//    let count =()=>{
//        let xkr = new XMLHttpRequest();
//        method = 'GET';
//        url= 'count';
//        xkr.open(method, url, true);
//        xkr.onreadystatechange=()=>{ // state : 데이터 상태
//            if(xkr.readyState===4 && xkr.readyState == 200){
//                alert('성공');
//                let wrapper = document.querySelector('#wrapper');
//                wrapper.innerHTML = '총 고객수 : <h1>' + xkr.responseText+'</h1>'
            
//            }

//        }
//    }

    let join_form = ()=>{
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
