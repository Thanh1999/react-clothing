/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.clothing.webservices.demo.repository;

import com.clothing.webservices.demo.model.CartItem;
import com.clothing.webservices.demo.model.CartItemKey;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Chanh Thanh
 */
public interface CartRepository extends JpaRepository<CartItem, CartItemKey> {

    @Override
    public <S extends CartItem> S save(S s);

    @Override
    public void delete(CartItem t);

//    public void addItemToCart(CartItemKey key);
//
//    public boolean updateItemFromCart(CartItemKey key, int quantity);
//
//    public boolean deleteItemFromCart(CartItemKey key);
}
