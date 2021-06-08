import React, { Component } from 'react'

export default class ReactcomponentDidMount extends Component {

    state={
        userDetails:[],
        err: null,
        isLoading: false
    }

    componentDidMount(){

        this.setState({ isLoading: true })

        fetch('https://jsonplaceholder.typicode.com/posts/1/comments')

        .then(response =>{
            //fetch doesn't send (404 error) into the cache itsel, 
            // We have to send itlike below
            if(response.status >= 400) {
                throw new Error("Server responds with error!");
            }
            return response.json()
        })

        .then(usersList => {
            this.setState({
                 userDetails: usersList,
                 isLoading: false
                });
    },
    //it's important to handle errors here instead of a catch() block
    err => {
        this.setState({
            err,
            isLoading: false
        })
    });
}


    render() {
        let {userDetails, err, isLoading} = this.state;
    if(err) {
        // Here we can either render error message or Error component
        return (
        <div> { err.message } </div>
        )
    }
    if(isLoading) {
        return (
        <div> Loading... </div>
        )
    }
        return (
            <div>
                {/* Here you can check whether the users array contains data or not. */}
                { userDetails.length > 0 ?
                <ul>
                {userDetails.map(user => (
                    <li key={user.id}> <b>User Name:</b> {user.name} <br />
                    <b>User Email:</b> {user.email}</li>
                ))}
            </ul>
            : <div> No user found! </div> }
            </div>
        )
    }
}
