package com.pre012.stackoverflow.member;


import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class MemberResponseDto {
    private Long mid;
    private String email;
    private String username;
    private String img;
}
