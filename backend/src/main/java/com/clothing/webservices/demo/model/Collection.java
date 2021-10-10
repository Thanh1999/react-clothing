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
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 *
 * @author Chanh Thanh
 */
@Entity
@Table(name = "Collection")
public class Collection implements Serializable {

    @Id
    @GeneratedValue
    private int id;

    @Column(name = "imageUrl")
    private String imageUrl;

    @Column(name = "title")
    private String title;

    @Column(name = "linkUrl")
    private String linkUrl;
    
    @OneToMany(mappedBy = "collection")
    private List<Item> items;

    protected Collection() {
    }

    public Collection(int id, String imageUrl, String title, String linkUrl, List<Item> items) {
        this.id = id;
        this.imageUrl = imageUrl;
        this.title = title;
        this.linkUrl = linkUrl;
        this.items = items;
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

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getLinkUrl() {
        return linkUrl;
    }

    public void setLinkUrl(String linkUrl) {
        this.linkUrl = linkUrl;
    }

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }

}
