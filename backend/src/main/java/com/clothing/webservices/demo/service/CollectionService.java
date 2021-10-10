/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.clothing.webservices.demo.service;

import com.clothing.webservices.demo.model.Collection;
import com.clothing.webservices.demo.model.Item;
import com.clothing.webservices.demo.repository.CollectionRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Chanh Thanh
 */
@Service
public class CollectionService {
    
    @Autowired
    private CollectionRepository collectionRepository;
    
    public Collection findById(Integer id) {
        try {
            return collectionRepository.findById(id).orElse(null);
        } catch (Exception e) {
            e.getStackTrace();
            return null;
        }
    }
    
    public List<Collection> findAll() {
        List<Collection> collections = collectionRepository.findAll();
        collections.forEach((Collection collection) -> {
            collection.setItems(new ArrayList<>());
        });
        return collections;
    }
    
    public List<Collection> previewAll() {
        
        List<Collection> collections = collectionRepository.findAll();
        collections.forEach(collection -> {
            List<Item> items = collection.getItems();
            if (items.size() > 4) {
                collection.setItems(items.subList(0, 4));
            }
        });
        return collections;
    }
}
