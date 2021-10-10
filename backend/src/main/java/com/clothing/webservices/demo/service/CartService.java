/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.clothing.webservices.demo.service;

import com.clothing.webservices.demo.model.Cart;
import com.clothing.webservices.demo.model.CartItem;
import com.clothing.webservices.demo.model.CartItemKey;
import com.clothing.webservices.demo.model.Item;
import com.clothing.webservices.demo.repository.CartRepository;
import com.clothing.webservices.demo.repository.ItemRepository;
import com.clothing.webservices.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Chanh Thanh
 */
@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ItemRepository itemRepository;

    public void addItemToCart(CartItemKey key) {
        CartItem cartItem = cartRepository.getById(key);
        if (cartItem != null) {
            int newQuantity = cartItem.getQuantity() + 1;
            cartItem.setQuantity(newQuantity);
            cartRepository.save(cartItem);
            return;
        }
        Cart cart = userRepository.getById(key.getEmail());
        Item item = itemRepository.getById(key.getItemId());
        cartRepository.save(new CartItem(key, 1, cart, item));
    }

    public boolean updateItemFromCart(CartItemKey key, int quantity) {
        boolean result = true;
        try {
            CartItem cartItem = cartRepository.getById(key);
            if (quantity == 0) {
                cartRepository.delete(cartItem);
            } else {
                cartItem.setQuantity(quantity);
                cartRepository.save(cartItem);
            }

        } catch (Exception e) {
            result = false;
        }
        return result;
    }

    public boolean deleteItemFromCart(CartItemKey key) {
        boolean result = true;
        try {
            CartItem cartItem = cartRepository.getById(key);
            cartRepository.delete(cartItem);
        } catch (Exception e) {
            result = false;
        }
        return result; //To change body of generated methods, choose Tools | Templates.
    }

}
