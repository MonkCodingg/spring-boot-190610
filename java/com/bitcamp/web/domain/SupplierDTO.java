package com.bitcamp.web.domain;
import lombok.Data;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

/**
 * SupplierDTO
 */
//@Component : service controller repository의 부모
//타입 정의, @Controller @Service @Repository -> component의 구현체
@Data @Component @Lazy
public class SupplierDTO {
    private String supplierId, 
    supplierName, 
    contactName, 
    address, 
    city, 
    postalCode, 
    country, 
    phone;
    public void setCity(String city){
        this.city = city;
    }
    public String getCity(){
        return this.city;
    }
}