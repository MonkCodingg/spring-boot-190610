package com.bitcamp.web.mapper;

import lombok.Data;

/**
 * ProductDTO
 */
@Data
public class ProductDTO {
    private String productId, productName, supplierId, categoryId, unit, price, photo;

}