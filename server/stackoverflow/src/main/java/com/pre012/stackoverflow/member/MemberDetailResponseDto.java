package com.pre012.stackoverflow.member;

import com.pre012.stackoverflow.answer.AnswerListDto;
import com.pre012.stackoverflow.question.dto.QuestionDto;
import com.pre012.stackoverflow.question.dto.QuestionListDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;


import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class MemberDetailResponseDto {
    private long mid;
    private String userInfo;

    private String img;

    private int questionCount;

    private int answerCount;

    private List<QuestionListDto> questionList;

    private List<AnswerListDto> answerList;
}
