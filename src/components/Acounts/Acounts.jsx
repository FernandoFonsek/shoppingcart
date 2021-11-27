import { useContext } from "react";
import DataTable, { createTheme }  from "react-data-table-component"; 
import CartContext from "../context/CartContext/CartContext";

createTheme('solarized', {
    divider: {
      default: '#073642',
    },
  }, 'dark');

  const customStyles = {
    rows: {
        style: {
            minHeight: '72px', // override the row height
            background: '#230352',
            borderTopColor: "black",
        },
    },
    headCells: {
        style: {

            background: '#230352',
            color: '#268bd2',
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', 
            paddingRight: '8px',
            background: '#230352',
            color: '#268bd2',
        },
    },
    header: {
        style: {
            background: '#230352',
            borderRadius: '8px',
            color: '#268bd2',
            paddingTop: '1rem',
        },
    }
};

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
            name: "ADD",
            cell: (item) => <button onClick={() => dispatch({type: "ADD_TO_CART", payload: item })}>+</button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        }, 
        {
        name: "Remove",
        cell: (item) => <button onClick={() => dispatch({type: "REMOVE_ONE_PRODUCT", payload: item })}>-</button>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        },
        {
            name: 'Amount',
            selector: 'amount',
        },
        {
            name: 'Price',
            selector: 'price',
        },
        {
            name: "total",
            cell: (item) => <button onClick={() => dispatch({type: "REMOVE_ONE_PRODUCT", payload: item })}>{item.amount*item.price}</button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: false,
            },
    ]
    const data = state?.cart?.map(x=>x)

    return (
        <div >
            <DataTable className="text-white" 
            columns={columns}
            data={data}
            title="Factura" 
            customStyles={customStyles}
            theme="solarized"
            />
        </div>
    )
}
export default Acounts;
