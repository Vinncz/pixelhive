'use client'
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Cookies from "js-cookie";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import index_product_image_by_product_id from "@/lib/fetch/index/index_product_image_by_product_id";

interface ProductImageSwiperProps {
    product_id: any;
}

export default function ProductImageSwiper(props: ProductImageSwiperProps): JSX.Element {
    const [images, setImages] = useState<ProductImage[]>([]);

    useEffect(() => {
        index_product_image_by_product_id(props.product_id, Cookies.get('jwt')).then((result) => {
            setImages(result);
        });
    }, [props.product_id]);

    const image_slide = images.map((image) => {
        return (
            <SwiperSlide className="flex-imp center">
                <img
                    className="fullH"
                    decoding="async"
                    src={"http://localhost:8000/storage/" + image.image_location}
                    alt="product image"
                />
            </SwiperSlide>
        );
    });

    return (
        <>
            {/* Swiper */}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />

            <Swiper
                className="fullW fullH"
                navigation={true}
                modules={[Navigation, Pagination]}
                pagination={{ type: "fraction" }}
                id="productImage"
            >
                {image_slide}
            </Swiper>
        </>
    );
}
