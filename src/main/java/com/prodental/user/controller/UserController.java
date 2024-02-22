package com.prodental.user.controller;

import com.prodental.user.model.dto.UpdateUserRequest;
import com.prodental.user.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/user")
public class UserController {

    private final UserService userService;

    @GetMapping("/test")
    @ResponseStatus(HttpStatus.CREATED)
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

    @PutMapping("/updateuser/{email}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateUser(
            @PathVariable String email,
            @Valid @RequestBody UpdateUserRequest request
    ) {
        userService.updateUser(request, email);
    }



}
