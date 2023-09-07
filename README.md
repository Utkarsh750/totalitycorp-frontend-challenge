



### Deployment

### - TECH STACK 👇
### - Front-end - ReactJs , Javascript
### - styling - SASS
### - backend - Strapi and headless CMS server
### - `for payment gateway -> Stripe`
### - for Routing - "react router dom"


### - to run strapi local server -> before running it npm start -> npm run develop then reload the page locally
### - before starting the strapi or backend server -> cd .. -> cd api -> npm run develop -> now your server will run 
### - now for server -> npm start
### - after checkout in the cart wait for sometime for payment details it may take upto 30sec



### - we can add any products through universal search also
### - by using {useLocation} when we hit on a specific product from related products it will automatically starts from the top without scrolling us
### - for maintaining all the cart functionalities created { Cart & CartItem.jsx}
### - for all the details of price , dsc , title {SinglerProduct.js}
### - to fetch all the data from API creasted a foolder called hooks & called api inside this using hooks and navigate on each category/id through {useNavigate}
### - for fetching details of Products map all the products using {data=item.attributes} in Product.jsx
### - imported the api category in home.js using { getCategories } & then calling it through useffect
### - for mainting states of categoy and products i created context.jsx
### - for getting responce from server i used categories inside the state
### - getting all the products detail from getProducts
### `for the backend I uses Strapi & headless CMS Server` to start the strapi server "npm run develop"
### - to start the strapi server "npm run develop"
### - get all the data from baot official website
### - created api.js in which we call the get api method

