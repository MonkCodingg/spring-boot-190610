package com.bitcamp.web.mapper;

import java.util.List;

import com.bitcamp.web.domain.ProductDTO;

import org.springframework.stereotype.Repository;

/**
 * ProductMapper
 */
@Repository
public interface ProductMapper {
    public void addProduct(ProductDTO product);
    public List<ProductDTO> selectProducts();
    public List<ProductDTO> selectProductsByOption(ProductDTO option);
    public ProductDTO selectProductByProductId(String productId);
    public void updateProduct(ProductDTO product);
    public void deleteProduct(ProductDTO product);
    
}