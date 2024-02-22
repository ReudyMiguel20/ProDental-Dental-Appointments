package com.prodental.user.service;

import com.prodental.user.model.dto.NewUserRequest;
import com.prodental.user.model.dto.UpdateUserRequest;
import com.prodental.user.model.entity.User;

import java.util.List;

public interface UserService {
    void saveUser(User user);

    // Maybe the use case for this would be when user forgets their username and know the email
    User getUserByEmail(String email);

    List<User> getAllUsers();

    void assignRoleToUser(User user);

    User createNewUserAndAssignRole(NewUserRequest newUserRequest);

    User getUserByToken(String token);

    void activateUser(User user);

    void isUserEnabled(User user);

    void updateUser(UpdateUserRequest request, String email);
}
