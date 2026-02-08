import React from "react";
import "./ActivityList.css";

export default function ActivityList({ logs }) {
  return (
    // <div className="list-container">
    //   {logs.map((log) => (
    //     <div key={log.id} className="log-item-opt">
    //       <span>{log.message}</span>
    //     </div>
    //   ))}
    // </div>
    <div className="list-container">
      {logs.map((log) => (
        <div key={log.id} className="log-item-opt">
          <img src={log.avatar} className="avatar" alt="User avatar" />
          <div className="content">
            <p>{log.message}</p>
            <img src={log.preview} className="preview" alt="Activity preview" />
          </div>
        </div>
      ))}
    </div>
  );
}
