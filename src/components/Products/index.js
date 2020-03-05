import React,{Component} from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
// console.log(miAuto);
class FormProduct extends Component{
    render(){
        return(
            <div>

            </div>
        );
    }
}

export default class ProductBox extends Component{

    constructor() {
        super();
        this.state={
            products:[]
        }
    }
    // state={
    //         products:[]
    //     }
    // async componentDidMount() {
    //     const res = await fetch('https://siic.infocalcbba.edu.bo/rosa/webservices/anuncio/lista');
    //     const data= await res.json();
    //     console.log(data);
    //     this.setState({products:data});
    // }
    componentDidMount() {
        axios.get('http://192.168.2.175:3009/products')
            .then(res=>{
                let product =res.data.products

                this.setState({
                    products:product
                });
            })
        .catch(err=>{
            console.log(err);
        })
    }


    render(){
        // console.log("hola->>>>",Object.values(this.state.products));
        if (this.state.products==""){
         return(
            <p>error</p>
            )
        }else{

                let items = this.state.products.map((products,i)=>
                    <div key={i}>
                        <h1>{products.nombre}</h1>
                    </div>
                );
                return (<div><ul>{items}</ul></div>)
        }
    }
}