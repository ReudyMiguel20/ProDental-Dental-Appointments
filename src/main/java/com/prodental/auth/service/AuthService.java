package com.prodental.auth.service;

import com.prodental.auth.model.dto.AuthenticationToken;
import com.prodental.auth.model.dto.LoginRequest;
import com.prodental.user.model.dto.NewUserRequest;

public interface AuthService {
    AuthenticationToken register(NewUserRequest request);

    void activateNewUser(String token);

    AuthenticationToken generateToken(LoginRequest request);
}
