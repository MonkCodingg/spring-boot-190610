package com.bitcamp.web.serviceImp;

import java.util.List;

import com.bitcamp.web.domain.OrderDTO;
import com.bitcamp.web.service.OrderService;

import org.springframework.stereotype.Service;

/**
 * OrderServiceImpl
 */
@Service
public class OrderServiceImpl implements OrderService {

    @Override
    public void addOrder(OrderDTO order) {

    }

    @Override
    public List<OrderDTO> findOrders() {
        return null;
    }

    @Override
    public List<OrderDTO> findOrdersByOption(OrderDTO option) {
        return null;
    }

    @Override
    public OrderDTO findOrderByOrderId(String orderId) {
        return null;
    }

    @Override
    public void updateOrder(OrderDTO order) {

    }

    @Override
    public void deleteOrder(OrderDTO order) {

    }

   
    
}