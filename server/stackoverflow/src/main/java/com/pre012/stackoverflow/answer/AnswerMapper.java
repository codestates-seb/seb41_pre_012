
package com.pre012.stackoverflow.answer;



import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AnswerMapper {


    Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto);

    AnswerResponseDto answerToAnswerResponseDto(Answer savedAnswer);

    Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto);
}
