import React, {Component} from "react";
import Axios from "axios";
import {connect} from 'react-redux'
import {saveData} from "./state/Action";


class Add extends Component{


constructor(props) {
    super(props);
    this.state={
        showFavorite:false,
        posts:[]
    }
}

     ChangeApi=()=>{
         // return (dispatch)=>{
             const URL="https://jsonplaceholder.typicode.com/users"
             Axios.get(URL).then(res=>{
                 this.props.saveData(res.data)
             }).then(data=>{

                 // })
             }).catch(err=>{
                 throw err
             })
         // }
     }

    render() {
        console.log(this.props)
        return(
            <div className='container'>
                <div className='row'>
            <div className='col-3 mr-auto  '>
             <button className='btn mt-5 btn-success p-3 m-2'
                     onClick={()=>this.ChangeApi()}>testClick

             </button>
            </div>

{
   this.props.name && this.props.name.map((id)=>{
        return(

            <div className='col-9 ' key={id.id}>
                <div className='d-flex align-items-start justify-content-start mt-4 flex-column'>
                <p className='mt-2'>{id.id}</p>
                </div>
                <div className='d-flex align-items-end justify-content-end mt-5 flex-column' >
                  <p className=''>{id.name}</p>
                </div>
                <div className='d-flex align-items-center justify-content-center mt-3 flex-column'>
                <p className=''>{id.username}</p>
                </div>
            </div>


        )
    })
}
                <div>
                    <h1>
                        {this.state.name}
                    </h1>
                </div>
            </div>
                </div>

        )
    }
}
const MapStateToProps=state=>({
    name:state.homePage.data
})
const MapDispatchToProps= dispatch =>{
    return{
        saveData: data => dispatch(saveData((data)))
    }
}

export default connect(MapStateToProps , MapDispatchToProps)(Add)