package com.prodental.appointment.repository;

import com.prodental.appointment.model.entity.Appointment;
import com.prodental.user.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    Optional<List<Appointment>> findAllByUser(User user);
}
