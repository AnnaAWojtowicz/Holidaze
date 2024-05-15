import React from "react";

function Host({ userData }) {
    return (
        <div>
            <div className="host">About host:</div>


            <div className="hostDetails">Name: {userData.name}</div>
            <div className="hostDetails">Email: {userData.email}</div>

            {/* <img className="hostAvatar" src={data.avatar.url} alt={data.avatar.alt} />
                <div className="hostDetails">{data.bio}</div> */}

        </div>
    );
}

export default Host;
