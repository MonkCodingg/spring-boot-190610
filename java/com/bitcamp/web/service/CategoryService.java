package com.bitcamp.web.service;

import java.util.List;

import com.bitcamp.web.domain.CategoryDTO;

import org.springframework.stereotype.Component;

/**
 * CategoryService
 */
@Component
public interface CategoryService {//인터페이스는 기능 정의
//기능은 public, 속성은 private    
    public void addCategory(CategoryDTO category);
    public List<CategoryDTO> findAllCategories();
    public List<CategoryDTO> findCategoriesByOption(CategoryDTO option);
    public CategoryDTO findCategoryByCategoryId(CategoryDTO category);
    public void updateCategory(CategoryDTO category);
    public void deletetCategory(CategoryDTO category);
}