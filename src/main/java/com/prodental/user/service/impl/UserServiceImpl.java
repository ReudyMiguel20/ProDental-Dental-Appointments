package com.prodental.user.service.impl;

import com.prodental.user.repository.UserRepository;
import com.prodental.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

}
