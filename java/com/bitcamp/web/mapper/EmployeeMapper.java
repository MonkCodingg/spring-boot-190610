package com.bitcamp.web.mapper;

import java.util.List;

import com.bitcamp.web.domain.EmployeeDTO;

import org.springframework.stereotype.Repository;

/**
 * EmployeeMapper
 */
@Repository
public interface EmployeeMapper {
    public void addEmployee(EmployeeDTO employee);
    public List<EmployeeDTO> selectEmployees();
    public List<EmployeeDTO> selectEmployeesByOption(EmployeeDTO option);
    public EmployeeDTO selectEmployeesByEmployeeId(String employeeId);
    public void updateEmployee(EmployeeDTO employee);
    public void deleteEmployee(EmployeeDTO employee); 
    
}