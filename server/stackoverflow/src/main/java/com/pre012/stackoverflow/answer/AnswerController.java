
package com.pre012.stackoverflow.answer;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController
@RequestMapping("/answers")
@Api(tags = {"회원"})
public class AnswerController {

    AnswerService answerService;
    AnswerMapper answerMapper;

    public AnswerController(AnswerService answerService, AnswerMapper answerMapper) {
        this.answerService = answerService;
        this.answerMapper = answerMapper;
    }

    @PostMapping("/{qid}")
    @ApiOperation(value = "답변 등록", notes = "답변 등록 API")
    public ResponseEntity postAnswer(@PathVariable("qid") long qid,
                                     @RequestBody AnswerPostDto answerPostDto,
                                     @AuthenticationPrincipal String email){

        Answer answer = answerMapper.answerPostDtoToAnswer(answerPostDto);
        Answer savedAnswer = answerService.createAnswer(answer, email, qid);
        AnswerResponseDto response = answerMapper.answerToAnswerResponseDto(savedAnswer);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PatchMapping("/{aid}")
    @ApiOperation(value = "답변 수정", notes = "답변 수정 API")
    public ResponseEntity patchAnswer(@PathVariable("aid") long aid,
                                      @Valid @RequestBody AnswerPatchDto answerPatchDto,
                                      @AuthenticationPrincipal String email){
        Answer answer = answerMapper.answerPatchDtoToAnswer(answerPatchDto);
        answer.setAid(aid);
        Answer response = answerService.updateAnswer(answer, email);

        return new ResponseEntity<>(answerMapper.answerToAnswerResponseDto(response), HttpStatus.OK);
    }

    @DeleteMapping("/{aid}")
    @ApiOperation(value = "답변 삭제", notes = "답변 삭제 API")
    public ResponseEntity deleteAnswer(@PathVariable("aid") long aid,
                                       @AuthenticationPrincipal String email){
        answerService.deleteAnswer(aid, email);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
