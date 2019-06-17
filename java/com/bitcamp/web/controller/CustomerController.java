package com.bitcamp.web.controller;

import com.bitcamp.web.domain.CustomerDTO;
import com.bitcamp.web.service.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * CustomerController
 */
//@Controller soap방식
@RestController //controller 자식 : 기능 추가될 수록 자식.
public class CustomerController {
    @Autowired CustomerService customerService;
    @Autowired CustomerDTO customer;
    @RequestMapping("/count")
    public String index() {
        System.out.println("CustomerController count() 경로로 들어왔음");
        int count = customerService.countAll();
        System.out.println("고객의 총인원 : " +count);
        return count+"";
    } 

    @RequestMapping("/login/{customerId}/{password}") // annotation ,메소드에 대한 기능정의
    public String login(@PathVariable("customerId")String id, 
                        @PathVariable("password")String pass){  //메소드 선언(declaration) -> notation
        System.out.println("AJAX로 넘어온 ID :"+id);
        System.out.println("AJAX로 넘어온 PWD :"+pass);

        customer.setCustomerId(id);//메소드가 끝난다. bit01을 필드에 옮기고 사라진다.
        customer.setPassword(pass);// 힙에 있는 dto 인스턴스
//       CustomerDTO t = customerService.login(customer);
//        System.out.println("DB에서 넘어온 이름: "+ t.getCustomerName());
//        String result = "";
        
//        if (t.getCustomerName().equals("")) {
//            System.out.println("로그인 성공");
//           result = "SUCCESS";
//        }else{
//            System.out.println("로그인 실패");
//            result = "FAIL";
//        }
//        return result;
        //삼항 연산자
//        return (!t.getCustomerName().equals("")) ? "SUCCESS" : "FAIL";
        System.out.println("5454545454545");
        return (customerService.login(customer)!=null) ? "SUCCESS" : "FAIL";
    }
 
}