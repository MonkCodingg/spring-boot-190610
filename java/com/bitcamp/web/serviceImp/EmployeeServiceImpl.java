package com.bitcamp.web.serviceImp;

import java.util.List;

import com.bitcamp.web.domain.EmployeeDTO;
import com.bitcamp.web.service.EmployeeService;

import org.springframework.stereotype.Service;

/**
 * EmployeeServiceImpl
 */
@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Override
    public void addEmployee(EmployeeDTO employee) {

    }

    @Override
    public List<EmployeeDTO> findEmployees() {
        return null;
    }

    @Override
    public List<EmployeeDTO> findEmployeesByOption(EmployeeDTO option) {
        return null;
    }

    @Override
    public EmployeeDTO findEmployeesByEmployeeId(String employeeId) {
        return null;
    }

    @Override
    public void updateEmployee(EmployeeDTO employee) {

    }

    @Override
    public void deleteEmployee(EmployeeDTO employee) {

    }

    

    
}