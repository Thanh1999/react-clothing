/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.clothing.webservices.demo.model;
import java.io.Serializable;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 *
 * @author Chanh Thanh
 */

@Entity
@Table(name = "Cart")
public class Cart implements Serializable {
    
    @Id
    private String email;
    
    @Column(name = "name")
    private String name;
    
    @Column(name = "createDate")
    private String createDate;
    
    @OneToMany(mappedBy = "cart")
    private List<CartItem> items;

    public Cart() {
    }

    public Cart(String email, String name, String createDate, List<CartItem> items) {
        this.email = email;
        this.name = name;
        this.createDate = createDate;
        this.items = items;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCreateDate() {
        return createDate;
    }

    public void setCreateDate(String createDate) {
        this.createDate = createDate;
    }

    public List<CartItem> getItems() {
        return items;
    }

    public void setItems(List<CartItem> items) {
        this.items = items;
    }
    
    
    
    
}
