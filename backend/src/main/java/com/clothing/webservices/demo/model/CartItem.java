/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.clothing.webservices.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

/**
 *
 * @author Chanh Thanh
 */
@Entity
@Table(name = "CartItem")
public class CartItem implements Serializable {

    @EmbeddedId
    private CartItemKey id;

    @Column(name = "quantity")
    private int quantity;

    @ManyToOne
    @MapsId("email")
    @JoinColumn(name = "email", referencedColumnName = "email")
    @JsonIgnore
    private Cart cart;

    @ManyToOne
    @MapsId("itemId")
    @JoinColumn(name = "itemId", referencedColumnName = "id")
    private Item item;

    public CartItem() {
    }

    public CartItem(CartItemKey id, int quantity, Cart cart, Item item) {
        this.id = id;
        this.quantity = quantity;
        this.cart = cart;
        this.item = item;
    }

    public CartItemKey getId() {
        return id;
    }

    public void setId(CartItemKey id) {
        this.id = id;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Cart getCart() {
        return cart;
    }

    public void setCart(Cart cart) {
        this.cart = cart;
    }

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }
    
    

}
