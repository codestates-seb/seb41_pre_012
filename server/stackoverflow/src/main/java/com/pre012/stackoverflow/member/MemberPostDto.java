package com.pre012.stackoverflow.member;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.*;

@Getter
@AllArgsConstructor
public class MemberPostDto {
    @Email
    @NotBlank
    private String email;

    @NotBlank
    @Size(max = 10)
    private String username;

    @NotBlank
    @Pattern(regexp = "[A-Za-z\\d@$!%*?&]{8,}")
    private String password;
}
