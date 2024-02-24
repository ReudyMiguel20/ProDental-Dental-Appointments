package com.prodental.auth.controller;

import com.prodental.auth.model.dto.AuthenticationToken;
import com.prodental.auth.service.AuthService;
import com.prodental.common.model.dto.StatusMessage;
import com.prodental.user.model.dto.NewUserRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/auth")
public class AuthenticationController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationToken> registeringNewUser(@Valid @RequestBody NewUserRequest newUserRequest) {
        return ResponseEntity.ok(authService.register(newUserRequest));
    }

    @PostMapping("/activate/{token}")
    public ResponseEntity<StatusMessage> activateNewUser(@PathVariable String token) {
        authService.activateNewUser(token);
        return ResponseEntity.ok(StatusMessage.builder().message("User Activated").build());
    }

}
