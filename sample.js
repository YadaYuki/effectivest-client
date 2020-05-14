const questions = [{question:"aaa",answer:"aaa",user_ans:"",question_id:1},{question:"aaa",answer:"aaa",user_ans:"",question_id:2}];
const user_ans= "asdfasdfasdf";
const question_id = 1;
function updateUserAns(questions,user_ans,question_id){
    questions_temp = questions.slice();
    for(question of questions_temp){
        if (question.question_id === question_id){
            question.user_ans = user_ans;
            break;
        };
    };
    return questions_temp;
}
console.log(JSON.stringify(updateUserAns(questions,user_ans,question_id)));