import axios from "axios";

const shopifyClient = axios.create({
     baseURL: "https://react-hstore.myshopify.com/api/2025-04/graphql.json",
     headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": "52555d03076c459dc8d95c41fda5968c"
     }
});

export default shopifyClient;