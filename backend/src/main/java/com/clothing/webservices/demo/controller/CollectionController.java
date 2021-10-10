/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.clothing.webservices.demo.controller;

import com.clothing.webservices.demo.model.Collection;
import com.clothing.webservices.demo.repository.CollectionRepository;
import com.clothing.webservices.demo.service.CollectionService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Chanh Thanh
 */
@RestController
public class CollectionController {

    @Autowired
    private CollectionService collectionService;

    @GetMapping(path = "/collection")
    public List<Collection> findAllCollection() {
        return collectionService.findAll();
    }

    @GetMapping(path = "/collection/{id}")
    public ResponseEntity<Collection> findCollectionById(@PathVariable int id) {
        Collection collection = collectionService.findById(id);
        if (collection != null) {
            return new ResponseEntity(collection, HttpStatus.OK);
        }
        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }

    @GetMapping(path = "/collection/preview")
    public List<Collection> previewAllCollection() {
        return collectionService.previewAll();
    }

}
