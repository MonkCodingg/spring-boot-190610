package com.bitcamp.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller //어노테이션사용 빈(bean) 등록. 없으면 클래스 상태. 있으면 컨트롤러(역할) 빈이면서 클래스.
public class HomeController {   // 클래스를 선언했다.
    
    @RequestMapping("/") //application.properties 의 prefix에 맵핑
    public String index() {
        System.out.println("루트 URL 경로로 들어왔음");
        
        return "index"; //application.properties 의 suffix에 맵핑
    } 
        
}