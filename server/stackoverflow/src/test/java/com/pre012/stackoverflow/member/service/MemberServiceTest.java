package com.pre012.stackoverflow.member.service;


import com.pre012.stackoverflow.member.Member;
import com.pre012.stackoverflow.member.MemberRepository;
import com.pre012.stackoverflow.member.MemberService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doReturn;

@ExtendWith(MockitoExtension.class)
public class MemberServiceTest {
    @InjectMocks
    private MemberService memberService;

    @Mock
    private MemberRepository memberRepository;

    @Test
    public void memberServiceTest() throws Exception {
        //given
        Member member = Member.builder()
                .email("hgd@gmail.com")
                .username("홍길동")
                .password("1234")
                .build();

        Member returnMember = Member.builder()
                .uid(1L)
                .email("hgd@gmail.com")
                .username("홍길동")
                .password("1234")
                .build();

        doReturn(returnMember).when(memberRepository).save(any(Member.class));

        //when
        Member createdMember = memberService.createMember(member);

        //then
        assertNotNull(createdMember);
        assertTrue(createdMember.getUid().equals(returnMember.getUid()));
        assertTrue(createdMember.getUsername().equals(returnMember.getUsername()));
        assertTrue(createdMember.getEmail().equals(returnMember.getEmail()));
        assertTrue(createdMember.getPassword().equals(returnMember.getPassword()));
    }

    @Test
    public void memberExistTest() {
        //given
        Member member = Member.builder()
                .email("hgd@gmail.com")
                .username("홍길동")
                .password("1234")
                .build();
        doReturn(Optional.of(new Member())).when(memberRepository).findByEmail(any());

        //when
        Exception result = assertThrows(Exception.class, () -> memberService.createMember(member));

        //then
        assertThat(result.getMessage()).isEqualTo("등록된 멤버가 존재합니다");
    }

}
