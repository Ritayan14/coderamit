const backendDomin = "http://192.168.56.1:8080"

const SummaryApi = {
    signUP : {
        url : `${backendDomin}/api/signup`,
        method : "POST"
    },
    signIn : {
        url : `${backendDomin}/api/signin`,
        method : "POST"
    },
    current_user : {
        url : `${backendDomin}/api/user-details`,
        method : "GET"
    },
    logout_user : {
        url : `${backendDomin}/api/userLogout`,
        method : 'GET'
    },
    allUser : {
        url : `${backendDomin}/api/all-user`,
        method : 'GET'
    },
    updateUser : {
        url : `${backendDomin}/api/update-user`,
        method : "POST"
    },
    uploadProduct : {
        url : `${backendDomin}/api/upload-product`,
        method : 'POST'
    },
    allProduct : {
        url : `${backendDomin}/api/GET-product`,
        method : 'GET'
    },
    updateProduct : {
        url : `${backendDomin}/api/update-product`,
        method  : 'POST'
    },
    categoryProduct : {
        url : `${backendDomin}/api/GET-categoryProduct`,
        method : 'GET'
    },
    categoryWiseProduct : {
        url : `${backendDomin}/api/category-product`,
        method : 'POST'
    },
    productDetails : {
        url : `${backendDomin}/api/product-details`,
        method : 'POST'
    },
    addToCartProduct : {
        url : `${backendDomin}/api/addtocart`,
        method : 'POST'
    },
    addToCartProductCount : {
        url : `${backendDomin}/api/countAddToCartProduct`,
        method : 'GET'
    },
    addToCartProductView : {
        url : `${backendDomin}/api/view-card-product`,
        method : 'GET'
    },
    updateCartProduct : {
        url : `${backendDomin}/api/update-cart-product`,
        method : 'POST'
    },
    deleteCartProduct : {
        url : `${backendDomin}/api/delete-cart-product`,
        method : 'POST'
    },
    searchProduct : {
        url : `${backendDomin}/api/search`,
        method : 'GET'
    },
    filterProduct : {
        url : `${backendDomin}/api/filter-product`,
        method : 'POST'
    }
}


export default SummaryApi