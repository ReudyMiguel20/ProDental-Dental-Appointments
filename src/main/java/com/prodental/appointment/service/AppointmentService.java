package com.prodental.appointment.service;


import com.prodental.appointment.model.dto.AppointmentRequest;
import com.prodental.appointment.model.entity.Appointment;

import java.util.List;

public interface AppointmentService {

    void saveAppointment(Appointment appointment);

    void createAppointment(AppointmentRequest appointmentRequest, String token);

    // method to retrieve appointments for the current user
    List<Appointment> getAppointments(String username, String token);
}
