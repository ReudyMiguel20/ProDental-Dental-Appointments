package com.prodental.appointment.service.Impl;

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
}
