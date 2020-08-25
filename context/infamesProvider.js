
import React, { createContext, useState } from 'react';
import firestore from './../firebase/index';

const DefaultState = {
  infames:[],
};

const InfamesContext = React.createContext(DefaultState);

export const InfamesConsumer = InfamesContext.Consumer;

export class InfamesProvider extends React.Component {
  state = DefaultState;

  componentDidMount() {
    
    const logCities = async () => {
      let docsList = new Array();
      let citiesRef = firestore.collection('infames');
      let allCities = await citiesRef.get();
      for(const doc of allCities.docs){
        docsList.push(doc.data())
      }
      this.setState({infames: docsList});
    }
    logCities()
  }

  render() {
    const {children} = this.props;
    const {infames} = this.state;

    return (
      <InfamesContext.Provider
        value={{
          allInfames: infames,
        }}
      >
        {children}
      </InfamesContext.Provider>
    );
  }
}
