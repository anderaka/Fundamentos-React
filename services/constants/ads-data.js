import React, { Component } from 'react';
import axios from 'axios';

export class TagsList extends Component {

  state = {
    tags: []
  }

  componentDidMount = () => {
    axios.defaults.withCredentials = true;
    axios.get(`http://34.89.93.186:8080/apiv1/tags`)
      .then(res => {
        const tagsResponse = res.data.results;
      
        this.setState({ tags: tagsResponse.filter(tag => tag !== null) });
      })
  }

  render() {
    const {tags} = this.state;
    return (
      <>
       {tags.map(t =>
            <option key={t} value={t}>{t}</option>
        )}
      </>
    )
  }
}

export class PriceList extends Component {

    state = {
        prices: []
    }

    sortNumber(a, b) {
      return a - b;
    }
    
    componentDidMount = () => {
      const sortedPrices = []

      axios.defaults.withCredentials = true;
      axios.get(`http://34.89.93.186:8080/apiv1/anuncios`)
        .then(res => {
          const pricesResp = res.data.results;

          /** remove duplicateds prices and sort */
          pricesResp.map(pricesResp => sortedPrices.push(pricesResp.price));

          const dataForSort= [...new Set(sortedPrices)];
          this.setState({ prices: dataForSort.sort(this.sortNumber) });
        })
    }
  
    render() {
      const { prices } = this.state;
      
      return (
        <>
          {prices.map(p =>
              <option key={p} value={p}>{p}</option>
          )}
        </>
      
      );
    }

}