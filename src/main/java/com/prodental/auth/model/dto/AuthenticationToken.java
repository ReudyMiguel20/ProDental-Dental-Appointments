package com.prodental.auth.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.internal.build.AllowSysOut;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AuthenticationToken {

    private String token;
}
