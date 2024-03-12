package com.prodental.appointment.exception;

public class AppointmentNotFound  extends RuntimeException {

    public AppointmentNotFound() {
    }

    public AppointmentNotFound(String message) {
        super(message);
    }

    public AppointmentNotFound(String message, Throwable cause) {
        super(message, cause);
    }

    public AppointmentNotFound(Throwable cause) {
        super(cause);
    }

    public AppointmentNotFound(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

}
