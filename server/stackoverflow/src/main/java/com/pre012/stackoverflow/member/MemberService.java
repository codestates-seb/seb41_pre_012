package com.pre012.stackoverflow.member;

import org.springframework.stereotype.Service;

@Service
public class MemberService {
    private MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }


    public Member createMember(Member member) throws Exception {
        if (memberRepository.findByEmail(member.getEmail()).isPresent()) {
            throw new Exception("등록된 멤버가 존재합니다");
        }
        return memberRepository.save(member);
    }
}
