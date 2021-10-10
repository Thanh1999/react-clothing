/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.clothing.webservices.demo.request;

/**
 *
 * @author Chanh Thanh
 */
public class LoginRequest {

    private String idToken;

    public String getIdToken() {
        return idToken;
    }

    public void setIdToken(String idToken) {
        this.idToken = idToken;
    }

    public LoginRequest(String idToken) {
        this.idToken = idToken;
    }

    public LoginRequest() {
    }

}
