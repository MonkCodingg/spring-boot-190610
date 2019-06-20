// use
var app =  {
    $wrapper : $wrapper = document.querySelector('#wrapper'),
    init : init    
};

var customer = {
    join_form : join_form,  
    join : join,                    
    login_form : login_form,
    login : login,
    mypage : mypage,
    mypage_form : mypage_form,
    count : count,
    update_form : update_form,
    update : update,
    remove : remove
};

var employee = {
    login : login,
    customer_list : customer_list,
    admin_login : admin_login
};
var session = {
    set_value : set_value,
    get_value : get_value
};
function set_value(x){
    sessionStorage.setItem(x.name, x.value);
}
function get_value(x){
    return sessionStorage.getItem(x);
}

function init(){
        $wrapper.innerHTML = customer.login_form();

        document.querySelector('#join-btn')
        .addEventListener('click',()=>{
            $wrapper.innerHTML = customer.join_form();
            document.getElementById('confirm-btn').addEventListener('click', e=>{
                e.preventDefault();
                customer.join();
            });
        });

        document.querySelector('#login-btn')
        .addEventListener('click',e=>{
                e.preventDefault(); //디폴트값을 막고 이 이벤트를 걸기.
                alert('로그인 버튼 클릭');
//                customer.login();                
                customer.login({userid : 'customerId',
                                domain : 'customers'
                                });
        });

        document.querySelector('#admin-btn')
        .addEventListener('click',e=>{
                e.preventDefault(); //디폴트값을 막고 이 이벤트를 걸기.
                alert('관리자 버튼 클릭');
                employee.admin_login();
                
        });
  
}

function admin_login(){
    let isAdmin = confirm('관리자 입니까?');
    if(isAdmin){
        let pass = prompt('관리자 번호를 입력하세요?');
        if(pass == 1000){
            employee.customer_list();
        }else{
            alert('입력한 번호가 일치하지 않습니다.');
        }
    }else{
        alert('관리자만 접속이 가능합니다.');
    }
}
function customer_list(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'customers', true);
    xhr.onload=()=>{
        if(xhr.readyState=== 4 && xhr.status === 200){
            let d = JSON.parse(xhr.responseText); // DTO->javascript  
            if(d){
                

            }
        }
    };
    xhr.send(); 
}

function join_form(){
    return '<form>'
    +'아이디<br>'
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

function login_form(){
    return '<form">'
    +'  아이디:<br>'
    +'  <input type="text" id="customerId" name="customerId">'
    +'  <br>'
    +'  비밀번호:<br>'
    +'  <input type="text" id="password" name="password">'
    +'  <br><br>'
    +'  <input id="login-btn" type="button" value="LOGIN">'
    +'  <input id="join-btn" type="button" value="JOIN">'
    +'  <input id="admin-btn" type="button" value="관리자">'
    +'</form> ';
}

function login(x){
    id = document.getElementById(x.userid).value;
    pass = document.getElementById('password').value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', x.domain+'/'+id+'/'+pass, true);
    xhr.onload=()=>{
        if(xhr.readyState=== 4 && xhr.status === 200){
            let d = JSON.parse(xhr.responseText); // DTO->javascript
            alert('세션에 들어간 이름: '+d.customerId)
            session.set_value({'name':'userid','value':d.customerId});
            session.set_value({'name':'username','value':d.customerName});    
            if(d){
                if(x.domain==='customers'){

                    customer.mypage(d);
                }else{
                    employee.customer_list();
                }
                
            }else{
                app.init();
            }  
        }
    };
    xhr.send();  
}

function mypage(x){
    $wrapper.innerHTML = customer.mypage_form(x);

    document.querySelector('#update-btn').addEventListener('click',e=>{
        e.preventDefault();
//        alert('세션테스트' +session.get_value('user'));
        customer.update(x);
    });

    document.querySelector('#remove-btn').addEventListener('click',e=>{
        e.preventDefault();
        alert('탈퇴버튼 클릭 : '+ x.customerId);
       customer.remove(x);   
    });   
}
function mypage_form(x){
    let customer = x;
    return '<h1>'+x.customerName+'마이페이지</h1> <br>'
    +'아이디<br>'
    +'  <span id="customerId" name="customerId">'+x.customerId+'</span><br>'
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
    +'	<input id="update-btn" type="button" value="수 정">'
    +'	<input id="remove-btn" type="button" value="탈 퇴">'
    ;
}

function count(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'customers/count', true);
    xhr.onload=()=>{
        if(xhr.readyState===4 && xhr.status === 200){
            alert('count 성공');
            let wrapper = document.querySelector('#wrapper');
            wrapper.innerHTML = '총 고객수 : <h1>'+xhr.responseText+'</h1>'
        }
    }
    xhr.send();
}

function update_form(x){
    
    return '<form>아이디<br>'
    +'<span id="customerId" name="customerId">'+x.customerId+'</span><br>'
    +'	비밀번호<br>'
    +'	<input type="password" id="password" name="password" value="'+x.password+'"><br>'
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
    +'	<input id="confirm-btn" type="submit" value="확 인">'
    +'	<input id="cancel-btn" type="reset" value="취 소">'
    +'</form>';
}

function update(x){ 
    let wrapper = document.querySelector('#wrapper');
    wrapper.innerHTML = customer.update_form(x);
    alert('수정할 아이디: '+ document.getElementById('customerId').innerText );
    document.getElementById('confirm-btn').addEventListener('click', e=>{
            e.preventDefault();
            let data = {
                customerId : document.getElementById('customerId').innerText, 
                customerName : document.getElementById('customerName').innerText, 
                password : document.getElementById('password').value,
                ssn : document.getElementById('ssn').innerText,
                phone : document.getElementById('phone').value,
                city : document.getElementById('city').value,
                address : document.getElementById('address').value,
                postalcode : document.getElementById('postalcode').value
 
            }
            let xhr = new XMLHttpRequest(); 
            xhr.open('PUT','customers/'+x.customerId, true);
            xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            xhr.onload=()=>{
                if(xhr.readyState===4 && xhr.status === 200){
                    let d = JSON.parse(xhr.responseText);
                    customer.mypage(d);
                }
            };
            xhr.send(JSON.stringify(data));
        });    
}

function remove(x){
    let customer = x;
    alert(customer.customerId);
    let xhr = new XMLHttpRequest();
 
    xhr.open('DELETE','customers/'+customer.customerId, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');    
    xhr.onload=()=>{
        if(xhr.readyState===4 && xhr.status === 200){
            alert('삭제 성공');
            app.init();
        }
    };
    xhr.send();
}
