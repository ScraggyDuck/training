import { createStore } from 'redux';
import appReducer from '../reducers/index';

const store = createStore(appReducer);
class CategoryService{
    async getAllCategories(){
        return Promise.resolve(store.getState().categories);
    }
}

export default new CategoryService;