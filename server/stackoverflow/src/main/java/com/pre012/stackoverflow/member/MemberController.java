package com.pre012.stackoverflow.member;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/members")
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper memberMapper;

    public MemberController(MemberService memberService, MemberMapper memberMapper) {
        this.memberService = memberService;
        this.memberMapper = memberMapper;
    }

    @PostMapping
    public ResponseEntity postMember(@Valid @RequestBody MemberPostDto memberPostDto) throws Exception {
        Member member = memberService.createMember(memberMapper.memberPostDtoToMember(memberPostDto));
        MemberResponseDto response = memberMapper.memberToMemberResponseDto(member);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(@PathVariable("member-id") Long mid) {
        memberService.deleteMember(mid);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
