package com.prodental.appointment.controller;

import com.prodental.appointment.model.dto.AppointmentRequest;
import com.prodental.appointment.model.entity.Appointment;
import com.prodental.appointment.service.AppointmentService;
import com.prodental.auth.model.dto.AuthenticationToken;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
@RequestMapping("/api/v1/appointment")
public class AppointmentController {

    private final AppointmentService appointmentService;


    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public void createAppointment(
            @Valid @RequestBody AppointmentRequest request,
            @RequestHeader("Authorization") String token
    ) {
        appointmentService.createAppointment(request, token);
    }

    @GetMapping("/appointments")
    @ResponseStatus(HttpStatus.OK)
    public List<Appointment> getAppointments(
            @RequestParam("username") String username,
            @RequestHeader("Authorization") String token
    ) {
        return appointmentService.getAppointments(username, token);
    }

    @DeleteMapping("/{appointmentId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteAppointment(
            @PathVariable Long appointmentId
    ) {
        appointmentService.deleteAppointment(appointmentId);
    }

}
