package com.bitcamp.web.serviceImp;

import java.util.List;

import com.bitcamp.web.domain.CategoryDTO;
import com.bitcamp.web.service.CategoryService;

import org.springframework.stereotype.Service;

/**
 * CategoryServiceImp
 */
@Service
public class CategoryServiceImpl implements CategoryService {

    @Override
    public void addCategory(CategoryDTO category) {

    }

    @Override
    public List<CategoryDTO> findAllCategories() {
        return null;
    }

    @Override
    public List<CategoryDTO> findCategoriesByOption(CategoryDTO option) {
        return null;
    }

    @Override
    public CategoryDTO findCategoryByCategoryId(CategoryDTO category) {
        return null;
    }

    @Override
    public void updateCategory(CategoryDTO category) {

    }

    @Override
    public void deletetCategory(CategoryDTO category) {

    }

    
}