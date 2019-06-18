package com.bitcamp.web.controller;

import java.util.HashMap;

import com.bitcamp.web.domain.CustomerDTO;
import com.bitcamp.web.service.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * CustomerController
 */
// @Controller soap방식
@RestController // controller 자식 : 기능 추가될 수록 자식.
@RequestMapping("/customers")
public class CustomerController {
    @Autowired
    CustomerService customerService;
    @Autowired
    CustomerDTO customer;
    
    @RequestMapping("/count")
    public String index() {
        System.out.println("CustomerController count() 경로로 들어왔음");
        int count = customerService.countAll();
        System.out.println("고객의 총인원 : " +count);
        return count+"";
    } 

    @GetMapping("/{customerId}/{password}") // annotation ,메소드에 대한 기능정의
    public CustomerDTO login(@PathVariable("customerId")String id, //객체가 반환값으로(RESRful 방식)
                        @PathVariable("password") String pass){  //메소드 선언(declaration) -> notation

        customer.setCustomerId(id);//메소드가 끝난다. bit01을 필드에 옮기고 사라진다.
        customer.setPassword(pass);// 힙에 있는 dto 인스턴스
        return customerService.login(customer);
    }

    @PostMapping("")
    public HashMap<String,Object> join(@RequestBody CustomerDTO param){ //json과 호환(hashmap)
        System.out.println("=======post mapping========");
        System.out.println(param.getCustomerId());
        System.out.println(param.getPassword());
        System.out.println(param.getCustomerName());
        customerService.addCustomer(param);
        HashMap<String, Object> map = new HashMap<>();
        map.put("result", "SUCCESS");
        return map;
    }
 
}