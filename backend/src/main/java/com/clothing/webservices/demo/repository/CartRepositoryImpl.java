///*
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */
//package com.clothing.webservices.demo.repository;
//
//import com.clothing.webservices.demo.model.Cart;
//import com.clothing.webservices.demo.model.CartItem;
//import com.clothing.webservices.demo.model.CartItemKey;
//import com.clothing.webservices.demo.model.Item;
//import javax.persistence.EntityManager;
//import javax.transaction.Transactional;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Repository;
//
//@Repository
//public class CartRepositoryImpl implements CartRepository {
//
//    @Autowired
//    private EntityManager entityManager;
//
//    @Override
//    @Transactional
//    public void addItemToCart(CartItemKey key) {
//        CartItem cartItem = entityManager.find(CartItem.class, key);
//        if (cartItem != null) {
//            int newQuantity = cartItem.getQuantity() + 1;
//            cartItem.setQuantity(newQuantity);
//            entityManager.merge(cartItem);
//            return;
//        }
//        Cart cart = entityManager.getReference(Cart.class, key.getEmail());
//        Item item = entityManager.getReference(Item.class, key.getItemId());
//        entityManager.persist(new CartItem(key, 1, cart, item)); //To change body of generated methods, choose Tools | Templates.
//    }
//
//    @Override
//    @Transactional
//    public boolean updateItemFromCart(CartItemKey key, int quantity) {
//        boolean result = true;
//        try {
//            CartItem cartItem = entityManager.getReference(CartItem.class, key);
//            if (quantity == 0) {
//                entityManager.remove(cartItem);
//            } else {
//                cartItem.setQuantity(quantity);
//                entityManager.merge(cartItem);
//            }
//
//        } catch (Exception e) {
//            result = false;
//        }
//        return result;
//    }
//
//    @Override
//    @Transactional
//    public boolean deleteItemFromCart(CartItemKey key) {
//        boolean result = true;
//        try {
//            CartItem cartItem = entityManager.getReference(CartItem.class, key);
//            entityManager.remove(cartItem);
//        } catch (Exception e) {
//            result = false;
//        }
//        return result; //To change body of generated methods, choose Tools | Templates.
//    }
//
//}
