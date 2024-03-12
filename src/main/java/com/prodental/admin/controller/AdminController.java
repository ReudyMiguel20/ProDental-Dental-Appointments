package com.prodental.admin.controller;

import com.prodental.admin.service.AdminService;
import com.prodental.appointment.model.entity.Appointment;
import com.prodental.user.model.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
@RequestMapping("/api/v1/admin")
public class AdminController {

    private final AdminService adminService;

    @GetMapping("/info")
    @ResponseStatus(HttpStatus.OK)
    public User returnAdminInfo(@RequestHeader("Authorization") String authHeader) {
        return adminService.getAdminInfo(authHeader);
    }

    @GetMapping("/users")
    @ResponseStatus(HttpStatus.OK)
    public List<User> getAllUsers() {
        return adminService.getAllusers();
    }

    @GetMapping("/appointments")
    @ResponseStatus(HttpStatus.OK)
    public List<Appointment> getAllAppointments() {
        return adminService.getAllAppointments();
    }

    @DeleteMapping("/users/{username}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUser(@PathVariable String username) {
        adminService.deleteUser(username);
    }

    @DeleteMapping("/appointments/{appointmentId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteAppointment(@PathVariable Long appointmentId) {
        adminService.deleteAppointment(appointmentId);
    }

    @PutMapping("/users/enable/{username}")
    @ResponseStatus(HttpStatus.OK)
    public void enableUser(@PathVariable String username) {
        adminService.enableUser(username);
    }

    @PutMapping("/users/disable/{username}")
    @ResponseStatus(HttpStatus.OK)
    public void disableUser(@PathVariable String username) {
        adminService.disableUser(username);
    }

    @PutMapping("/appointments/scheduled/{appointmentId}")
    @ResponseStatus(HttpStatus.OK)
    public void setAppointmentAsScheduled(@PathVariable Long appointmentId) {
        adminService.setAppointmentAsScheduled(appointmentId);
    }

    @PutMapping("/appointments/canceled/{appointmentId}")
    @ResponseStatus(HttpStatus.OK)
    public void setAppointmentAsCanceled(@PathVariable Long appointmentId) {
        adminService.setAppointmentAsCanceled(appointmentId);
    }

    @PutMapping("/appointments/pending/{appointmentId}")
    @ResponseStatus(HttpStatus.OK)
    public void setAppointmentAsPending(@PathVariable Long appointmentId) {
        adminService.setAppointmentAsPending(appointmentId);
    }

    @PutMapping("/appointments/completed/{appointmentId}")
    @ResponseStatus(HttpStatus.OK)
    public void setAppointmentAsCompleted(@PathVariable Long appointmentId) {
        adminService.setAppointmentAsCompleted(appointmentId);
    }

    @PutMapping("/appointments/rescheduled/{appointmentId}")
    @ResponseStatus(HttpStatus.OK)
    public void setAppointmentAsRescheduled(@PathVariable Long appointmentId) {
        adminService.setAppointmentAsRescheduled(appointmentId);
    }






}
