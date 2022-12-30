package com.pre012.stackoverflow.member;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

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
    @DeleteMapping("/{mid}")
    public ResponseEntity deleteMember(@PathVariable("mid") long mid,
                                       @AuthenticationPrincipal String email) {
        memberService.deleteMember(mid, email);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }



    @PatchMapping("/{mid}")
    @ApiOperation(value = "회원정보 수정", notes = "회원정보 수정 API")
    public ResponseEntity patchAnswer(@PathVariable("mid") long mid,
                                      @Valid @RequestBody MemberPatchDto memberPatchDto,
                                      @AuthenticationPrincipal String email) {
        Member member = memberMapper.memberPatchDtoToMember(memberPatchDto);
        member.setMid(mid);
        Member response = memberService.updateMember(member, email);

        return new ResponseEntity<>(memberMapper.memberToMemberResponseDto(response), HttpStatus.OK);

    }


    @GetMapping("/{mid}")
    public ResponseEntity getAnswer(@PathVariable("mid") long mid,
                                    @AuthenticationPrincipal String email){
        Member member = memberService.getMember(mid, email);
        MemberDetailResponseDto response = memberMapper.memberToMemberDetailResponseDto(member);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }




}
