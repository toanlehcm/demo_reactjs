import React from "react";
import { logs } from "./fakeLogs";
// import { ActivityListNoOptimization, ActivityListOptimized } from "./ActivityLists";
import "./ActivityList.css";
import { ActivityListNoOptimization } from "./ActivityListNoOptimization";
import ActivityList from "./ActivityList";

export default function ActivityListDemo() {
  return (
    <div style={{ padding: 20 }}>
      <h2>❌ Without content-visibility</h2>
      <ActivityListNoOptimization logs={logs} />

      <h2>✅ With content-visibility</h2>
      {/* <ActivityList logs={logs} /> */}
    </div>
  );
}
