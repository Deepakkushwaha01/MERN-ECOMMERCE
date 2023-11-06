import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './Slices/UserSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import helperReducer from './Slices/HelperSlice';
import productReducer from "./Slices/ProductSlice";
import allproductReducer from './Slices/AllProductSlice';
import cartDataReducer from './Slices/AddCartSlice';

const persistConfig={
    key:'user',
    storage,
    whitelist: ['user','allproduct','product',''],
}

const rootReducer=combineReducers({
    user:userReducer,
    helper:helperReducer,
    product:productReducer,
    allproduct:allproductReducer,
    addCart:cartDataReducer
})


const persistedReducer=persistReducer(persistConfig,rootReducer);

export const Store = configureStore({
    reducer:persistedReducer
    
})

export const persistor = persistStore(Store);