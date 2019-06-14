package com.bitcamp.web.mapper;

import java.util.List;

import com.bitcamp.web.domain.CategoryDTO;

import org.springframework.stereotype.Repository;

/**
 * CategoryMapper
 */
@Repository
public interface CategoryMapper {
    public void insertCategory(CategoryDTO category);
    public List<CategoryDTO> selectAllCategories();
    public List<CategoryDTO> selectCategoriesByOption(CategoryDTO option);
    public CategoryDTO selectCategoryByCategoryId(CategoryDTO category);
    public void updateCategory(CategoryDTO category);
    public void deletetCategory(CategoryDTO category);
}
    
