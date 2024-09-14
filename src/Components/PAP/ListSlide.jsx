import React from 'react'
import * as MDIcons from "react-icons/md";
import * as FCIcons from "react-icons/fc";
import * as GRIcons from "react-icons/gr";
import * as SLIcons from "react-icons/sl";
import * as GOIcons from "react-icons/go";
import * as PiIcons from "react-icons/pi";
import * as IOIcons from "react-icons/io5";
import * as FAIcons from "react-icons/fa6";
import * as BSIcons from "react-icons/bs";

const ListSlide = ({ listSlide }) => {

    // For maping icons dynamically
    const highlightIcons = (icon) => {
        if (icon.startsWith("Md")) {
            return MDIcons[icon];
        } else if (icon.startsWith("Fc")) {
            return FCIcons[icon];
        } else if (icon.startsWith("Gr")) {
            return GRIcons[icon];
        } else if (icon.startsWith("Sl")) {
            return SLIcons[icon];
        } else if (icon.startsWith("Go")) {
            return GOIcons[icon];
        } else if (icon.startsWith("Pi")) {
            return PiIcons[icon];
        } else if (icon.startsWith("Bs")) {
            return BSIcons[icon];
        } else if (icon.startsWith("Fa")) {
            return FAIcons[icon];
        } else if (icon.startsWith("Io")) {
            return IOIcons[icon];
        } else if (icon.startsWith("Pi")) {
            return PiIcons[icon];
        } else {
            return "N/A";
        }
    };

    return (
        <>
            {listSlide.map((l, i) => {
                return <div key={i} className="my-6 group rounded-lg hover:before:border-indigo-600 relative overflow-hidden border-l-2 border-indigo-600 bg-white px-3 text-indigo-600 shadow-md transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-indigo-600 before:to-indigo-400 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full">
                    <span className="relative z-10 flex items-center gap-4 py-4 px-4">
                        <span className="text-indigo-600 group-hover:text-white">{React.createElement(highlightIcons(l.icon))}</span>
                        {l.title}
                    </span>
                </div>
            })}
        </>
    )
}

export default ListSlide