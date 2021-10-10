/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.clothing.webservices.demo.service;

import com.clothing.webservices.demo.model.Cart;
import com.clothing.webservices.demo.repository.UserRepository;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Chanh Thanh
 */
@Service
@Transactional
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public Cart loadCartByEmail(String email) {
        Cart user = userRepository.findById(email).get();
        return user;
    }

    public Cart processSignIn(String email, String name) {
        Optional<Cart> result = userRepository.findById(email);
        Cart user = result.orElse(null);
        if (user == null) {
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            user = new Cart(email, name, sdf.format(new Date()), new ArrayList());
            userRepository.save(user);
        }
        return user;
    }

}
