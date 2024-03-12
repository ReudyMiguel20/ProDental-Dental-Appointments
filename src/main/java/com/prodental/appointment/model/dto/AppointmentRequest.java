package com.prodental.appointment.model.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.prodental.appointment.model.entity.Procedures;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AppointmentRequest {

    @JsonProperty("appointment_date")
    @NotNull
    private LocalDate appointmentDate;

    @JsonProperty("appointment_time")
    @NotNull
    private LocalTime appointmentTime;

    private Procedures procedure;

    @NotNull
    @NotEmpty
    private String dentist;

    @NotNull
    @NotEmpty
    private String location;
}
