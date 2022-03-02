import React from 'react';


const MyOrder = () => {
    return (
        <div>
            <h1 className="text-center text-primary">This is my order</h1>
            <h3 className="text-primary">Tesla</h3>
            <img style ={{ width : "30%", height : "200px" }} src="https://static.autox.com/uploads/cars/2021/10/mahindra-xuv700.jpg" class="card-img-top" alt="..."/>
           <h3 className="text-primary">Price : 50000$</h3>
            <h3 className="text-primary">Prado</h3>
            <img style ={{ width : "30%", height : "200px" }} src="https://www.indiacarnews.com/wp-content/uploads/2019/06/Kia-Seltos-SUV-India.jpg" class="card-img-top" alt="..."/>
            <h3 className="text-primary">Price : 540000$</h3>
            <h3 className="text-primary">Nishan</h3>
            <img style ={{ width : "30%", height : "200px" }} src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=http://cms.haymarketindia.net/model/uploads/modelimages/MG-Astor-200920211457.jpg" class="card-img-top" alt="..."/>
            <h3 className="text-primary">Price : 30000$</h3>
        </div>
    );
};

export default MyOrder;