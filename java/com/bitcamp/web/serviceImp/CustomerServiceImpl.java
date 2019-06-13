package com.bitcamp.web.serviceImp;

import java.util.List;

import com.bitcamp.web.domain.CustomerDTO;
import com.bitcamp.web.service.CustomerService;

import org.springframework.stereotype.Service;

/**
 * CustomerServiceImp
 */
@Service
public class CustomerServiceImpl implements CustomerService {

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

    
    
}