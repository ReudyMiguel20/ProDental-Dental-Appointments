package com.prodental.appointment.service.Impl;

import com.prodental.appointment.repository.AppointmentRepository;
import com.prodental.appointment.service.AppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AppointmentServiceImpl implements AppointmentService {

    private final AppointmentRepository appointmentRepository;


}
