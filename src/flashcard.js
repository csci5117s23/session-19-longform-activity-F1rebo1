import { useState } from "react";
import './flashcard.css';

export default function Flashcard(){
    const [isFlipped,setIsFlipped] = useState(false);
    const [val,setVal] = useState("Front");
    const [cls, setCls] = useState("green");
    
    const QUESTIONS = [{front: "Approximately how old is the Universe?", back:"13.7 billion years old"},
                    {front: "How many bones are in the human body?", back:"206"},
                    {front: "What is my Ishtin's favorite food?", back:"Pasta!"},
                    {front: "Who is pathram?", back:"A goose"}]

    function handleClick(){
        if(!isFlipped){
            setCls("green");
            setVal([QUESTIONS.map(q => q.front)]);
            // console.log("GREEN PONGA: key = " + val);
            setIsFlipped(true);
        }else{
            setCls("yellow");
            setVal([QUESTIONS.map(a => a.back)]);
            // console.log("YELLOW PONGAL: val = " + val);
            setIsFlipped(false);
        }
    }

    return (<>
        <style>{`
            .yellow {background-color: yellow}
            .green {background-color: green}
      `}</style>
        <div>
            {(() => {
                const elements = [];
                for (let i = 0; i < QUESTIONS.length; i++) {
                elements.push(
                    <ClickCard cls={cls} value={val[0][i]} onCardClick={handleClick} />
                );
                }
                return elements;
            })()}
        </div>
    </>);
}

function ClickCard({ cls, value, front, back, onCardClick }){
    // let value = ;
    return (<>
        {/* <button className={cls} onClick={onCardClick}>{value}</button> */}
        <button className={cls} onClick={onCardClick}>{value}</button>
        {/* <div className={cls} onClick={onCardClick}>{value}</div> */}
    </>);
}