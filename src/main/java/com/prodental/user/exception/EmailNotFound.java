package com.prodental.user.exception;

public class EmailNotFound extends RuntimeException{

    public EmailNotFound() {
    }

    public EmailNotFound(String message) {
        super(message);
    }

    public EmailNotFound(String message, Throwable cause) {
        super(message, cause);
    }

    public EmailNotFound(Throwable cause) {
        super(cause);
    }

    public EmailNotFound(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
