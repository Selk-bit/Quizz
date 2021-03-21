import React, { Component } from 'react';
import './QuizzApp.css';
import AllConsts from './Const';
import Modal from './SimpleModal'


class Questions extends Component {


    state = {
        q : {
            0 : {"What is React ?" : {"Framework" : 0, "Libarary" : 1, "ProgrammingLanguage" : 0}}, 
            1 : {"What is Angular ?" : {"Framework" : 1, "Libarary" : 0, "ProgrammingLanguage" : 0}},
            2 : {"How Trash is Kellout's Vision ?" : {"Very Trash" : 1, "Mildely Trash" : 0, "Not Trash" : 0}},
        },
        current_question: 0, 
        score : 0,
        answered: '',
        extended: 1,
        isCorrect : ''
    }

    componentDidUpdate() {
        if(this.state.extended == 0){
            this.setState({extended: 1})
        }

    }

   
   

    GetAnswer = (a) => {
        if(a == 0) {
            return <p>Wrong</p>
        }
        else {
            return <p>Correct</p>
        }

    }

    Next = () => {
        let current = this.state.current_question+1;
        if(current < Object.keys(this.state.q).length) {
        this.setState({current_question: current, extended: 0, isCorrect: ''});
        }
        
    }

    Toggle = (a, b) => {
        this.setState({answered: b, isCorrect: "False"});
        const scoreholder = this.state.score;
        if(this[a].textContent == "Correct") {
            this.setState({score: scoreholder+1, isCorrect: "Correct"});
            this[a].style.color ="green";
        }

    }



    render ()
    {
        
        const arr = Object.keys(this.state.q[this.state.current_question]);
        const holder =  this.state.q[this.state.current_question];
        const answers = holder[arr[0]]
        const answersArray = Object.keys(answers);


        return (
            <section>
            <main>
            <div>
                <p className="text-container">{arr[0]}</p>
                <div className="quiz-options">
                <ul>{answersArray
                    .map(j => <div>
                        <div>
                            
                            {this.state.answered == arr[0] ?
                            <div>
                            <input type="radio" className="input-radio one-a" name="yes-1" required />
                            <label  htmlFor="one-a">
                                <span className="alphabet">{answersArray.indexOf(j) + 1}</span> {j} 
                            </label> 
                            </div>
                            :
                            <div>
                            <input type="radio" className="input-radio" id="one-a" name="yes-1" required />
                            <label onClick={() => this.Toggle(arr[0] + j, arr[0])} >
                                <span className="alphabet">{answersArray.indexOf(j) + 1}</span> {j} 
                            </label>
                            </div> }
                        </div>

                    
                        
                        {this.state.extended == 1 ? 
                            <p ref={a => { this[arr[0] + j] = a }} style={{color: "red", display: "none"}}>{this.GetAnswer(answers[j])}</p> 
                            : <p></p>}
                            {this.state.isCorrect == "False" && <Modal iscorrect="Wrong"/>}
                            {this.state.isCorrect == "Correct" && <Modal iscorrect="Correct"/>}
                        </div>)}
                        

                </ul>
                </div>
            </div>
            <div className="score-counter">
                    <p className="score-text">Your Score: {this.state.score}</p>
            </div>
            {this.state.answered == arr[0] ? <a id="btn" type="submit" onClick={this.Next}>Next</a> : <a id="btn" type="submit">Next</a>}
            </main>
            </section>
        );
    } 

}

export default Questions;