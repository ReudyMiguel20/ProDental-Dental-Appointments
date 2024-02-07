package com.prodental.user.service.impl;

import com.prodental.common.jwt.JwtService;
import com.prodental.user.exception.UserNotFound;
import com.prodental.user.model.dto.NewUserRequest;
import com.prodental.user.model.entity.Role;
import com.prodental.user.model.entity.User;
import com.prodental.user.repository.UserRepository;
import com.prodental.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.modelmapper.ModelMapper;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final ModelMapper modelMapper;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    @Override
    public void saveUser(User user) {
        userRepository.save(user);
    }

    // Maybe the use case for this would be when user forgets their username and know the email
    @Override
    public User retrieveUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(UserNotFound::new);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public void assignRoleToUser(User user) {
        if (getAllUsers().isEmpty()) {
            user.setRole(Role.ADMIN);
        } else {
            user.setRole(Role.USER);
        }
    }

    @Override
    public User createNewUserAndAssignRole(NewUserRequest newUserRequest) {
        User user = modelMapper.map(newUserRequest, User.class);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        assignRoleToUser(user);
        saveUser(user);

        return user;
    }

    @Override
    public User getUserByToken(String token) {
        String username = jwtService.extractUsername(token);

        return userRepository.findByUsername(username)
                .orElseThrow(UserNotFound::new);
    }

    @Override
    public void activateUser(User user) {
        user.setEnabled(true);
        saveUser(user);
    }


}
