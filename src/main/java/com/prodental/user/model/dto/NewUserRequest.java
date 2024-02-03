package com.prodental.user.model.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class NewUserRequest {

    @NotEmpty(message = "Username is required")
    @NotBlank(message = "Username is required")
    private String username;

    @NotEmpty(message = "Email is required")
    @NotBlank(message = "Username is required")
    private String email;

    @NotEmpty(message = "Password is required")
    @NotBlank(message = "Username is required")
    @Size(min = 6, message = "Password must be at least 6 characters long")
    private String password;

}
