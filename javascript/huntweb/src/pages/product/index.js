import React, { Component } from 'react';
import api from "../../services/api"
import { Link } from 'react-router-dom'
import './style.css'

export default class Product extends Component {
    state = {
        product : {},
        data: []
        
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const responseId = await api.get(`/products/${id}`)
        this.setState({ product: responseId.data });
        
        const response = await api.get('/products');
        const { docs, ...productInfo } = response.data
        this.setState({ data: docs, productInfo })
    }
    
    prevItem = () => {
        const { data } = this.state
        const { product } = this.state
        console.log(data)
        console.log(product)
        data.map( item => {
            let i = 0;
            if (item.title ===  product.title) {
                console.log(item.title)
                return item
            }
            return item
        })
        

    }

    nextItem = () => {

    }

    render() {
        const { product } = this.state;
        
        return (
            
            <div className="product-info">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>
                    URL: <a href={product.url}>{product.url}</a>
                </p>
                <Link to={'/'}>Voltar</Link>
                <div className="actions">
                    <button onClick={this.prevItem}>Anterior</button>
                    <button>Próximo</button>
                </div>
            </div>
        )
        
    }
}