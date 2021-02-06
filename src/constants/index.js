import { Dimensions } from 'react-native'

export const loaderActions = {
    SHOW_LOADER: 'SHOW_LOADER',
    HIDE_LOADER: 'HIDE_LOADER',
}

export const userActions = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
}

export const appDimensions = {
    SCREEN_HEIGHT: Math.round(Dimensions.get('window').height),
    SCREEN_WIDTH: Math.round(Dimensions.get('window').width)
}

export const borderRadius = {
    FIXED_HEADER_BORDER_RADIUS: 15,
    FIXED_BUTTON_RADIUS:  21, 
    FIXED_HEADER_BORDER_RADIUS_40: 40,
    FIXED_HEADER_BORDER_RADIUS_20: 20,
    FIXED_CURVED_BUTTON_RADIUS:  25, 
    FIXED_INPUT_RADIUS:  10, 
    FIXED_RATING_BODY_RADIUS:  7, 
}

export const padding = {
    PADDING_XS: 5,
    PADDING_SM: 10,
    PADDING_MD:  20, 
    PADDING_LG: 30,
    PADDING_XL: 40,
    FIXED_CURVED_BUTTON_RADIUS:  25, 
    FIXED_INPUT_RADIUS:  10, 
    FIXED_RATING_BODY_RADIUS:  7, 
}

export const fontSizes = {
    HEADER_TEXT: 15,
}