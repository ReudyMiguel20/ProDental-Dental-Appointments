package com.prodental.user.controller;

import com.prodental.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/user")
public class UserController {

    private final UserService userService;

    @GetMapping("/test")
    public ResponseEntity<String> test(Authentication auth) {
        return ResponseEntity.ok("Test");
    }

    @GetMapping("/testadmin")
    public ResponseEntity<String> testAdmin(Authentication auth) {
        return ResponseEntity.ok("Test");
    }

    @GetMapping("/testuser")
    public ResponseEntity<String> testUser(Authentication auth) {
        return ResponseEntity.ok("Test");
    }


}
