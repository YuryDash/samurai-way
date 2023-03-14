import React from "react";
import {store} from "./redux/store-redux";


const StoreContext = React.createContext(store)



export default StoreContext;