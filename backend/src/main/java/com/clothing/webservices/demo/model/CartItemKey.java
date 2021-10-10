/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.clothing.webservices.demo.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Embeddable;

/**
 *
 * @author Chanh Thanh
 */
@Embeddable
public class CartItemKey implements Serializable {

    @Column(name = "email")
    private String email;

    @Column(name = "itemId")
    private int itemId;

    public CartItemKey() {
    }

    public CartItemKey(String email, int itemId) {
        this.email = email;
        this.itemId = itemId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getItemId() {
        return itemId;
    }

    public void setItemId(int itemId) {
        this.itemId = itemId;
    }

}
