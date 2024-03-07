package com.prodental.appointment.service.Impl;

import com.prodental.appointment.exception.AppointmentNotFound;
import com.prodental.appointment.model.dto.AppointmentRequest;
import com.prodental.appointment.model.entity.Appointment;
import com.prodental.appointment.model.entity.Status;
import com.prodental.appointment.repository.AppointmentRepository;
import com.prodental.appointment.service.AppointmentService;
import com.prodental.common.jwt.JwtService;
import com.prodental.user.model.entity.User;
import com.prodental.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AppointmentServiceImpl implements AppointmentService {

    private final ModelMapper modelMapper;
    private final AppointmentRepository appointmentRepository;
    private final UserService userService;
    private final JwtService jwtService;

    @Override
    public void saveAppointment(Appointment appointment) {
        appointmentRepository.save(appointment);
    }

    @Override
    public void createAppointment(AppointmentRequest appointmentRequest, String token) {
        Appointment appointment = modelMapper.map(appointmentRequest, Appointment.class);
        User user = userService.getUserByUsername(jwtService.extractUsername(token.substring(7)));

        appointment.setStatus(Status.PENDIENTE);
        appointment.setUser(user);
        appointment.setNotes("");

        appointmentRepository.save(appointment);
    }

    @Override
    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    // method to retrieve appointments for the current user
    @Override
    public List<Appointment> getAppointments(String username, String token) {
        User user = userService.getUserByUsername(jwtService.extractUsername(token.substring(7)));

        return appointmentRepository.findAllByUser(user)
                .orElseThrow(RuntimeException::new);
    }

    @Override
    public void deleteAppointment(Long appointmentId) {
        Appointment appointmentToDelete = appointmentRepository.findById(appointmentId)
                        .orElseThrow(AppointmentNotFound::new);

        appointmentRepository.delete(appointmentToDelete);
    }

    @Override
    public void setAppointmentAsScheduled(Long appointmentId) {
        Appointment appointment = appointmentRepository.findById(appointmentId)
                .orElseThrow(AppointmentNotFound::new);

        appointment.setStatus(Status.AGENDADA);

        appointmentRepository.save(appointment);
    }

    @Override
    public void setAppointmentAsCanceled(Long appointmentId) {
        Appointment appointment = appointmentRepository.findById(appointmentId)
                .orElseThrow(AppointmentNotFound::new);

        appointment.setStatus(Status.CANCELADA);

        appointmentRepository.save(appointment);
    }

    @Override
    public void setAppointmentAsPending(Long appointmentId) {
        Appointment appointment = appointmentRepository.findById(appointmentId)
                .orElseThrow(AppointmentNotFound::new);

        appointment.setStatus(Status.PENDIENTE);

        appointmentRepository.save(appointment);
    }

    @Override
    public void setAppointmentAsCompleted(Long appointmentId) {
        Appointment appointment = appointmentRepository.findById(appointmentId)
                .orElseThrow(AppointmentNotFound::new);

        appointment.setStatus(Status.COMPLETADA);

        appointmentRepository.save(appointment);
    }

    @Override
    public void setAppointmentAsRescheduled(Long appointmentId) {
        Appointment appointment = appointmentRepository.findById(appointmentId)
                .orElseThrow(AppointmentNotFound::new);

        appointment.setStatus(Status.REPROGRAMADA);

        appointmentRepository.save(appointment);
    }



}
