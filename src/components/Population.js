import React, { Component } from "react";
import "./Population.css";
import members from "../data/members";
import Cache from "./Cache";
class Population extends Cache {
  constructor() {
    super();
  }
  //   fetch("https://restcountries.eu/rest/v2/")
  //     .then(data => {
  //       return data.json();
  //     })
  //     .then(serverStatistics => {
  //       const membersMatching = members.map(result => {
  //         const countryInfo = serverStatistics.find(
  //           serverResult => result.country === serverResult.name
  //         );

  //         let countryName = "";
  //         if (countryInfo === undefined) {
  //           countryName = "Country Not Found";
  //         } else {
  //           countryName = countryInfo.population;
  //         }

  //         return {
  //           name: result.name,
  //           country: result.country,
  //           population: countryName
  //         };
  //       });
  //
  //       this.setState({
  //         statisticsList: membersMatching,
  //         total: totalPopulation
  //       });
  //     });
  //}
  render() {
    return (
      <div className="Population">
        <div className="Population-header">
          <h2>Population of Member Countries</h2>
          <input type="text" placeholder="Search by country" />
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Country</th>
              <th>Population</th>
            </tr>
          </thead>
          <tbody>
            {this.state.statisticsList.map(result => (
              <tr>
                <td>{result.name}</td>
                <td>{result.country}</td>
                <td>{result.population}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3">Total Population: {this.state.total}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
export default Population;
