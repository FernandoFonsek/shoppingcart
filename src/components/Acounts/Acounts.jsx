import { useContext } from "react";
// import "../../bootstrap/dist/css/bootstrap.min.css";
import DataTable from "react-data-table-component"; 
import CartContext from "../context/CartContext/CartContext";



const Acounts = () => {
    const { state, dispatch} = useContext(CartContext)

    const columns =[
        {
            name: 'ID',
            selector: 'id',
            sortable: true
        },
        {
            name: 'Product',
            selector: 'name',
            sortable: true
        },
        {
            name: "agregar",
            // cell: () => <button onClick={()=> dispatch({type: "ADD_TO_CART", payload: item })}>+</button>,
            // onClick={()=> dispatch({type: "ADD_TO_CART", payload: item })}
            cell: () => <button onClick={() => dispatch({type: "ADD_TO_CART", payload:  'id' })}>+</button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
        {
        name: "Borrar",
        cell: () => <button onClick={() => alert("hola")}>-</button>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        },
        {
            name: 'Cantidad',
            selector: 'amount',
        },
    
    ]

    return (
        <div>
            <DataTable 
            columns={columns}
            data={state?.cart?.map(x=>x)}
            title="Factura"
            />
        </div>
    )
}
export default Acounts;



// { state?.cart?.map( item =>
//     <div key={item.id} className="flex justify-center items-center m-4">
//         <div className="w-10 h-14 mx-2">
//             <img src={item.url} alt={item.name}></img>
//         </div>
//         <h5 className="mx-2" >{item.name}</h5>
//         <button className="mx-2">subir</button>
//         <button className="mx-2">bajar</button>
//     </div>
//     )}