import React, { Component } from 'react'
import{storeProducts, detailProduct} from "./data";

const ProductContext = React.createContext();

export default class ProductProvider extends Component {
    state = {
        products: [], 
        detailProduct:detailProduct,
        cart: [],
        bestsellers:[], 
        secondHand: [],
        modalOpen:false,
        modalProduct:detailProduct, 
        cartTotal:0
    }
    openModal = id => {
        const product = this.getItem(id);
        this.setState(()=> {
            return {modalProduct:product, modalOpen: true}
        })
    }
    closeModal = () => {
        this.setState(() =>{
            return {modalOpen:false}
        })
    }
    componentDidMount(){
        this.setProducts();
    }
    setProducts = () => {
        let products = [];
        let bestsellers = [];
        let secondHand =[];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            if (item.New === true) {
                const newItem = {...item};
                bestsellers = [...bestsellers, newItem];
            } 
            else {
                    const oldItem = {...item};
                    secondHand = [...secondHand, oldItem];
            }
            
           
            products = [...products, singleItem];
        });
        this.setState(() => {
            return {products, bestsellers,secondHand};
           
        });
    };
    
    getItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product; 
    }

    handleDetail = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return { detailProduct:product};
        });
    }
   

    addToCart = id => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count =1; 
        const price = product.price;
        product.total = price; 
        this.setState(
            () => {
            return {products:tempProducts, cart: [...this.state.cart, product]};
        },
        ()=> {
            this.addTotals();
        })

    }
    increment = id => {
        const product = this.getItem(id);
        product.count += 1;
        product.total = product.price*product.count;
        this.setState(()=>{
            return {detailProduct:product}
        },
       ()=>{
           this.addTotals()
        })
    }
    decrement = id => {
        const product = this.getItem(id);
        product.count -= 1;
        product.total = product.price*product.count;
        this.setState(()=>{
            return {detailProduct:product} 
        },
        ()=>{
           this.addTotals()
        })
    }
    removeItem = id => {
        const product = this.getItem(id);
        product.inCart = false;
        product.count =0; 
        const NewCart = this.state.cart.filter(item => item.id !== id)
        this.setState(()=>{
            return {detailProduct:product, cart:NewCart} 
        },
        () => {
            this.addTotals();
        }
        )
    }
    clearCart = () => {
        this.setState(
            ()=> {
            return {cart:[]};
            },
            ()=> {
                this.setProducts();
                this.addTotals();
        });
    };

    addTotals = () => {
        let total = 0;
        this.state.cart.map(item => {total += item.total});
        this.setState(()=> {
            return {
                cartTotal:total
            }
        })
    }
    

    render() {
        return (
            <ProductContext.Provider value ={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal:this.closeModal,
                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                clearCart:this.clearCart,

            }}>
                {this.props.children}
            </ProductContext.Provider>
                
        )   ;
    }
}

const ProductConsumer = ProductContext.Consumer; 

export {ProductProvider, ProductConsumer};