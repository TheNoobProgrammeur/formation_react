import React from 'react';
import { Services } from './http-services/servicesMap';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Home , ToDo ,Persistance } from './pages/index';
import {AffichagePosts} from "./pages/AffichagePosts";

export class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allCountries: [],
            currentCountry: null
        };
    }
    onCountryClick = country => {
        this.setState({
            currentCountry: country
        });
    };
    render() {
        return <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home
                        onCountryClick={this.onCountryClick}
                        allCountries={this.state.allCountries}
                        currentCountry={this.state.currentCountry} />
                </Route>
                <Route render={props => <ToDo  {...props} />} exact path="/todo" />
                <Route render={props => <Persistance></Persistance> } exact path="/persistance" />
                <Route render={props => <AffichagePosts></AffichagePosts> } exact path="/posts" />
            </Switch>
        </BrowserRouter>
    }
    componentDidMount() {
        Services.getAllCountries().then((results) => {
            this.setState({
                allCountries: results.data
            });
        });
    }
}