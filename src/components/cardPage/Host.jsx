import React from "react";

function Host({ data }) {
    return (
        <div>
            <div className="hostDetails">About host:</div>
            <div className="host">
                <div>
                    <div className="hostDetails">Name: {data.name}</div>
                    <div className="hostDetails">Email: {data.email}</div>
                </div>
                <img className="hostAvatar" src={data.avatar.url} alt={data.avatar.alt} />
                <div className="hostDetails">{data.bio}</div>
            </div>
        </div>
    );
}

export default Host;
