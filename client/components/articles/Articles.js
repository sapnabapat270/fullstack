import React from 'react';
import { connect } from 'react-redux';
import {getArticles} from "../../actions/articleActions";

export function ArticleList(qwert) {
    if (qwert!= undefined) {
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
        const listItems =<li key="hello">hello hi</li>;
        return (
            <ul>{listItems}</ul>
        );
    }
}

class Articles extends React.Component{

    constructor(props){
        super(props);
        this.state={
            articlesList:[]
        }
    }
    onClick(e){
        console.log("click for editing");
        this.context.router.push('/editArticle');
    }

    componentDidMount() {
        console.log("component did mount");
        this.props.getArticles().then(
            (response) => {
                this.setState({
                   articlesList:response.data
                });
            },
            ({data}) => {
            }
        );
    }

    render(){
        return(
            <div>
                Articles Page
                <button className="btn btn-primary btn-lg" onClick={this.onClick.bind(this)}>Add Article</button>
                <ArticleList articles={this.state.articlesList}/>
            </div>
        );
    }
}


Articles.contextTypes={
    router: React.PropTypes.object.isRequired
}

Articles.propTypes={
    getArticles:React.PropTypes.func.isRequired
}

export default connect(null,{getArticles})(Articles);