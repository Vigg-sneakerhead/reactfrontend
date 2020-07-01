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
        fixedProducts: [],
        modalOpen:false,
        modalProduct:detailProduct, 
        cartTotal:0,
        Brand: 'none',
        minPrice: 0,
        maxPrice: 30,
        minSize: 4,
        maxSize: 12,
        Condition:'none',
        SortMethod:'default', 
        searchValue:'none',

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
        this.resetProducts();
    }
    setProducts = () => {
        let products = [];
        let bestsellers = [];
        let secondHand =[];
        storeProducts.forEach(item => {
            if (item.New === true) {
                const newItem = {...item};
                bestsellers = [...bestsellers, newItem];
            } 
            else {
                    const oldItem = {...item};
                    secondHand = [...secondHand, oldItem];
            }
           
            products = [...bestsellers, ...secondHand];
        });
        this.setState(() => {
            return {products};
           
        });
    };
    resetProducts = () => {
        let fixedProducts = [];
        let bestsellers = [];
        let secondHand =[];
        storeProducts.forEach(item => {
            if (item.New === true) {
                const newItem = {...item};
                bestsellers = [...bestsellers, newItem];
            } 
            else {
                    const oldItem = {...item};
                    secondHand = [...secondHand, oldItem];
            }
           
            fixedProducts = [...bestsellers, ...secondHand];
        });
        this.setState(() => {
            return {fixedProducts, bestsellers,secondHand};
           
        });
    };
    resetState = () => {
        const Brand =  'none';
        const minPrice= 0;
        const maxPrice= 30;
        const minSize= 4;
        const maxSize= 12;
        const Condition ='none';
        const searchValue ='none';
        this.setState(() => {
            return {Brand,minPrice,maxPrice,minSize,maxSize,Condition, searchValue};

        },
        ()=> {
            this.ProductFilter();
        })
    }
    
    getItem = id => {
        const product = this.state.fixedProducts.find(item => item.id === id);
        return product; 
    }

    handleDetail = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return { detailProduct:product};
        });
    }
   

    addToCart = id => {
        let tempProducts = [...this.state.fixedProducts];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count =1; 
        const price = product.price;
        product.total = price; 
        this.setState(
            () => {
            return {fixedProducts:tempProducts, cart: [...this.state.cart, product]};
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
        let fixedProducts = this.state.fixedProducts;
        fixedProducts.forEach(item => item.inCart = false)
        this.setState(
            ()=> {
            return {cart:[],fixedProducts};
            },
            ()=> {
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
    FilterCondition = condition => {
        const currentCondition = this.state.Condition;
        if (condition != currentCondition){
            condition = condition;
        }
        else {
            condition ='none'
        }
        this.setState(()=>{
            return {Condition:condition} 
            
        },
        ()=> {
            
            this.ProductFilter();
            
        });
        console.log(condition);
    }
    FilterSort = sortMethod => {
        this.setState(()=>{
            return {SortMethod:sortMethod} 
            
        },
        ()=> {
            
            this.ProductFilter();
            
        });
        console.log(sortMethod);
    }
    FilterSize = (min,max) => {
        this.setState(
            ()=> {
            return {
                minSize:min,
                maxSize:max,
            }}, 
            ()=> {
            
                this.ProductFilter();
            });
    }
    FilterPrice = (min,max) => {
        this.setState(
            ()=> {
            return {
                minPrice:min,
                maxPrice:max,
            };
        },
        ()=> {
            
            this.ProductFilter();
        });
    }
    

    FilterBrand = (brand) => {
        const currentBrand = this.state.Brand;
        if (brand != currentBrand){
            brand = brand;
        }
        else {
            brand ='none';
        }
        this.setState(()=>{
            return {Brand:brand}; 
        },
        ()=> {
            
            this.ProductFilter();
        });
        
        console.log(brand);
    }
    FilterSearch = (searchvalue) => {
        this.setState(()=> {
            return {searchValue: searchvalue};
        },
        ()=> {
            this.ProductFilter();
        });
    }

    Sortby = (method) => {
        this.setState(()=> {
            return {SortMethod: method}
        },
        ()=> {
            this.ProductFilter();
        });
    }


    ProductFilter = () => {
      
        const brand = this.state.Brand;
        const minSize = this.state.minSize;
        const maxSize = this.state.maxSize;
        const minPrice = this.state.minPrice;
        const maxPrice = this.state.maxPrice;
        const condition = this.state.Condition;
        let newProducts = [];
        const resetProducts = this.state.fixedProducts;
        const sortmethod = this.state.SortMethod;
        const searchvalue = this.state.searchValue;
        if (condition == 'none') {
            newProducts = resetProducts;
            
        }
        else if (condition == 'new') {
            newProducts = [...this.state.bestsellers];
          
        } 
        else if (condition =='old') {
            newProducts = [...this.state.secondHand];
            
        }
        if (brand =='none') {
            newProducts = newProducts.filter(item => item.Brand != brand)
        }
        else {
            newProducts = newProducts.filter(item => item.Brand == brand)
        }
        if (searchvalue =='none') {
            newProducts = newProducts
        }
        else {
            newProducts = newProducts.filter(item => item.title.toLowerCase().includes(searchvalue))
        }
        if(sortmethod == 'default'){
            newProducts = newProducts;
        }
        else if(sortmethod =='lowtohigh'){
            newProducts = newProducts.sort((a,b) => (a.price >= b.price)? 1:-1)
        }
        else if(sortmethod =='hightolow'){
            newProducts = newProducts.sort((a,b) => (a.price <= b.price)? 1:-1)
        }

        newProducts = newProducts.filter(item => item.price >= minPrice && item.price <= maxPrice)
        newProducts = newProducts.filter(item => item.size >= minSize && item.size <= maxSize)
        this.setState(()=> {
            return {products:newProducts}
        });
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
                FilterCondition:this.FilterCondition,
                FilterSize:this.FilterSize,
                FilterPrice:this.FilterPrice,
                FilterBrand:this.FilterBrand,
                FilterBrand:this.FilterBrand,
                resetState:this.resetState,
                FilterSort:this.FilterSort,
                Sortby:this.Sortby,
                FilterSearch:this.FilterSearch,
            }}>
                {this.props.children}
            </ProductContext.Provider>
                
        )   ;
    }
}

const ProductConsumer = ProductContext.Consumer; 

export {ProductProvider, ProductConsumer};