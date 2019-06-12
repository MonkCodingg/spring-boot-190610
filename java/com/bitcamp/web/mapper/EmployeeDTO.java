package com.bitcamp.web.mapper;

import lombok.Data;

/**
 * EmployeeDTO
 */
@Data // 어노테이션은 해야할 역할을 말한다.
public class EmployeeDTO {

    private String employeeId, name, birthDate, photo, notes;

}