package com.prodental.user.service.impl;

import com.prodental.auth.model.dto.AuthenticationToken;
import com.prodental.common.jwt.JwtService;
import com.prodental.user.exception.IncorrectPassword;
import com.prodental.user.exception.UserNotEnabled;
import com.prodental.user.exception.UserNotFound;
import com.prodental.user.model.dto.NewUserRequest;
import com.prodental.user.model.dto.UpdateUserRequest;
import com.prodental.user.model.entity.Role;
import com.prodental.user.model.entity.User;
import com.prodental.user.repository.UserRepository;
import com.prodental.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.Conditions;
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
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(UserNotFound::new);
    }

    @Override
    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username)
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
            user.setEnabled(true);
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

    @Override
    public void isUserEnabled(User user) {
        if (!user.isEnabled()) {
            throw new UserNotEnabled();
        }
    }

    @Override
    public void verifyPassword(User user, String password) {
        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new IncorrectPassword();
        }
    }

    /**
     * This method updates the user with the given email with the new
     * details provided in the request object
     *
     * @param request -  the request containing the new user details
     * @param username - the email of the user to update
     */
    @Override
    public AuthenticationToken updateUser(UpdateUserRequest request, String username) {
        User userToUpdate = getUserByUsername(username);
        isUserEnabled(userToUpdate);

        modelMapper.getConfiguration().setPropertyCondition(Conditions.isNotNull());
        modelMapper.map(request, userToUpdate);

        saveUser(userToUpdate);

        String jwtToken = jwtService.generateToken(userToUpdate);

        return AuthenticationToken.builder()
                .token(jwtToken)
                .build();
    }

    @Override
    public void deleteUser(String username) {
        User user = getUserByUsername(username);
        userRepository.delete(user);
    }

    @Override
    public void enableUser(String username) {
        User user = getUserByUsername(username);
        user.setEnabled(true);
        saveUser(user);
    }

    @Override
    public void disableUser(String username) {
        User user = getUserByUsername(username);
        user.setEnabled(false);
        saveUser(user);
    }




}
