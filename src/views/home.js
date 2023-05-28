import Card from "./card";
import { useEffect, useState } from "react";





const Home = () => {

    const [productos, setProductos] = useState([]);



    const getProductos = () => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then((res) => res.json())
            .then((data) => setProductos(data))
            .catch((error) => console.log(error));
            
    }
   
    useEffect(() => {
        getProductos();
    })


    return (
        <div className="">
            <div className="row">
            {productos.map((producto) => (
                <div className="col-3 m-5">
                    <Card
                        images={producto.images}
                        title={producto.title}
                        description= {producto.description}
                    />
                </div>
            ))}
          </div>
        </div>
    )
}

export default Home;