
package com.pre012.stackoverflow.answer;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AnswerResponseDto {

    private long aid;

    private String content;


    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;

    private boolean isSelected;
}

