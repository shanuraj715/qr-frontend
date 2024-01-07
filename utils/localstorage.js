// Function to set an item in localStorage
export function setItem(key, value) {
    try {
        // If value is an array or object, stringify it before saving to localStorage
        if (typeof value === 'object') {
            value = JSON.stringify(value);
        }

        localStorage.setItem(key, value);
        return true
    } catch (error) {
        // console.error('Error while saving to localStorage:', error);
        return false
    }
}

// Function to get an item from localStorage
export function getItem(key) {
    try {
        const storedValue = localStorage.getItem(key);

        // If the stored value is null or undefined, return null
        if (storedValue === null || storedValue === undefined) {
            return null;
        }

        // Try to parse the stored value, if it fails, return the original value
        try {
            return JSON.parse(storedValue);
        } catch {
            return storedValue;
        }
    } catch (error) {
        // console.error('Error while retrieving from localStorage:', error);
        return null;
    }
}

// Function to remove an item from localStorage
export function removeItem(key) {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error('Error while removing from localStorage:', error);
    }
}