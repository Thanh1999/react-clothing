/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.clothing.webservices.demo.service;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.annotation.PostConstruct;
import org.springframework.stereotype.Service;

/**
 *
 * @author Chanh Thanh
 */
@Service
public class FirebaseService {

    @PostConstruct
    public void initialize() {
        FileInputStream serviceAccount
                = null;
        try {
            serviceAccount = new FileInputStream("src/main/resources/fiep-7d64f-firebase-adminsdk-8dray-f38b9d0c36.json");
            FirebaseOptions options = new FirebaseOptions.Builder()
                    .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                    .setDatabaseUrl("https://fiep-7d64f.firebaseio.com")
                    .build();
            if (FirebaseApp.getApps().isEmpty()) {
                FirebaseApp.initializeApp(options);
            }
        } catch (FileNotFoundException ex) {
            Logger.getLogger(FirebaseService.class.getName()).log(Level.SEVERE, null, ex);
        } catch (IOException ex) {
            Logger.getLogger(FirebaseService.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            try {
                if (serviceAccount != null) {
                    serviceAccount.close();
                }
            } catch (IOException ex) {
                Logger.getLogger(FirebaseService.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    }

}
