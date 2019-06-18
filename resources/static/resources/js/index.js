//var app;  //expression이 아님. declaration임

var app = (()=>{//IIFE(이파이) 패턴

    let init=()=>{ // let 블럭 스코프에 대응한 변수 선언.기능
        alert("IIFE 성공 !!");
        login_form();
    }
    //시블링 (형제)
    let login_form = ()=>{
    
        app.login_form();
        let join_btn = document.querySelector('#join-btn');
        join_btn.addEventListener('click', ()=>{
            join_form();
        });
        let login_btn = document.querySelector('#login-btn');
        login_btn.addEventListener('click', (e)=>{
            e.preventDefault(); //submit 막기
            alert('로그인 버튼 클릭');
//            count();
//            login();
            //ajax
            id = document.getElementById('customerId').value;
                          
            pass = document.getElementById('password').value;
            
                  
            let xhr = new XMLHttpRequest();//객체 생성, 메모리에 주소 할당해라.
            xhr.open('GET', 'login/'+id+'/'+pass, true);//객체 오픈
            xhr.onload=()=>{ //xhr에 기능 추가. 할당 연산자
                if(xhr.readyState===4 && xhr.status === 200){
  
                    if (xhr.responseText) {
 
                        app.login_success();
                    }else{
                        
                       app.login_form();
                    }
                }
            };
            xhr.send(); // 기능이 생긴 xhr을 보낸다.-> Controller
        });  
    }

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

app.login_success=()=>{
    let wrapper = document.querySelector('#wrapper');
    wrapper.innerHTML = '<h1>마이페이지</h1>'
};
app.login_form=()=>{
    let wrapper = document.querySelector('#wrapper');
    wrapper.innerHTML = '<form action="/action_page.php">'
    +'  Login Id:<br>'
    +'  <input type="text" id="customerId" name="customerId" >'
    +'  <br>'
    +'  Password:<br>'
    +'  <input type="text" id="password" name="password">'
    +'  <br><br>'
    +'  <input id="login-btn"  type="button" value="LOGIN">'
    +'  <input id="join-btn" type="button" value="JOIN">'
    +'</form> ';
};
app.join_form=()=>{
    let wrapper = document.querySelector('#wrapper');
    wrapper.innerHTML ='<form>'
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
};
