alert("자바스크립트 연결 성공 !!");

var wrapper = document.querySelector('#wrapper'); //wrapper 객체 '#'=id,'.'=class 
// bom > dom > 컴퍼넌트

wrapper.innerHTML = '<h1>spa 시작</h1>' //컴퍼넌트에 html 집어넣기
+'<div id="target">삭제할 내용 </div>'
+'<button id="btn">지워버리자</button>'
+'<button id="btn2">추가하자</button>';

var btn = document.querySelector('#btn'); //id로 접근해서 변수 받아오기
var target = document.querySelector('#target'); //id로 접근해서 변수 받아오기
btn.addEventListener('click', function(){   // 버튼에 이벤트 
    //alert('버튼 클릭');
    //wrapper.innerHTML =''; // wrapper 컴퍼넌트에 html 지우기
    target.innerHTML='';    // target 컴퍼넌트에 html 지우기
});
var btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', function(){
    var temp = document.createTextNode('새로 추가됨');   // 
    target.appendChild(temp);
});
