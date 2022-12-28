package com.pre012.stackoverflow.question.dto;

import com.pre012.stackoverflow.question.entity.Question;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class QuestionPatchDto {

//    @ApiModelProperty(example = "게시글 번호")
//    private Long qid;

    @ApiModelProperty(example = "제목")
    private String title;

    @ApiModelProperty(example = "내용")
    private String content;

//    @ApiModelProperty(example = "수정 시간")
//    private LocalDateTime modifiedAt;

    public Question toQuestion(Long qid, QuestionPatchDto questionPatchDto){
        return Question.builder()
                .qid(qid)
                .title(questionPatchDto.getTitle())
                .content(questionPatchDto.getContent())
                .modifiedAt(LocalDateTime.now().withNano(0))
                .build();
    }

}
