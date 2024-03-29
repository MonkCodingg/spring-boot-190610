package com.bitcamp.web.controller;

import java.util.HashMap;
import com.bitcamp.web.common.util.PageProxy;
import com.bitcamp.web.common.util.Printer;
import com.bitcamp.web.domain.CustomerDTO;
import com.bitcamp.web.service.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

/**
 * CustomerController
 */
// @Controller soap방식
@RestController // controller 자식 : 기능 추가될 수록 자식.
@RequestMapping("/customers")
public class CustomerController {
    @Autowired CustomerService customerService;
    @Autowired CustomerDTO customer;
    @Autowired Printer p;
    @Autowired PageProxy pxy;
    
    @PostMapping("")
    public HashMap<String,Object> join(@RequestBody CustomerDTO param){ //json과 호환(hashmap)
        System.out.println("=======Post mapping========");
        System.out.println(param.getCustomerId());
        System.out.println(param.getPassword());
        System.out.println(param.getCustomerName());
        customerService.addCustomer(param);
        HashMap<String, Object> map = new HashMap<>();
        map.put("result", "SUCCESS");
        return map;
    }
   
    @GetMapping("/page/{pageNum}")
    public HashMap<String, Object> list(@PathVariable String pageNum){
        
        //totalCount, page_num, page_size, block_size
        HashMap<String, Object> map = new HashMap<>();
        map.put("totalCount", customerService.countAll()); //반환값 int
        map.put("page_num", pageNum);
        map.put("page_size", "5");
        map.put("block_size", "5");
        pxy.execute(map);//totalCount, page_num, page_size, block_size 값으로 페이지네이션 값 생성
        map.put("list", customerService.findCustomers(pxy)); // 반환값 List<CustomerDTO>
        map.put("pxy", pxy);
    
        return map;
    }

    @GetMapping("/count")
    public String index() {
        System.out.println("CustomerController count() 경로로 들어왔음");
        int count = customerService.countAll();
        p.accept("람다가 출력한 고객의 총인원 : " +count); 
        //System.out.println("고객의 총인원 : " +count);
        return count+"";
    }
 
    @GetMapping("/{customerId}/{password}") // annotation ,메소드에 대한 기능정의
    public CustomerDTO login(@PathVariable("customerId")String id, //객체가 반환값으로(RESRful 방식)
                        @PathVariable("password") String pass){  //메소드 선언(declaration) -> notation

        customer.setCustomerId(id);//메소드가 끝난다. bit01을 필드에 옮기고 사라진다.
        customer.setPassword(pass);// 힙에 있는 dto 인스턴스
        return customerService.login(customer);
    }

/*
    @GetMapping("/{customerId}")
    public CustomerDTO getCustomer(@PathVariable String customerId) {
        System.out.println("id 검색 진입 : "+customerId);
        
        return customerService.findCustomerByCustomerId(customerId);
    }
*/
    @PutMapping("/{customerId}")
    public CustomerDTO updateCustomer(@RequestBody CustomerDTO param) {
        System.out.println("수정 할 id"+param.getCustomerId());
        int res = customerService.updateCustomer(param);
        System.out.println("===>" + res);
        if(res == 1){
            customer = customerService.findCustomerByCustomerId(param.getCustomerId());
        }else{
            System.out.println("컨트롤러 수정 실패");
        }
        return customer;
    }

    @DeleteMapping("/{customerId}")
    public HashMap<String,Object> deleteCustomer(@PathVariable String customerId) {
        HashMap<String, Object> map = new HashMap<>();
        customer.setCustomerId(customerId);
        customerService.deleteCustomer(customer);
        map.put("result","탈퇴성공");
        return map;
    }

}