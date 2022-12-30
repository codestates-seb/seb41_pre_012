package com.pre012.stackoverflow.member;

import com.pre012.stackoverflow.auth.CustomAuthorityUtils;
import com.pre012.stackoverflow.exception.BusinessLogicException;
import com.pre012.stackoverflow.exception.ExceptionCode;
import com.pre012.stackoverflow.question.entity.Question;
import com.pre012.stackoverflow.question.repository.QuestionRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;

    private final QuestionRepository questionRepository;

    public MemberService(MemberRepository memberRepository, PasswordEncoder passwordEncoder, CustomAuthorityUtils authorityUtils, QuestionRepository questionRepository) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
        this.authorityUtils = authorityUtils;
        this.questionRepository = questionRepository;
    }



    public Member createMember(Member member) throws Exception {
        if (memberRepository.findByEmail(member.getEmail()).isPresent()) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXIST);
        }
        // 암호화 후 저장
        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);
        // Role 저장
        List<String> roles = authorityUtils.createRoles(member.getEmail());
        member.setRoles(roles);

        return memberRepository.save(member);
    }

    public void deleteMember(Long mid, String email) {
        Member findMember = memberRepository.findById(mid).orElseThrow(()-> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        if ( !findMember.getEmail().equals(email)){
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_ALLOWED);
        }
        memberRepository.delete(findMember(mid));
    }

    public Member findMember(Long mid) {
        return memberRepository.findById(mid).orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
    }

    public Member updateMember(Member member, String email) {
        Member findMember = memberRepository.findById(member.getMid()).orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        if (!findMember.getEmail().equals(email)) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_ALLOWED);
        }

        findMember.setUsername(member.getUsername());


        return memberRepository.save(findMember);
    }


    public Member getMember(long mid, String email) {
        Member findMember = memberRepository.findById(mid).orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        if (!findMember.getEmail().equals(email)) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_ALLOWED);
        }

        return findMember;
    }
}
