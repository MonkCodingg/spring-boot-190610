package com.bitcamp.web.mapper;

import lombok.Data;

/**
 * Customer
 */
@Data
public class CustomerDTO {
    private String customerId, customerName, password, ssn, phone, city, address, postalcode,photo;
    
}