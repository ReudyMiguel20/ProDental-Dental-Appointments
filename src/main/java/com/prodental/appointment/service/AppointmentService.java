package com.prodental.appointment.service;


import com.prodental.appointment.model.dto.AppointmentRequest;
import com.prodental.appointment.model.entity.Appointment;

public interface AppointmentService {

    void saveAppointment(Appointment appointment);

    void createAppointment(AppointmentRequest appointmentRequest, String token);
}
