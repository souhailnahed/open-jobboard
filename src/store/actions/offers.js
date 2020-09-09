import * as actionTypes from './types';
import axios from '../../utils/axios';

export const fetchOffresRequest = () => {
    return {
        type: actionTypes.FETCH_OFFERS_REQUEST,
    };
};

export const fetchOffersSuccess = () => {
    return {
        type: actionTypes.FETCH_OFFERS_REQUEST,
    };
};

export const fetchOffersFail = () => {
    return {
        type: actionTypes.FETCH_OFFERS_REQUEST,
    };
};

export const fetchOffers = () => {
    return dispatch => {
        dispatch(fetchOffresRequest());
        axios.get( 'jobs/searching')
            .then( res => {
                const fetchedOffers = [];
                for ( let key in res.data ) {
                    fetchedOffers.push( {
                        ...res.data[key],
                        id: key
                    } );
                }
                dispatch(fetchOffersSuccess(fetchedOffers));
            } )
            .catch( err => {
                dispatch(fetchOffersFail(err));
            } );
    };
};