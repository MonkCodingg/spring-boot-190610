package com.bitcamp.web.domain;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * EmployeeDTO
 */
@Data @Component @Lazy// 어노테이션은 해야할 역할을 말한다.
public class EmployeeDTO {

    private String employeeId, 
    manager, 
    name, 
    birthDate, 
    photo, 
    notes;

}