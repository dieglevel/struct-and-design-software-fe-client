"use client";
import tourDetailBanner from "@/assets/images/tour_detail_header.png";
import api from "@/libs/axios/axios.config";
import { TourResponseDTO } from "@/models/response/dashboard";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
export default function TourDetailPage() {
    const { id } = useParams();
    const [detail, setDetail] = useState<TourResponseDTO[]>([]);
    const fetchTourDetail = async () => {
        try {
            const response = await api(`${process.env.NEXT_PUBLIC_BOOKING_SERVICE}/tours/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            // setDetail(response.data);
        } catch (error) {
            console.error("Lỗi khi gọi API:", error);
        }
    };

    useEffect(() => {
        fetchTourDetail();
    }, [id]);
    return (
        <div className="w-full h-52 relative">
            <Image
                src={tourDetailBanner}
                alt="Tour Banner"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50 flex flex-col justify-center items-center text-center">
                <h1 className="text-3xl font-bold text-white">Tour detail</h1>
                <p className="text-sm text-white mt-2">
                    <a href="/tour">Tour</a> &gt; Tour Detail
                </p>
            </div>
        </div>
    );
}
