package com.prodental.user.service;

import com.prodental.auth.model.dto.AuthenticationToken;
import com.prodental.user.model.dto.NewUserRequest;
import com.prodental.user.model.dto.UpdateUserRequest;
import com.prodental.user.model.entity.User;

import java.util.List;

public interface UserService {
    void saveUser(User user);

    // Maybe the use case for this would be when user forgets their username and know the email
    User getUserByEmail(String email);

    User getUserByUsername(String username);

    List<User> getAllUsers();

    void assignRoleToUser(User user);

    User createNewUserAndAssignRole(NewUserRequest newUserRequest);

    User getUserByToken(String token);

    void activateUser(User user);

    void isUserEnabled(User user);

    void verifyPassword(User user, String password);

    AuthenticationToken updateUser(UpdateUserRequest request, String email);

    void deleteUser(String username);

    void enableUser(String username);

    void disableUser(String username);
}
