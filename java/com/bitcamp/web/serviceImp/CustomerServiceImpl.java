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

    }

    @Override
    public List<CustomerDTO> findCustomers() {
        return null;
    }

    @Override
    public List<CustomerDTO> findCustomersByOption(CustomerDTO option) {
        return null;
    }

    @Override
    public CustomerDTO findCustomerByCustomerId(String CustomerId) {
        return null;
    }

    @Override
    public void updateCustomer(CustomerDTO customer) {

    }

    @Override
    public void deleteCustomer(CustomerDTO customer) {

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