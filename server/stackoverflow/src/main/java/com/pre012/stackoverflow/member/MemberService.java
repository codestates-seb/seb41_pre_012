package com.pre012.stackoverflow.member;

import com.pre012.stackoverflow.exception.BusinessLogicException;
import com.pre012.stackoverflow.exception.ExceptionCode;
import org.springframework.stereotype.Service;

@Service
public class MemberService {
    private MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }


    public Member createMember(Member member) throws Exception {
        if (memberRepository.findByEmail(member.getEmail()).isPresent()) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXIST);
        }
        return memberRepository.save(member);
    }

    public void deleteMember(Long mid) {
        memberRepository.delete(findMember(mid));
    }

    public Member findMember(Long mid) {
        return memberRepository.findById(mid).orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
    }
}