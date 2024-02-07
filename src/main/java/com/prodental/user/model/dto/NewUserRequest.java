package com.prodental.user.model.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class NewUserRequest {

    @NotEmpty(message = "First name is required")
    @NotBlank(message = "First name cannot be blank")
    @JsonProperty("first_name")
    private String firstName;

    @NotEmpty(message = "Last name is required")
    @NotBlank(message = "Last name cannot be blank")
    @JsonProperty("last_name")
    private String lastName;

    @JsonProperty("date_of_birth")
    private LocalDate dateOfBirth;

    @NotEmpty(message = "Phone number is required")
    @NotBlank(message = "Phone number cannot be blank")
    @JsonProperty("phone_number")
    private String phoneNumber;

    @NotEmpty(message = "Address is required")
    @NotBlank(message = "Address cannot be blank")
    private String address;

    @NotEmpty(message = "Username is required")
    @NotBlank(message = "Username is required")
    private String username;

    @NotEmpty(message = "Email is required")
    @NotBlank(message = "Email is required")
    private String email;

    @NotEmpty(message = "Password is required")
    @NotBlank(message = "Username is required")
    @Size(min = 6, message = "Password must be at least 6 characters long")
    private String password;

}
