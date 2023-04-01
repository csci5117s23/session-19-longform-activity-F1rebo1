import { useState } from "react";
import './flashcard.css';

export default function Flashcard(){
    const [isFlipped,setIsFlipped] = useState(false);
    const [val,setVal] = useState("Front");
    const [cls, setCls] = useState("green");
    
    const QUESTIONS = [{front: "question1", back:"answer1"},
                    {front: "question2", back:"answer2"},
                    {front: "question3", back:"answer3"},]

    // for(let pair = 0; pair < QUESTIONS.length; pair++){
    //     <ClickCard cls={cls} value={val} onCardClick={handleClick}></ClickCard>
    // }

    function handleClick(){
        if(isFlipped){
            console.log('Pongal log');
            setCls("green");
            setVal("Front");
            setIsFlipped(false);
        }else{
            console.log('Hungala Mungala log');
            setCls("yellow");
            setVal("Back");
            setIsFlipped(true);
        }
    }

    return (<>
        <style>{`
            .yellow {background-color: yellow}
            .green {background-color: green}
      `}</style>
        <div>
            <ClickCard cls={cls} value={val} onCardClick={handleClick}></ClickCard>
        </div>
    </>);
}

function ClickCard({ cls, value, onCardClick }){
    return (<>
        <button className={cls} onClick={onCardClick}>{value}</button>
    </>);
}