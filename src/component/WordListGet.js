import React, {Component} from 'react';


class WordListGet extends Component{
    fetchWord= () => {
        let wordList =['dog', 'cat'];

        fetch("https://s3-ap-southeast-2.amazonaws.com/quiz-word-list/wordList.JSON")
            .then(res =>
                {
                    console.log(res)
                    res.json()
                })
            .then(data =>data.map(x=>x.module));

        return wordList;
    }

    render(){
        return(
            <div>
                {this.fetchWord()}
            </div>
        );
    }
}

export default WordListGet;