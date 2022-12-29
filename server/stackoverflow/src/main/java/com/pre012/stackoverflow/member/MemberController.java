package com.pre012.stackoverflow.member;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Api(tags = {"회원"})
@RestController
@RequestMapping("/members")
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper memberMapper;

    public MemberController(MemberService memberService, MemberMapper memberMapper) {
        this.memberService = memberService;
        this.memberMapper = memberMapper;
    }

    @ApiOperation(value="회원 정보 등록", notes="회원 정보를 등록한다.")
    @PostMapping
    public ResponseEntity postMember(@Valid @RequestBody MemberPostDto memberPostDto) throws Exception {
        Member member = memberService.createMember(memberMapper.memberPostDtoToMember(memberPostDto));
        MemberResponseDto response = memberMapper.memberToMemberResponseDto(member);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @ApiOperation(value="회원 삭제", notes="회원 정보를 삭제한다.")
    @ApiImplicitParam(name = "member-id", value = "회원 정보", paramType = "path")
    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(@PathVariable("member-id") Long mid) {
        memberService.deleteMember(mid);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
