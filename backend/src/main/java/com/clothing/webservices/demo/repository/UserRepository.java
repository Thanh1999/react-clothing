/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.clothing.webservices.demo.repository;

import com.clothing.webservices.demo.model.Cart;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Chanh Thanh
 */
public interface UserRepository extends JpaRepository<Cart, String> {

    @Override
    public <S extends Cart> S save(S s);

    @Override
    public Optional<Cart> findById(String id);
    

}
