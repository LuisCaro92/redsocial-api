import Card from "./card";
import { useEffect, useState } from "react";





const Home = () => {

    const [productos, setProductos] = useState([]);
    const [users, setUsers] = useState([]);


    const getProductos = () => {
        fetch("https://api.themoviedb.org/3/account/19701745")
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));

    }

    const getusers = () => {
        fetch("https://api.escuelajs.co/api/v1/users")
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((error) => console.log(error))
    }
    useEffect(() => {
        getProductos();
        getusers();
    })


    return (
        <div className="">
            <div className="row">
                
                {productos.map((producto, user) => (
                    <div className="col-3 m-5">
                        <Card
                            name={user.name}
                            avatar={user.avatar}
                            images={producto.images}
                            title={producto.title}
                            description={producto.description}
                        />
                    </div>
                ))}
               
            </div>
        </div>
    )
} 

export default Home;