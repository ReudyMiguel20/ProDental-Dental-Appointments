package com.prodental.admin.service;

import com.prodental.appointment.model.entity.Appointment;
import com.prodental.user.model.entity.User;

import java.util.List;

public interface AdminService {
    void deleteUser(String username);

    void deleteAppointment(Long appointmentId);

    void enableUser(String username);

    void disableUser(String username);

    void setAppointmentAsScheduled(Long appointmentId);

    void setAppointmentAsCanceled(Long appointmentId);

    void setAppointmentAsPending(Long appointmentId);

    void setAppointmentAsCompleted(Long appointmentId);

    void setAppointmentAsRescheduled(Long appointmentId);

    List<User> getAllusers();

    List<Appointment> getAllAppointments();

    User getAdminInfo(String token);
}
