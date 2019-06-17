package com.bitcamp.web.controller;

import com.bitcamp.web.domain.CustomerDTO;
import com.bitcamp.web.service.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * CustomerController
 */
//@Controller soap방식
@RestController
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

    @RequestMapping("/login")
    public String login(){
        customer.setCustomerId("bit01");
        customer.setPassword("1234");
        CustomerDTO response = customerService.login(customer);
        if (response!= null) {
            System.out.println("로그인 성공");
        }else{
            System.out.println("로그인 실패");
        }
        
        return null;

    }


    
}