package com.pre012.stackoverflow.question.dto;

import com.pre012.stackoverflow.answer.AnswerResponseDto;
import com.pre012.stackoverflow.question.entity.Question;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class QuestionDetailDto {
    private Long qid;

    private Long mid;

    private String title;

    private String content;

    private String userInfo;

    private int question_recommend;

    private Long view;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;

    private List<AnswerResponseDto> answer_list;

    public static QuestionDetailDto result(Question question) {

        List<AnswerResponseDto> answerResponseDtos = question.getAnswerList().stream().map(answer
                -> new AnswerResponseDto(answer.getAid(), answer.getMember().getUsername(), answer.getContent(),
                answer.getCreatedAt(), answer.getModifiedAt(), answer.isSelected(),
                answer.getAnswerRecommend() == null ? 0 : answer.getAnswerRecommend().size())).collect(Collectors.toList());

        return QuestionDetailDto.builder()
                .qid(question.getQid())
                .mid(question.getMember().getMid())
                .title(question.getTitle())
                .content(question.getContent())
                .userInfo(question.getMember().getUsername())
                .question_recommend(question.getQuestionRecommend() == null ? 0 : question.getQuestionRecommend().size())
                .view(question.getView())
                .createdAt(question.getCreatedAt())
                .modifiedAt(question.getModifiedAt())
                .answer_list(answerResponseDtos)
                .build();
    }
}
