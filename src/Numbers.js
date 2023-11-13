import React from 'react';
import {Avatar} from "primereact/avatar";

function Numbers({items}) {

    const items=[
        {number:'1'},
        {number:'2'},
        {number:'3'},
        {number:'+'},
        {number:'4'},
        {number:'5'},
        {number:'6'},
        {number:'-'},
        {number:'7'},
        {number:'8'},
        {number:'9'},
        {number:'*'},
        {number:'+/-'},
        {number:'0'},
        {number:'.'},
    ]


    return (
        <div className="flex flex-wrap w-6 p-4">
            <div className="w-3 h-6rem">

                {
                    items.map((n)=>{return( <Avatar shape={"circle"} size={"xlarge"} label={n.number}/>)})
                }
            </div>

        </div>

    );
}

export default Numbers;