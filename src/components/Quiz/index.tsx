import React, { FC, FormEvent, ReactNode, useEffect, useState } from 'react';
import { Question } from '../../utils/questions';
import styles from './styles.module.css';

interface QuizProps{
    question: Question;
    next: (arg0: number) => void;
    prev: () => void;
    count: number;
    checked_num?:number;
}

const Quiz:FC<QuizProps> = ({question, next, prev, count, checked_num}) =>{
    const [checked, setChecked] = useState< number | undefined>();
    const [error, setError] = useState(false);
    useEffect(() => {
        setChecked(checked_num)
    }, [question])

    const onNextClickHandler = () => {
        if(checked === undefined)
            setError(true);
        else {
            next(checked);
        }
    }

    const checkHandler = (event: FormEvent<HTMLInputElement>) => {
        setError(false);
        setChecked(+(event.target as HTMLInputElement).value);
    }

    function circleProgress():ReactNode[]{
        const circles = []
        for(let i = 0; i < count; i++)
            if(i === question.id)
                circles.push(   <circle cx={10 + i*30} cy="10" r="10" fill="#00A5FF" key={i}/>)
            else circles.push(   <circle cx={10 + i*30} cy="10" r="10" fill="#89D1F8" key={i}/>)
        return  circles
    }

  return (
    <div className={styles.wrapper}>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="20" viewBox="0 0 80 20" fill="none">
            {circleProgress()}
        </svg>
        <p className={styles.number_text}>Вопрос {question.id + 1} из {count}</p>
        </div>
            <h5 className={styles.question}>
                {question.title}
            </h5>
            <div className={styles.answers_wrapper}>
                {
                    question.answers.map((answer) => (
                        <label id={answer.text} key={answer.id + answer.text}>
                            <input type="radio" id={answer.text} value={answer.id} name="questions" onChange={checkHandler} checked={checked === answer.id}/>
                            {answer.text}
                        </label>
                    )
                    )
                }
            {error && <p className={styles.error_msg}>Выберите вариант ответа</p>}
        </div>
        <div className={styles.buttons_wrapper}>
            {question.id !== 0 && <button onClick={prev} className={styles.base_button + " " + styles.prev_button}>Назад</button>}
            <button onClick={onNextClickHandler} className={styles.base_button + " " + styles.next_button}>{question.id !== count - 1 ? "Дальше" : "Узнать результат"}</button>
        </div>
    </div>
  );
}

export default Quiz;
