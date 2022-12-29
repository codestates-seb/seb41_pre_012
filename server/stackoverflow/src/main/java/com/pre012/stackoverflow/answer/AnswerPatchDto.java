
package com.pre012.stackoverflow.answer;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Column;
import java.time.LocalDateTime;

@Data
public class AnswerPatchDto {
    private long aid;

    private String content;



    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt = LocalDateTime.now();

    private boolean isSelected;

    public void setAid(long aid){
        this.aid = aid;
    }
}
