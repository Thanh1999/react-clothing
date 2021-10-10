/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.clothing.webservices.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 *
 * @author Chanh Thanh
 */
@Entity
@Table(name = "Item")
public class Item implements Serializable {

    @Id
    @GeneratedValue
    private int id;
    
    @Column(name = "imageUrl")
    private String imageUrl;
    
    @Column(name = "name")
    private String name;
    
    @Column(name = "price")
    private float price;
    
    @ManyToOne
    @JoinColumn(name = "collectionId", referencedColumnName = "id")
    @JsonIgnore
    private Collection collection;

    protected Item() {
    }
    
    public Item(int id, String imageUrl, String name, float price, Collection collection) {
        this.id = id;
        this.imageUrl = imageUrl;
        this.name = name;
        this.price = price;
        this.collection = collection;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public Collection getCollection() {
        return collection;
    }

    public void setCollection(Collection collection) {
        this.collection = collection;
    }

    
}
