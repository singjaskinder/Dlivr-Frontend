import React from "react"
import SkeletonElement from "./SkeletonElement";
import "./SkeletonVehicle.css"
import "./skeleton.css"
import Shimmer from "./Shimmer";

const SkeletonVehicle = () => {
    return (
        <>
            <div className="skeleton_wrapper">
                <div className="skeleton_vehicle">
                    <div className="skeleton_VehicleCount">
                        <div className="skeleton_countTexts">
                            <SkeletonElement type="heading" />
                            <SkeletonElement type="text" />
                        </div>
                        <div className="skeleton_vehicleLogo">
                            <SkeletonElement type="avatar" />

                        </div>
                        <Shimmer />
                    </div>

                    <div className="skeleton_filter shimmer_wrapper_absolute">
                        <div className="skeleton_button">
                            <SkeletonElement type="button" />
                        </div>
                        <div className="skeleton_button">
                            <SkeletonElement type="button" />
                        </div>
                        <div className="skeleton_button">
                            <SkeletonElement type="button" />
                        </div>

                        <Shimmer />
                    </div>
                    <div className="skeleton_rows shimmer_wrapper_absolute">
                        <SkeletonElement type="titleRowHeading" />
                        <SkeletonElement type = "titleRow" />
                        <SkeletonElement type = "titleRow" />
                        <SkeletonElement type = "titleRow" />
                        <SkeletonElement type = "titleRow" />
                        <SkeletonElement type = "titleRow" />
                        <SkeletonElement type = "titleRow" />

                        <Shimmer />
                    </div>
                </div>

            </div>
        </>
    )
}

export default SkeletonVehicle;