package com.bitcamp.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * CategoryDTO
 */
@Data
@Component
@Lazy
public class CategoryDTO {
    private String categoryId, categoryName, description;
//  3배 느리다. 컴퓨터에 명령 3번.
//    private String categoryId; 
//    private String categoryName; 
//    private String description;

}