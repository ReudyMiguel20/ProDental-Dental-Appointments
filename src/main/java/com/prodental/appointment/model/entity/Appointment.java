package com.prodental.appointment.model.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;
import com.prodental.user.model.entity.User;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Getter
@Setter
@ToString
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "appointments")
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private Long id;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "username", nullable = false)
    private User user;

    @JsonProperty("appointment_date")
    private LocalDate appointmentDate;

    @JsonProperty("appointment_time")
    private LocalTime appointmentTime;

    @Enumerated(EnumType.STRING)
    private Procedures procedure;

    @Enumerated(EnumType.STRING)
    private Status status;

    private String dentist;

    private String location;

    private String notes;

}
