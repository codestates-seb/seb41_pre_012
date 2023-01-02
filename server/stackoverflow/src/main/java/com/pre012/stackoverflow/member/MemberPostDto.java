package com.pre012.stackoverflow.member;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.*;
@Getter
@AllArgsConstructor
public class MemberPostDto {

    @ApiModelProperty(example = "abc@abc.com")
    @Email
    @NotBlank
    private String email;

    @ApiModelProperty(example = "홍길동")
    @NotBlank
    @Size(max = 10)
    private String username;

    @ApiModelProperty(example = "12345678")
    @NotBlank
    @Pattern(regexp = "[A-Za-z\\d@$!%*?&]{8,}")
    private String password;
}
