import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaGroup from '../common/TextAreaGroup';
import {addFlashMessage} from "../../actions/flashMessages";
import {addArticleRequest} from "../../actions/articleActions";

class EditArticle extends React.Component{

    constructor(props){
        super(props);
        this.state={
            articleName:'',
            content:'',
            errors:{},
            isLoading:false
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    isValid(){
        return true;
    }

    onSubmit(e){
        e.preventDefault();
        if(this.isValid()){
            this.setState({errors:{},isLoading:true});

            addArticleRequest(this.state).then(
                () => {
                    console.log("article added");
                    this.props.addFlashMessage({
                        type:'success',
                        text:'Article Added Successfully!'
                    });
                    this.context.router.push('/articles');
                },
                ({data}) => {
                    console.log("error response");
                    console.log(data);
                    this.setState({errors: data, isLoading: false})
                }
            );

        }
    }

    render(){
        const {errors} =this.state;
        return(
            <div>
                Edit Article Page
                <form onSubmit={this.onSubmit}>

                    <TextFieldGroup
                        error={errors.articleName}
                        label="Article Name"
                        onChange={this.onChange}
                        value={this.state.articleName}
                        field="articleName"
                    />

                    <TextAreaGroup
                        error={errors.content}
                        label="Content"
                        onChange={this.onChange}
                        value={this.state.content}
                        field="content"
                        rows={10}
                        cols={25}
                    />

                    <div className="form-group">
                        <button className="btn btn-primary btn-lg" disabled={this.state.isLoading}>Save Article</button>
                    </div>

                </form>
            </div>
        );
    }
}


EditArticle.contextTypes={
    router:React.PropTypes.object.isRequired
}

export default EditArticle;