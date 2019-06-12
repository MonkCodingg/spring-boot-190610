package com.bitcamp.web.mapper;

import lombok.Data;

/**
 * OrdersDTO
 */
@Data
public class OrderDTO {
    private String orderId, customerId, employeeId, orderDate, shipperId;

}