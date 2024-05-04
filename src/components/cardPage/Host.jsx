import React from "react";

function Host({ data }) {
    return (
        <div>
            <p className="hostDetails">About host:</p>
            <div className="host">
                <div>
                    <p className="hostDetails">Name: {data.name}</p>
                    <p className="hostDetails">Email: {data.email}</p>
                </div>
                <img className="hostAvatar" src={data.avatar.url} alt={data.avatar.alt} />
                <p className="hostDetails">{data.bio}</p>
            </div>
        </div>
    );
}

export default Host;
