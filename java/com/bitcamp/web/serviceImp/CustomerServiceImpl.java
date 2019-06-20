package com.bitcamp.web.serviceImp;

import java.util.List;

import com.bitcamp.web.domain.CustomerDTO;
import com.bitcamp.web.mapper.CustomerMapper;
import com.bitcamp.web.service.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * CustomerServiceImp
 */
@Service
public class CustomerServiceImpl implements CustomerService {
    @Autowired CustomerMapper customerMapper; 
  
    @Override
    public void addCustomer(CustomerDTO customer) {
        customerMapper.insertCustomer(customer);
    }
 
    @Override
    public List<CustomerDTO> findCustomers() {
        return customerMapper.selectCustomers();
    }
/*
    @Override
    public List<CustomerDTO> findCustomersByOption(CustomerDTO option) {
        return null;
    }
*/
    @Override
    public CustomerDTO findCustomerByCustomerId(String customerId) {
        return customerMapper.selectCustomerByCustomerId(customerId);
    }

    @Override
    public int updateCustomer(CustomerDTO customer) {
        int res = customerMapper.updateCustomer(customer);
        if (res == 1) {
            System.out.println("서비스 수정 성공");
        } else {
            System.out.println("서비스 수정 실패");
        }
        return res;
    }

    @Override
    public void deleteCustomer(CustomerDTO customer) {
        customerMapper.deleteCustomer(customer);
    }

    @Override
    public int countAll() {
        return customerMapper.selectCount();
    }

    @Override
    public CustomerDTO login(CustomerDTO customer) { // 값이 아니라 인스턴스
        System.out.println("컨트롤러에서 넘어온 name: "+customer.getCustomerId());
        System.out.println("컨트롤러에서 넘어온 pass: "+customer.getPassword());
        
        return customerMapper.login(customer);
    }
}