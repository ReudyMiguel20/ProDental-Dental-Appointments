package com.prodental.auth.controller;

import com.prodental.auth.model.dto.AuthenticationToken;
import com.prodental.auth.service.AuthService;
import com.prodental.auth.service.impl.AuthServiceImpl;
import com.prodental.user.model.dto.NewUserRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/auth")
public class AuthenticationController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationToken> registeringNewUser(@Valid @RequestBody NewUserRequest newUserRequest) {
        return ResponseEntity.ok(authService.register(newUserRequest));
    }

}
