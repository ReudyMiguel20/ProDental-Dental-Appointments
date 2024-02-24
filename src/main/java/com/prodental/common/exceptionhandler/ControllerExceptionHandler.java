package com.prodental.common.exceptionhandler;

import com.prodental.user.exception.EmailNotFound;
import com.prodental.user.exception.IncorrectPassword;
import com.prodental.user.exception.UserNotEnabled;
import com.prodental.user.exception.UserNotFound;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.constraints.Email;
import org.springframework.http.*;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;


import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@ControllerAdvice
public class ControllerExceptionHandler extends ResponseEntityExceptionHandler {

    public static DateTimeFormatter formatter = DateTimeFormatter.ISO_LOCAL_DATE_TIME;

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
                                                                  HttpHeaders headers,
                                                                  HttpStatusCode status,
                                                                  WebRequest request) {

        HttpServletRequest requestServlet = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();
        String path = requestServlet.getRequestURI();

        CustomErrorMessage customErrorMessage = CustomErrorMessage.builder()
                .timestamp(LocalDateTime.now().format(formatter))
                .status(status.value())
                .error(status.toString())
                .message("The request contains invalid data, probably left some field empty or null.")
                .path(path)
                .build();

        return ResponseEntity.badRequest().body(customErrorMessage);
    }

    @ExceptionHandler(UserNotFound.class)
    public ResponseEntity<Object> handleUserNotFound(MethodArgumentNotValidException ex,
                                                        HttpHeaders headers,
                                                        HttpStatus status,
                                                        WebRequest request) {

        HttpServletRequest requestServlet = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();
        String path = requestServlet.getRequestURI();

        CustomErrorMessage customErrorMessage = CustomErrorMessage.builder()
                .timestamp(LocalDateTime.now().format(formatter))
                .status(404)
                .error("Not Found")
                .message("The user was not found.")
                .path(path)
                .build();

        return ResponseEntity.status(404).body(customErrorMessage);
    }

    @ExceptionHandler(EmailNotFound.class)
    public ResponseEntity<Object> handleEmailNotFound(EmailNotFound ex,
                                                      WebRequest request) {

        HttpServletRequest requestServlet = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();
        String path = requestServlet.getRequestURI();

        CustomErrorMessage customErrorMessage = CustomErrorMessage.builder()
                .timestamp(LocalDateTime.now().format(formatter))
                .status(HttpStatus.NOT_FOUND.value())
                .error(HttpStatus.NOT_FOUND.getReasonPhrase())
                .message("There's no registered user with this email.")
                .path(path)
                .build();

        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(customErrorMessage);
    }

    @ExceptionHandler(UserNotEnabled.class)
    public ResponseEntity<Object> handleUserNotEnabled(UserNotEnabled ex,
                                                       WebRequest request) {

        HttpServletRequest requestServlet = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();
        String path = requestServlet.getRequestURI();

        CustomErrorMessage customErrorMessage = CustomErrorMessage.builder()
                .timestamp(LocalDateTime.now().format(formatter))
                .status(HttpStatus.FORBIDDEN.value())
                .error(HttpStatus.FORBIDDEN.getReasonPhrase())
                .message("User is not enabled yet. Try contacting an administrator.")
                .path(path)
                .build();

        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(customErrorMessage);
    }

    @ExceptionHandler(IncorrectPassword.class)
    public ResponseEntity<Object> handleIncorrectPassword() {
        HttpServletRequest requestServlet = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();
        String path = requestServlet.getRequestURI();

        CustomErrorMessage customErrorMessage = CustomErrorMessage.builder()
                .timestamp(LocalDateTime.now().format(formatter))
                .status(HttpStatus.FORBIDDEN.value())
                .error(HttpStatus.FORBIDDEN.getReasonPhrase())
                .message("Password is incorrect.")
                .path(path)
                .build();

        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(customErrorMessage);
    }

}
