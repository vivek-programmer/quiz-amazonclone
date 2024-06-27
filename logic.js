const questions = [
    {
        question: "which is the largest animal among this ?",
        answers :[
            {text:"shark" ,correct:false},
            {text :"cow", correct:false},
            {text:"blue whale",correct:true},
            {text:"elephant",correct:false}
        ]
    },
    {
        question: "which is the smallest continent in the world ?",
        answers :[
            {text:"asia" ,correct:false},
            {text :"north america", correct:false},
            {text:"australia",correct:true},
            {text:"antartica",correct:false}
        ]
    },
    {
        question: "which hostel is the best to live in  ?",
        answers :[
            {text:"10c,d" ,correct:false},
            {text :"h2", correct:false},
            {text:"h1",correct:false},
            {text:"h4",correct:true}
        ]
    },
    {
        question: "which is only crickter to score score 100 and get fifer in 1 single test match for india ?",
        answers :[
            {text:"R aswin" ,correct:false},
            {text :"R jadega", correct:false},
            {text:"thala",correct:true},
            {text:"me",correct:false}
        ]
    },
    {
        question: "which is first home minister of inida  ?",
        answers :[
            {text:"maulana azad" ,correct:false},
            {text :"rajendra prasad", correct:false},
            {text:"sardar patel",correct:true},
            {text:"modi ji",correct:false}
        ] }
    ];
        const question_element = document.querySelector("h2");
        const ans_ele = document.querySelector(".ans_btn");
        const nxt_btn = document.querySelector(".nxt_btn");
        let  curr_index = 0;
        let score = 0; 
        function startquiz () {
           curr_index=0;
           score=0;
            nxt_btn.innerHTML="next";
            showfuntion ();
        };
        function showfuntion(){
            reset_fn ()
            let current_question =questions[curr_index];
            let ques_no = curr_index+1;
            question_element.innerHTML=ques_no+"."+current_question.question;
            current_question.answers.forEach(answer =>{
                const button = document.createElement("button");
                button.innerHTML=answer.text;
                button.classList.add("btn");
                ans_ele.appendChild(button);
                if (answer.correct){
                    button.dataset.correct=answer.correct;
                }
                button.addEventListener("click",select_ans)
            });
        };
        startquiz();
        function reset_fn (){
            nxt_btn.computedStyleMap.display = "none";
            while (ans_ele.firstChild) {
                ans_ele.removeChild(ans_ele.firstChild);

            }
        };
        function select_ans(e) {
            const select_btn =e.target;
            const iscorrect = select_btn.dataset.correct==="true";
            if (iscorrect){
                select_btn.classList.add("correct");
            } else {
                select_btn.classList.add("incorrect");
            }
        }