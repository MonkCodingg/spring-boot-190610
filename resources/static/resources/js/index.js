// use
var app =  {
    $wrapper : $wrapper = document.querySelector('#wrapper'),
    init : init
    
};

var customer = {
    join_form : join_form,  //C
    join : join,            //C        
    login_form : login_form,
    login : login,
    mypage : mypage,
    count : count,
    update_form : update_form,
    update : update,
    remove : remove
}

function init(){
        
        $wrapper.innerHTML = customer.login_form();
        
        document.querySelector('#join-btn')
        .addEventListener('click',()=>{
            $wrapper.innerHTML = customer.join_form();
            document.getElementById('confirm-btn')
            .addEventListener('click', e=>{
                e.preventDefault();
                customer.join();
            });
        });
        
        document.querySelector('#login-btn')
        .addEventListener('click',(e)=>{
                e.preventDefault(); //디폴트값을 막고 이 이벤트를 걸기.
                
                customer.login();
        }); 
}


function join(){
    let xhr = new XMLHttpRequest();
    let data = { //DTO와 속성값을 맞춰준다.
        customerId : document.getElementById('customerId').value, 
        customerName : document.getElementById('customerName').value, 
        password : document.getElementById('password').value,
        ssn : document.getElementById('ssn').value,
        address : document.getElementById('address').value,
        city : document.getElementById('city').value,
        postalcode : document.getElementById('postalcode').value,
        phone : document.getElementById('phone').value
    };
    

    xhr.open('POST','customers',true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload=()=>{
        if(xhr.readyState==4 && xhr.status==200){
            let d = JSON.parse(xhr.responseText);//DTO -> JSON
            alert(d.result);
            if(d.result==='SUCCESS'){
                alert('회원가입 성공 : ' + d.result);
                // 로그인 폼..
                $wrapper.innerHTML = customer.login_form();
            }else{
                alert('회원가입 실패');
            }
            
        }else{
            alert('AJAX실패');
        }
    };
    xhr.send(JSON.stringify(data));
}

function count(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'customers/count', true);
    xhr.onload=()=>{
        if(xhr.readyState===4 && xhr.status === 200){
            alert('성공');
            let wrapper = document.querySelector('#wrapper');
            wrapper.innerHTML = '총 고객수 : <h1>'+xhr.responseText+'</h1>'
        }
    }
    xhr.send();
}
 
function mypage(x){
    let customer = x;
    alert('마이페이지로 넘어온 겍체명 :' +x.customerName);
    return '아이디<br>'
    +'<span id="customerId" name="customerId">'+x.customerId+'</span><br>'
    +'	비밀번호<br>'
    +'	<span id="password" name="password">'+x.password+'</span><br>'
    +'	이름<br>'
    +'	<span id="customerName" name="customerName">'+x.customerName+'</span><br>'
    +'	주민번호<br>'
    +'	<span id="ssn" name="ssn">'+x.ssn+'</span><br>'
    +'	도시<br>'
    +'	<span id="city" name="city">'+x.city+'</span><br>'
    +'	주소<br>'
    +'	<span id="address" name="address">'+x.address+'</span><br>'
    +'	우편번호<br>'
    +'	<span id="postalcode" name="postalcode">'+x.postalcode+'</span><br>'
    +'	전화번호<br>'
    +'	<span id="phone" name="phone">'+x.phone+'</span><br>'
    +'<br><br>'
    +'	<input id="update-btn" type="submit" value="수정">'
    ;
}

function login_form(){
return '<form action="/action_page.php">'
+'  First name:<br>'
+'  <input type="text" id="customerId" name="customerId">'
+'  <br>'
+'  Last name:<br>'
+'  <input type="text" id="password" name="password">'
+'  <br><br>'
+'  <input id="login-btn" type="button" value="LOGIN">'
+'  <input id="join-btn" type="button" value="JOIN">'
+'</form> ';
}

function join_form(){
return '<form>아이디<br>'
+'	<input type="text" id="customerId" name="customerId"><br>'
+'	비밀번호<br>'
+'	<input type="password" id="password" name="password"><br>'
+'	이름<br>'
+'	<input type="text" id="customerName" name="customerName"><br>'
+'	주민번호<br>'
+'	<input type="text" id="ssn" name="ssn"><br>'
+'	도시<br>'
+'	<input type="text" id="city" name="city"><br>'
+'	주소<br>'
+'	<input type="text" id="address" name="address"><br>'
+'	우편번호<br>'
+'	<input type="text" id="postalcode" name="postalcode"><br>'
+'	전화번호<br>'
+'	<input type="text" id="phone" name="phone"><br>'
+'<br><br>'
+'	<input id="confirm-btn" type="submit" value="확인">'
+'	<input id="cancel-btn" type="reset" value="취소">'
+'</form>';
}
function update_form(x){
    let customer = x;
    return '<form>아이디<br>'
    +'<span id="customerId" name="customerId">'+x.customerId+'</span><br>'
    +'	비밀번호<br>'
    +'	<span id="password" name="password">'+x.password+'</span><br>'
    +'	이름<br>'
    +'	<span id="customerName" name="customerName">'+x.customerName+'</span><br>'
    +'	주민번호<br>'
    +'	<span id="ssn" name="ssn">'+x.ssn+'</span><br>'
    +'	도시<br>'
    +'	<input type="text" id="city" name="city" value='+x.city+'></span><br>'
    +'	주소<br>'
    +'	<input type="text" id="address" name="address" value='+x.address+'></span><br>'
    +'	우편번호<br>'
    +'	<input type="text" id="postalcode" name="postalcode" value='+x.postalcode+'></span><br>'
    +'	전화번호<br>'
    +'	<input type="text" id="phone" name="phone" value='+x.phone+'></span><br>'
    +'<br><br>'
    +'	<input id="updateConfirm-btn" type="submit" value="수정확인">'
    +'</form>';

}
function login(){
    id = document.getElementById('customerId').value;
    pass = document.getElementById('password').value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'customers/'+id+'/'+pass, true);
    xhr.onload=()=>{
        if(xhr.readyState=== 4 && xhr.status === 200){
            let d = JSON.parse(xhr.responseText); // DTO->javascript
            alert('로그인 성공 후 이름:'+d.customerName)
            if(d){
                $wrapper.innerHTML = customer.mypage(d);
                //수정버튼
                document.querySelector('#update-btn')
                .addEventListener('click', e=>{
                    e.preventDefault();
                    $wrapper.innerHTML = customer.update_form(d);
                    //수정확인 버튼
                    document.querySelector('#updateConfirm-btn')
                    .addEventListener('click', e=>{
                        e.preventDefault();
                        alert('수정 확인');                     
                        $wrapper.innerHTML = customer.update();
                    })
                });
                
            }else{
                $wrapper.innerHTML = customer.login_form();
            }  
        }
    };
    xhr.send();  
}

function update(){
    
    let xhr = new XMLHttpRequest();
    let data = {
        customerId : document.getElementById('customerId').innerText, 
        customerName : document.getElementById('customerName').innerText, 
        password : document.getElementById('password').innerText,
        ssn : document.getElementById('ssn').innerText,
        address : document.getElementById('address').value,
        city : document.getElementById('city').value,
        postalcode : document.getElementById('postalcode').value,
        phone : document.getElementById('phone').value
    };
    
    xhr.open('PUT','customers/'+data.customerId, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload=()=>{
        if(xhr.readyState===4 && xhr.status === 200){
            let d = JSON.parse(xhr.responseText);
            
            if(d.result==='SUCCESS'){
                alert('회원가입 성공 : ' + d.result);
                // 로그인 폼..
                app.init();
            }else{
                alert('수정 실패');
            }
            
        }else{
            alert('ajax 수정 실패');
        }
    };
    xhr.send(JSON.stringify(data));
}

function remove(){
    let customerId = document.getElementById('customerId');
    let xhr = new XMLHttpRequest();
    id = document.getElementById('customerId').value;
    xhr.open('delete','customers/'+id,true);
    xhr.onload=()=>{
        if(xhr.readyState===4 && xhr.status === 200){
            alert('성공');
            let wrapper = document.querySelector('#wrapper');
            wrapper.innerHTML = ' : <h1>'+xhr.responseText+'</h1>'
        }
    };
    xhr.send();
}
