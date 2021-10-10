///*
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */
//package com.clothing.webservices.demo.repository;
//
//import com.clothing.webservices.demo.model.Collection;
//import com.clothing.webservices.demo.model.Item;
//import java.util.ArrayList;
//import java.util.List;
//import javax.persistence.EntityManager;
//import javax.persistence.Query;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Repository;
//
//@Repository
//public class CollectionRepositoryImpl implements CollectionRepository {
//
//    @Autowired
//    EntityManager entityManager;
//
//    @Override
//    public Collection findById(Integer id) {
//        try {
//            String sql = "from Collection where id=?1";
//            Query query = entityManager.createQuery(sql);
//            query.setParameter(1, id);
//            Collection collection = (Collection) query.getSingleResult();
//            return collection;
//        } catch (Exception e) {
//            e.getStackTrace();
//            return null;
//        }
//    }
//
//    @Override
//    public List<Collection> findAll() {
//        String sql = "from Collection";
//        Query query = entityManager.createQuery(sql);
//        List<Collection> collections = (List<Collection>) query.getResultList();
//        for (Collection collection : collections) {
//            collection.setItems(new ArrayList());
//        }
//        return collections;
//    }
//
//    @Override
//    public List<Collection> previewAll() {
//        String sql = "from Collection";
//        Query query = entityManager.createQuery(sql);
//        List<Collection> collections = (List<Collection>) query.getResultList();
//        for (Collection collection : collections) {
//            List<Item> items = collection.getItems();
//            if (items.size() > 4) {
//                collection.setItems(items.subList(0, 4));
//            }
//        }
//        return collections;
//    }
//
//}
