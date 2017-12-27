import React from 'react';


function ArticleList(qwert) {
    if (qwert!=undefined) {
        console.log(qwert);
        const allArticles = qwert.articles;
        const listItems = allArticles.map((article) =>
            <li key={article.articleName}>
                {article.articleName} - {article.content}
            </li>
        );
        return (
            <ul>{listItems}</ul>
        );
    } else {
        console.log("in else");
        const listItems =<li key="hello">hello hi</li>;
        return (
            <ul>{listItems}</ul>
        );
    }

}


class ProfileForm extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        const {profile} = this.props;

        return(
            <div>
                Username: {profile.username} <br/>
                Email: {profile.email}

                <ArticleList articles={profile}/>


            </div>
        );
    }
}

export default ProfileForm;