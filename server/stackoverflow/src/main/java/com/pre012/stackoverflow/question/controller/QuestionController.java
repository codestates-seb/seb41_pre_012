package com.pre012.stackoverflow.question.controller;

import com.pre012.stackoverflow.question.dto.QuestionPatchDto;
import com.pre012.stackoverflow.question.dto.QuestionPostDto;
import com.pre012.stackoverflow.question.service.QuestionService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@Api(tags = {"질문"})
@RestController
@RequiredArgsConstructor
@RequestMapping("/questions")
public class QuestionController {

    private final QuestionService service;

    @ApiOperation(value = "질문 등록", notes = "게시판에 질문을 등록한다.")

    @PostMapping
    public ResponseEntity postQuestion(@RequestBody QuestionPostDto questionPostDto,
                                       @AuthenticationPrincipal String email) {

        return service.create(questionPostDto, email);
    }

    @ApiOperation(value = "질문 수정", notes = "게시판에 등록한 질문을 수정한다.")
    @PatchMapping("/{qid}")
    public ResponseEntity patchQuestion(@PathVariable("qid") Long qid,
                                        @Valid @RequestBody QuestionPatchDto questionPatchDto,
                                        @AuthenticationPrincipal String email) {

        return service.update(qid, email, questionPatchDto);
    }

    @ApiOperation(value = "질문 조회", notes = "게시판 질문을 조회한다.")
    @ApiImplicitParam(name = "qid", value = "게시글 번호", paramType = "path")
    @GetMapping("/{qid}")
    public ResponseEntity detail(@PathVariable("qid") Long qid) {

        return service.detail(qid);
    }

    @ApiOperation(value = "질문 목록 조회", notes = "전체 질문목록을 조회한다.")
    @GetMapping
    public ResponseEntity list(@Positive @RequestParam int page,
                               @Positive @RequestParam int size) {

        return service.list(page, size);
    }

    @ApiOperation(value = "질문 삭제", notes = "등록된 질문을 삭제한다.")
    @ApiImplicitParam(name = "qid", value = "게시글 번호", paramType = "path")
    @DeleteMapping("/{qid}")
    public ResponseEntity delete(@PathVariable("qid") Long qid,
                                 @AuthenticationPrincipal String email) {

        return service.delete(qid, email);
    }
}
