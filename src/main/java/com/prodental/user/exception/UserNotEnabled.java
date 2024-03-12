package com.prodental.user.exception;


public class UserNotEnabled extends RuntimeException {

    public UserNotEnabled() {
    }

    public UserNotEnabled(String message) {
        super(message);
    }

    public UserNotEnabled(String message, Throwable cause) {
        super(message, cause);
    }

    public UserNotEnabled(Throwable cause) {
        super(cause);
    }

    public UserNotEnabled(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
