/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.clothing.webservices.demo.repository;

import com.clothing.webservices.demo.model.Collection;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Chanh Thanh
 */
public interface CollectionRepository extends JpaRepository<Collection, Integer>{

    @Override
    public Optional<Collection> findById(Integer id);

    @Override
    public List<Collection> findAll();
    
}
