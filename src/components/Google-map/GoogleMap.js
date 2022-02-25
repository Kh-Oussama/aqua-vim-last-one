//note: code formatted for ES6 here
import {InfoWindow, Map, Marker} from "google-maps-react";
import React from "react";
import {GoogleApiWrapper} from 'google-maps-react';

const style = {
    zIndex:"10",
    height: '100%'
}
export class MapContainer extends React.Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},

        mapCenter: {
            lat: 36.715909643981675,
            lng: 3.2388689213502713
        }
    };


    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };



    render() {
        return (
            <React.Fragment>
                <Map
                    google={this.props.google}
                    onClick={this.onMapClicked}
                    style={style}
                    initialCenter={{
                        lat: this.state.mapCenter.lat,
                        lng: this.state.mapCenter.lng
                    }}
                    center={
                        {
                            lat: this.state.mapCenter.lat,
                            lng: this.state.mapCenter.lng
                        }
                    }
                    zoom={15}


                >
                    <Marker onClick={this.onMarkerClick}
                            name={'AQUA-VIM'} />

                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>
                </Map>
            </React.Fragment>

        )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBWUrVzVKOdqS5bz9WLgKFd9cH5iEMROps")
})(MapContainer)