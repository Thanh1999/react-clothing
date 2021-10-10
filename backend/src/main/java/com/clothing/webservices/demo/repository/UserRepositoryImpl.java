/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.clothing.webservices.demo.repository;

import com.clothing.webservices.demo.model.Cart;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

//@Repository
//public class UserRepositoryImpl implements UserRepository {
//
//    @Autowired
//    private EntityManager entityManager;
//
//    @Override
//    @Transactional
//    public void createUserCart(Cart cart) {
//        entityManager.persist(cart);
//    }
//
//    @Override
//    public Cart getUserCart(String email) {
//        Cart cart = entityManager.find(Cart.class, email);
//        return cart;
//    }
//
//}
