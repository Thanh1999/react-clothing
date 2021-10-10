/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.clothing.webservices.demo.controller;

import com.clothing.webservices.demo.jwt.JwtTokenProvider;
import com.clothing.webservices.demo.model.Cart;
import com.clothing.webservices.demo.request.LoginRequest;
import com.clothing.webservices.demo.response.LoginResponse;
import com.clothing.webservices.demo.service.UserService;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Chanh Thanh
 */
@RestController
public class UserCartController {

    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    UserService userService;

    @GetMapping(path = "/cart")
    public Cart getUserCart(@RequestHeader String Authorization) {
        String email = tokenProvider.getUserEmailFromJWT(Authorization);
        return userService.loadCartByEmail(email);
    }

    @PostMapping(path = "/sign-in")
    public ResponseEntity signIn(@RequestBody LoginRequest request) {

        try {
            String idToken = request.getIdToken();
            FirebaseToken decodedToken = FirebaseAuth.getInstance().verifyIdToken("eyJhbGciOiJSUzI1NiIsImtpZCI6IjEyYWZkYjliOGJmZmMyY2M4ZTU4NGQ2ZWE2ODlmYzEwYTg3MGI2NzgiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTmd1eWVuIENoYW5oIFRoYW5oIChLMTNfSENNKSIsInBpY3R1cmUiOiJodHRwczovL2xoNC5nb29nbGV1c2VyY29udGVudC5jb20vLXdqdmJzMEJSVFE0L0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFBL0FNWnV1Y2xuWm41NkZnY1dYWVFWTElUNnJ5V1cyYUFaUWcvczk2LWMvcGhvdG8uanBnIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2ZpZXAtN2Q2NGYiLCJhdWQiOiJmaWVwLTdkNjRmIiwiYXV0aF90aW1lIjoxNjMxNzIyOTgxLCJ1c2VyX2lkIjoiZEQ0WVJzNk8yMVVValU5MnFBb2NUOGZVc1M4MiIsInN1YiI6ImRENFlSczZPMjFVVWpVOTJxQW9jVDhmVXNTODIiLCJpYXQiOjE2MzE3MjI5ODEsImV4cCI6MTYzMTcyNjU4MSwiZW1haWwiOiJ0aGFuaG5jc2UxMzA3NDNAZnB0LmVkdS52biIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTEzNTk0ODg0NTUxNjM2MzQ4MjM5Il0sImVtYWlsIjpbInRoYW5obmNzZTEzMDc0M0BmcHQuZWR1LnZuIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.aWPLbtQr9Df9-3RU1Nw9O629JICUtcmMLev1v4JPWLgISN0CBOPVORRqu8OgQA9jhMF213IXDgP_d5hxj62NIO-XMZBXmizAbg3cccH0kIi5ZQSSjVK6zHMZoYpiz9sXqrD9cJrzT-PZ4v30wOiXV67tQwTIaUSlerxI3fjtrYaL6Qii5o8-oZLHZJUmRu5QozSY9CMJuZal-PU8WLGScPkkW3xThsbFFa841IwvI-zsGYAI9CCp26vhcl85HhzgZgqsZTuF4N73Q5S7Kp8Q0zBJO718B66qTboBiuk-3E2c0t48uJTGlo6EmE02DnrCzxIZ51psEgoJjAYRrE2h4w");
            String email = decodedToken.getEmail();
            String name = decodedToken.getName();

            Cart user = userService.processSignIn(email, name);

            String jwt = tokenProvider.generateToken(user);
            return new ResponseEntity(jwt, HttpStatus.OK);

        } catch (FirebaseAuthException ex) {
            Logger.getLogger(UserCartController.class.getName()).log(Level.SEVERE, null, ex);
            return new ResponseEntity(HttpStatus.BAD_GATEWAY);
        }
    }

    @GetMapping(path = "/info")
    public LoginResponse getUserInfo(@RequestHeader String Authorization) {
        String email = tokenProvider.getUserEmailFromJWT(Authorization);
        Cart user = userService.loadCartByEmail(email);
        return new LoginResponse(user.getName(), user.getEmail());
    }
}
