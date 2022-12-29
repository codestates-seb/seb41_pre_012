package com.pre012.stackoverflow.member;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.*;
@Getter
@AllArgsConstructor
public class MemberPostDto {

    @ApiModelProperty(example = "이메일 주소")
    @Email
    @NotBlank
    private String email;

    @ApiModelProperty(example = "이름")
    @NotBlank
    @Size(max = 10)
    private String username;

    @ApiModelProperty(example = "비밀번호")
    @NotBlank
    @Pattern(regexp = "[A-Za-z\\d@$!%*?&]{8,}")
    private String password;
}
