import { useState, useEffect } from "react";
import { debounce } from 'lodash';

export function ResponsiveWidth(width: number) {
    if (width >= 1500) {
        return "300px"
    }
    else if (width >= 1300) {
        return "250px"
    }
    else if (width >= 1100) {
        return "220px"
    }
    else if (width >= 900) {
        return "190px"
    }
    return "150px"
}

export function ResponsiveHeight(height: number) {
    if (height >= 900) {
        return "400px"
    }
    else if (height >= 750) {
        return "300px"
    }
    return "250px"
}

export function ResponsiveWidthSide(width: number) {
    if (width >= 1500) {
        return "150px"
    }
    else if (width >= 1200) {
        return "100px"
    }
}

export function ResponsiveHeightSide(height: number) {
    if (height >= 1500) {
        return "100px"
    }
    else if (height >= 1200) {
        return "200px"
    }
}

export function ResponsiveContentLeft(width: number) {
    if (width >= 1700) {
        return "15%"
    }
    else if (width >= 1300) {
        return "17%"
    }
    else if (width >= 1100) {
        return "20%"
    }
    return "23%"
}

export function ResponsivePosition(isleft: boolean, width?: number, height?: number,) {

    return null;
}