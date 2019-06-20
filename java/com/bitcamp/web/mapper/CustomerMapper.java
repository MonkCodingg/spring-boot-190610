package com.bitcamp.web.mapper;

import java.util.List;


import com.bitcamp.web.domain.CustomerDTO;

import org.springframework.stereotype.Repository;

/**
 * customerMapper
 */
@Repository //component 자식
public interface CustomerMapper {
    public void insertCustomer(CustomerDTO customer);
    public List<CustomerDTO> selectCustomers();
    public List<CustomerDTO> selectCustomersByOption(CustomerDTO option);//옵션은 여러가지 일 수 있다.
    public CustomerDTO selectCustomerByCustomerId(String CustomerId);
    public int updateCustomer(CustomerDTO customer);
    public void deleteCustomer(CustomerDTO customer);
    public int selectCount();
    public CustomerDTO login(CustomerDTO customer);
    
}