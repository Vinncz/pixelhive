import React from 'react'

export function validate_name (names:string[]) {
    let flag = false;
    let error_msgs = []

    if (names.length > 0) {
        flag = true
        names.forEach((n) => {
            if (n.trim().length <= 0) {
                flag = false
                error_msgs.push("Name must be filled.")
            } else {
                error_msgs.push("")
            }
        })

    } else {
        error_msgs.push("")
    }

    return [error_msgs]
}

export function validate_price (prices:number[]) {
    let flag = false;
    let error_msgs = []

    if (prices.length > 0) {
        flag = true

        prices.forEach(p => {
            if (p <= 0) {
                flag = false;
                error_msgs.push("Price cannot be negative or zero.")

            } else {
                error_msgs.push("")
            }
        });

    } else {
        error_msgs.push("")
    }

    return [error_msgs]
}

export function validate_desc (descs:string[]) {
    let flag = false;
    let error_msgs = []

    if (descs.length > 0) {
        flag = true
        descs.forEach(desc => {
            if (desc.trim().length <= 0) {
                error_msgs.push("Product description cannot be empty.")
                flag = false;
            } else {
                error_msgs.push("")
            }
        });

    } else {
        error_msgs.push("")
    }

    return [error_msgs]
}

export function validate_aggregate_name (name:string) {
    let flag = true;
    let error_msgs = []

    if (name == null || name.trim().length <= 0) {
        error_msgs.push("Product group name cannot be empty.")
        flag = false;

    } else {
        error_msgs.push("")
    }

    return [error_msgs]
}

export function validate_file_presence (images:File[]) {
    let flag = true
    let error_msgs = []

    if (images.length > 0) {
        images.forEach(img => {
            if (img == null || img.name.trim().length <= 0 || img.size <= 0) {
                error_msgs.push("An image thumbnail is required.")
                flag = false;
            } else {
                error_msgs.push("")
            }
        });

    } else {
        flag = false
        error_msgs.push("Image thumbnail array cannot be empty.")
    }

    return [error_msgs];
}

export function validate_product_presence (prod:File[]) {
    let flag = true
    let error_msgs = []

    if (prod.length > 0) {
        prod.forEach(p => {
            if (p == null || p.name.trim().length <= 0 || p.size <= 0) {
                error_msgs.push("Product is required.")
                flag = false;
            } else {
                error_msgs.push("")
            }
        });

    } else {
        flag = false
        error_msgs.push("Product cannot be empty.")
    }

    return [error_msgs];
}
