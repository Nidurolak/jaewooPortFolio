import { useState, useEffect } from "react";
import { debounce } from 'lodash';

export function ResponsiveWidth(width: number) {
    if (width >= 1500) {
        return "300px"
    }
    else if (width >= 1200) {
        return "250px"
    }
    return "150px"
}

export function ResponsivePosition(isleft: boolean, width?: number, height?: number,) {

    return null;
}