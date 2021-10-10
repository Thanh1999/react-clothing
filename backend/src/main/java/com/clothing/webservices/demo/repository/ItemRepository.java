/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.clothing.webservices.demo.repository;

import com.clothing.webservices.demo.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Chanh Thanh
 */
public interface ItemRepository extends JpaRepository<Item, Integer> {

    @Override
    public Item getById(Integer id);

}
