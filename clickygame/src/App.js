import React, { Component } from "react";
import Cards from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
// import Header from "./components/Footer";
import Marvelcards from "./marvelcards.json";
import "./App.css";


class App extends Components  {

  state = {
    Marvelcards
  }

  removeMarvelCard = id => {
      const Marvelcards = this.state.Marvelcards.filter(card => card.id !== id)

      this.setState({ Marvelcards })

  }

      render() {
        return (
      <Wrapper>
      <h1 className= "title">Marvel Characters</h1>
        {this.state.Marvelcards.map(card => (
          <Cards
            removeMarvelCard={this.removeMarvelCard}
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
            />
        ))}
      </Wrapper>   

    );
  }
}

export default App;
