/**
 * @CRUD  local storage
 *
 *
 /**  
 * get an item from localstorage
 * @params localstoragekey
 * @returns {data}
 *
 */

 
export const getItem = async key => {
    try {
        let data = await localStorage.getItem(key);
        if (!data) throw new Error();
        return JSON.parse(data);
    } catch (err) {
        // should pass to an error display in the future
        console.log('[ERROR_GET-ITEM]', `Could not get ${key}`);
    }
};


/**
 * get an item from localstorage
 * @params localstoragekey, data
 *
 */


export const storeItem = async (key, newData) => {
    try {
        let data = await localStorage.setItem(key, JSON.stringify(newData));
        return data;
    } catch (err) {
        console.log('[ERROR_STORE-ITEM]', `Could not store ${key}`);
    }
};



/**
 * add an item to localstorage
 * @params key, and dataItem is an @object or an @Array
 *
 * @returns data
 *
 */

export const addItem = async (key, dataItem) => {
    try {
        let data = await getItem(key);
        if (Array.isArray(data)) {
            data.push(dataItem);
            await storeItem(key, data);
            return data;
        } else {
            let newArr = [dataItem];
            await storeItem(key, newArr);
            return newArr;
        }
    } catch (err) {
        console.log('[ERROR_STORE]', `Could not add Item with key ${key}`);
    }
};

/**
 * add an item to localstorage
 * @params key, and itemKey is an id of type @Integer corresponding to an id in an arr of @Object or @Array
 * key could also be a @String corresponding to a value in an array of strings
 *
 * @returns @Array of the removed item and the present state
 *
 */

export const removeItem = async (key, itemKey) => {
    try {
        let data = await getItem(key);
        if (Array.isArray(data) && data.length) {
            // if it is an array of objects
            let newData = data.filter(({ id }) => id !== Number(itemKey));
            let savedData = await storeItem(key, newData);
            let removedData = data.filter(({ id }) => id === Number(itemKey));
            return [removedData, savedData];
        }
    } catch (err) {
        console.log('[ERROR_STORE]', `Could not remove item with key ${key}`);
    }
};

/**
 * get a specific item from an array of data for a particular localstorage data
 * @params key, and itemKey is an id of type @Integer corresponding to an id in an arr of @Object or @Array
 * key could also be a @String corresponding to a value in an array of strings
 *
 * @returns data
 *
 */

export const getSubItem = async (key, itemKey, prop) => {
    try {
        let data = await getItem(key);
        if (!data) throw new Error();
        if (Array.isArray(data)) {
            let [requiredDataObj] = data.filter(objData => (objData.id || objData[prop]) === Number(itemKey));
            return requiredDataObj || null;
        }
    } catch (err) {
        console.log('[ERROR_STORE]', `Could not get item with key ${key}`);
    }
};
