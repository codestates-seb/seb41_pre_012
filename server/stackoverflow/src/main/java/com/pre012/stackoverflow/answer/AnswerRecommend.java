package com.pre012.stackoverflow.answer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class AnswerRecommend {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long arid;


    @JoinColumn(name="aid")
    @ManyToOne
    private Answer answer;


  /*  @JoinColumn(name="mid")
    @ManyToOne
    private Member member;

   */


}
