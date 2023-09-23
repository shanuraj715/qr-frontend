export const getCountryCode = () => {
    try {
        const userLocale = navigator.language || navigator.userLanguage;

        // Split the userLocale to extract the country code
        const codeParts = userLocale.split('-');

        if (codeParts.length >= 2) {
            // Check if the second part of the locale is a valid country code
            const countryCode = codeParts[codeParts.length - 1];

            // Check if the extracted country code is valid (either 2 or 3 characters)
            if (countryCode.length === 2 || countryCode.length === 3) {
                return countryCode.toUpperCase();
            } else {
                throw new Error('Invalid country code');
            }
        } else {
            throw new Error('Invalid locale format');
        }
    } catch (error) {
        return '';
    }
}