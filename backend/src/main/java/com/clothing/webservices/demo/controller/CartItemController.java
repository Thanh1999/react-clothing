/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.clothing.webservices.demo.controller;

import com.clothing.webservices.demo.jwt.JwtTokenProvider;
import com.clothing.webservices.demo.model.CartItemKey;
import com.clothing.webservices.demo.request.CartItemRequest;
import com.clothing.webservices.demo.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Chanh Thanh
 */
@RestController
public class CartItemController {

    @Autowired
    private CartService cartService;

    @Autowired
    private JwtTokenProvider tokenProvider;

    @PostMapping(path = "/cart-item")
    public ResponseEntity addItemToCart(@RequestHeader String Authorization, @RequestBody CartItemRequest cartItem) {
        String email = tokenProvider.getUserEmailFromJWT(Authorization);
        CartItemKey key = new CartItemKey(email, cartItem.getItemId());
        cartService.addItemToCart(key);
        return ResponseEntity.ok().build();
    }

    @PutMapping(path = "/cart-item")
    public ResponseEntity updateItemFromCart(@RequestHeader String Authorization, @RequestBody CartItemRequest cartItem) {
        String email = tokenProvider.getUserEmailFromJWT(Authorization);
        CartItemKey key = new CartItemKey(email, cartItem.getItemId());
        boolean result = cartService.updateItemFromCart(key, cartItem.getQuantity());
        if (result) {
            return ResponseEntity.ok().build();
        }
        return new ResponseEntity(HttpStatus.UNAUTHORIZED);
    }

    @DeleteMapping(path = "/cart-item/{itemId}")
    public ResponseEntity deleteItemFromCart(@RequestHeader String Authorization, @PathVariable int itemId) {
        String email = tokenProvider.getUserEmailFromJWT(Authorization);
        CartItemKey key = new CartItemKey(email, itemId);
        boolean result = cartService.deleteItemFromCart(key);
        if (result) {
            return ResponseEntity.ok().build();
        }
        return new ResponseEntity(HttpStatus.UNAUTHORIZED);
    }

}
