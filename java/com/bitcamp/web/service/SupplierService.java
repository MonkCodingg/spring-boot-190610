package com.bitcamp.web.service;

import java.util.List;

import com.bitcamp.web.domain.SupplierDTO;

import org.springframework.stereotype.Component;

/**
 * SupplierService
 */
@Component
public interface SupplierService {
    public void addSupplier(SupplierDTO supplier);
    public List<SupplierDTO> findSuppliers();
    public List<SupplierDTO> findSuppliersByOption(SupplierDTO option);
    public SupplierDTO findSupplierDTOBySupplierId(String supplierId);
    public void updateSupplier(SupplierDTO supplier);
    public void deleteSupplier(SupplierDTO supplier);
}