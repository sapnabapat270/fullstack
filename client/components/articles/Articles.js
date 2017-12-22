import React from 'react';
import {getArticles} from "../../actions/articleActions";

class Articles extends React.Component{

    onClick(e){
        console.log("click for editing");
        this.context.router.push('/editArticle');
    }

    componentDidMount() {
        console.log("component did mount");
        getArticles().then(
            () => {
                console.log("articles retrieved");
            },
            ({data}) => {
                console.log("error response");
                console.log(data);
                this.setState({errors: data, isLoading: false})
            }
        );
    }

    render(){
        return(
            <div>
                Articles Page
                <button className="btn btn-primary btn-lg" onClick={this.onClick.bind(this)}>Add Article</button>
            </div>
        );
    }
}


Articles.contextTypes={
    router: React.PropTypes.object.isRequired
}

export default Articles;