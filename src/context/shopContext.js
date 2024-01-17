import React, { Component } from "react";
import Client from "shopify-buy";

const ShopContext = React.createContext();

const client = Client.buildClient({
  domain: "756755-3.myshopify.com",
  storefrontAccessToken: "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",
});

class ShopProvider extends Component {
  state = {
    products: [],
    product: {},
    checkout: {},
    isCartOpen: false,
    test: "test",
  };

  render() {
    return (
      <ShopContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default ShopProvider;
