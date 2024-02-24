package com.prodental.auth.service.impl;

import com.prodental.auth.model.dto.AuthenticationToken;
import com.prodental.auth.model.dto.LoginRequest;
import com.prodental.auth.service.AuthService;
import com.prodental.common.jwt.JwtService;
import com.prodental.user.model.dto.NewUserRequest;
import com.prodental.user.model.entity.User;
import com.prodental.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserService userService;
    private final JwtService jwtService;

    /**
     * This method is used to register a new user and assign a role to the user
     * based on the number of users in the database.
     * @param request - NewUserRequest object containing the user's details
     * @return - AuthenticationToken object containing the JWT token
     */
    @Override
    public AuthenticationToken register(NewUserRequest request) {
        User newUser = userService.createNewUserAndAssignRole(request);

        String jwtToken = jwtService.generateToken(newUser);

        return AuthenticationToken.builder()
                .token(jwtToken)
                .build();
    }

    /**
     * This method is used to activate a new user by setting the user's enabled status to true.
     * @param token - String containing the token
     */
    @Override
    public void activateNewUser(String token) {
        User user = userService.getUserByToken(token);
        userService.activateUser(user);
    }

    /**
     * This method is used to generate a JWT token for an existing user.
     * @param request - LoginRequest object containing the user's username and password
     * @return - AuthenticationToken object containing the JWT token
     */
    @Override
    public AuthenticationToken generateToken(LoginRequest request) {
        User user = userService.getUserByUsername(request.getUsername());
        userService.verifyPassword(user, request.getPassword());

        String jwtToken = jwtService.generateToken(user);

        return AuthenticationToken.builder()
                .token(jwtToken)
                .build();
    }

}
