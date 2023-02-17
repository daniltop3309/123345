import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link,useParams } from 'react-router-dom'

const Products = () => {
    return (
        <div>
            <p>
                <Link to="/product/1">Продукт номер 1</Link>
            </p>
            <p>
                <Link to="/product/2">Продукт номер 2</Link>
            </p>
            <p>
                <Link to="/product/3">Продукт номер 3</Link>
            </p>
        </div>
    )
}

const Product = (props) => {
    let { id } = useParams();
    return (<div>Товар номер {id}</div>)
}

const Four = () => {
  return (
    <div>
        <Router>
            <nav>
                <Link to="/main">Главная</Link>
                <Link to="/about">О нас</Link>
                <Link to="/products">Продукты</Link>
            </nav>
            <Routes>
                <Route path = "/main" element = "Главная"/>
                <Route path = "/about" element = "О нас"/>
                <Route path = "/products" element = {<Products/>}/>
                <Route path = "/products/:id" element = {<Product/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default Four