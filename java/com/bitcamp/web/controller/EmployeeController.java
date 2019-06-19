package com.bitcamp.web.controller;

import com.bitcamp.web.domain.EmployeeDTO;
import com.bitcamp.web.service.EmployeeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * EmployeeController
 */
@RequestMapping("/employees")
public class EmployeeController {
    @Autowired EmployeeService employeeService;
    @Autowired EmployeeDTO employee;

//    @PostMapping
}