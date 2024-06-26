import React, { useState } from "react";

export default function Message(args){

    return (
        <h1 className="text-3xl font-bold underline">
            {args.text}
    </h1>
    );
}