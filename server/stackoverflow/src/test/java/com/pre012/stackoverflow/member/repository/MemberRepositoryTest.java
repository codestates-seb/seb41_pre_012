package com.pre012.stackoverflow.member.repository;

import com.pre012.stackoverflow.member.Member;
import com.pre012.stackoverflow.member.MemberRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
public class MemberRepositoryTest {
    @Autowired
    private MemberRepository memberRepository;

    @Test
    public void createAndDeleteMemberTest() {
        Member member = Member.builder()
                .email("hgd@gmail.com")
                .username("홍길동")
                .password("a1234567")
                .build();

        Member savedMember = memberRepository.save(member);

        assertNotNull(savedMember);
        assertTrue(savedMember.getUsername().equals(member.getUsername()));
        assertTrue(savedMember.getEmail().equals(member.getEmail()));
        assertTrue(savedMember.getPassword().equals(member.getPassword()));

        memberRepository.delete(savedMember);

        assertFalse(memberRepository.findById(savedMember.getMid()).isPresent());
    }
}
