
package com.pre012.stackoverflow.answer;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController
@RequestMapping("/answers")
@Api(tags = {"PreProject API Test"})
public class AnswerController {

    AnswerService answerService;
    AnswerMapper answerMapper;

    public AnswerController(AnswerService answerService, AnswerMapper answerMapper) {
        this.answerService = answerService;
        this.answerMapper = answerMapper;
    }

    @PostMapping

    public ResponseEntity postAnswer(@RequestBody AnswerPostDto answerPostDto){
        Answer answer = answerMapper.answerPostDtoToAnswer(answerPostDto);
        Answer savedAnswer = answerService.createAnswer(answer);
        AnswerResponseDto response = answerMapper.answerToAnswerResponseDto(savedAnswer);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PatchMapping("/{aid}")

    public ResponseEntity patchAnswer(@PathVariable("aid") long aid,
                                      @Valid @RequestBody AnswerPatchDto answerPatchDto){
        answerPatchDto.setAid(aid);
        Answer response = answerService.updateAnswer(answerMapper.answerPatchDtoToAnswer(answerPatchDto));

        return new ResponseEntity<>(answerMapper.answerToAnswerResponseDto(response), HttpStatus.OK);
    }

    @DeleteMapping("/{aid}")

    public ResponseEntity deleteAnswer(@PathVariable("aid") long aid){
        answerService.deleteAnswer(aid);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
