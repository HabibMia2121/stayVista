/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import { formatDistance } from "date-fns";
import Button from "../Button/Button";
import Calender from "./Calender";
import { useState } from "react";

const RoomReservation = ({ room }) => {
    // dateDistance get 
    const totalDays = parseInt(formatDistance(new Date(room?.to), new Date(room?.from)).split(' ')[0]);

    // total price * totalDays
    const totalPrice = room?.price * totalDays;

    const [value, setValue] = useState({
        startDate: new Date(room?.from),
        endDate: new Date(room?.to),
        key:'selection'
    })

    return (
        <div className=" border-[1px] border-neutral-200 rounded-xl overflow-hidden bg-white ">
            <div className=" flex items-center gap-1 p-4">
                <div className=" text-2xl font-bold">$ {room?.price}</div>
                <div className=" font-normal text-neutral-600">night</div>
            </div>
            <hr />
            {/* create custom component */}
            <div className="flex justify-center ">
                <Calender value={value}/>
            </div>
            <hr />
            <div className=" p-4">
                <Button
                    label={'Reserve'}
                />
            </div>
            <hr />
            <div className=" p-4 flex items-center justify-between font-semibold text-lg">
                <div>Total</div>
                <div>${totalPrice}</div>
            </div>
        </div>
    );
};

export default RoomReservation;