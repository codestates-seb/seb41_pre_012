
package com.pre012.stackoverflow.answer;


import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AnswerMapper {


    Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto);

    default AnswerResponseDto answerToAnswerResponseDto(Answer savedAnswer) {

        return new AnswerResponseDto(savedAnswer.getAid(), savedAnswer.getMember().getImg(), savedAnswer.getMember().getUsername(), savedAnswer.getContent(),
                savedAnswer.getCreatedAt(), savedAnswer.getModifiedAt(), savedAnswer.isSelected(),
                savedAnswer.getAnswerRecommend() == null ? 0 : savedAnswer.getAnswerRecommend().size());
    }

    Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto);
}
