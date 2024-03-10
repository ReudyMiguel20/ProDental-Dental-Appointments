package com.prodental.user.controller;

import com.prodental.auth.model.dto.AuthenticationToken;
import com.prodental.user.model.dto.UpdateUserRequest;
import com.prodental.user.model.entity.User;
import com.prodental.user.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/user")
public class UserController {

    private final UserService userService;

    @PutMapping("/updateuser/{username}")
    @ResponseStatus(HttpStatus.OK)
    public AuthenticationToken updateUser(
            @PathVariable String username,
            @Valid @RequestBody UpdateUserRequest request
    ) {
        return userService.updateUser(request, username);
    }

    @GetMapping("/getuserdetails/{username}")
    @ResponseStatus(HttpStatus.OK)
    public User getUserDetails(@PathVariable String username) {
        return userService.getUserByUsername(username);
    }



}
