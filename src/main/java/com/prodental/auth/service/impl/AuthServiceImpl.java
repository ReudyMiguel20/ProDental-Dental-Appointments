package com.prodental.auth.service.impl;

import com.prodental.auth.model.dto.AuthenticationToken;
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
    private final AuthenticationManager authenticationManager;

    @Override
    public AuthenticationToken register(NewUserRequest request) {
        User newUser = userService.createNewUserAndAssignRole(request);

        String jwtToken = jwtService.generateToken(newUser);

        return AuthenticationToken.builder()
                .token(jwtToken)
                .build();
    }

}
