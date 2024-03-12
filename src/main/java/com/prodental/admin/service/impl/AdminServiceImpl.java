package com.prodental.admin.service.impl;

import com.prodental.admin.service.AdminService;
import com.prodental.appointment.model.entity.Appointment;
import com.prodental.appointment.service.AppointmentService;
import com.prodental.common.jwt.JwtService;
import com.prodental.user.model.entity.User;
import com.prodental.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService {

    private final UserService userService;
    private final AppointmentService appointmentService;
    private final JwtService jwtService;

    @Override
    public void deleteUser(String username) {
        userService.deleteUser(username);
    }

    @Override
    public void deleteAppointment(Long appointmentId) {
        appointmentService.deleteAppointment(appointmentId);
    }

    @Override
    public void enableUser(String username) {
        userService.enableUser(username);
    }

    @Override
    public void disableUser(String username) {
        userService.disableUser(username);
    }

    @Override
    public void setAppointmentAsScheduled(Long appointmentId) {
        appointmentService.setAppointmentAsScheduled(appointmentId);
    }

    @Override
    public void setAppointmentAsCanceled(Long appointmentId) {
        appointmentService.setAppointmentAsCanceled(appointmentId);
    }

    @Override
    public void setAppointmentAsPending(Long appointmentId) {
        appointmentService.setAppointmentAsPending(appointmentId);
    }

    @Override
    public void setAppointmentAsCompleted(Long appointmentId) {
        appointmentService.setAppointmentAsCompleted(appointmentId);
    }

    @Override
    public void setAppointmentAsRescheduled(Long appointmentId) {
        appointmentService.setAppointmentAsRescheduled(appointmentId);
    }

    @Override
    public List<User> getAllusers() {
        return userService.getAllUsers();
    }

    @Override
    public List<Appointment> getAllAppointments() {
        return appointmentService.getAllAppointments();
    }

    @Override
    public User getAdminInfo(String token) {
        return userService.getUserByUsername(jwtService.extractUsername(token.substring(7)));
    }


}
