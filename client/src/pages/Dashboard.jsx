import React from "react";
import KeyMetrics from "../components/KeyMetrices";
import RecentActivities from "../components/RecentActivities";
import SummaryCard from "../components/SummaryCard";

const Dashboard = () => {
  const metrics = [
    { title: "Total Users", value: "1,234" },
    { title: "Total Transactions", value: "567" },
    { title: "Revenue", value: "$12,345" },
  ];

  const activities = [
    {
      id: 1,
      description: "User John Doe signed up",
      timestamp: "2024-07-14 10:00",
    },
    {
      id: 2,
      description: "Transaction #1234 completed",
      timestamp: "2024-07-14 09:45",
    },
    {
      id: 3,
      description: "User Jane Smith updated profile",
      timestamp: "2024-07-14 09:30",
    },
  ];

  const summaryContent =
    "This is a summary of the key information and metrics for your dashboard.";

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <KeyMetrics metrics={metrics} />
      <RecentActivities activities={activities} />
      <SummaryCard title="Summary" content={summaryContent} />
    </div>
  );
};

export default Dashboard;

// import React, { useEffect, useState } from "react";
// import KeyMetrics from "../components/KeyMetrices";
// import RecentActivities from "../components/RecentActivities";
// import SummaryCard from "../components/SummaryCard";
// import { getMetrics, getActivities, getSummary } from "../services/api";

// const Dashboard = () => {
//   const [metrics, setMetrics] = useState([]);
//   const [activities, setActivities] = useState([]);
//   const [summaryContent, setSummaryContent] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const metricsData = await getMetrics();
//         setMetrics(metricsData);

//         const activitiesData = await getActivities();
//         setActivities(activitiesData);

//         const summaryData = await getSummary();
//         setSummaryContent(summaryData);
//       } catch (error) {
//         console.error("Error fetching dashboard data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
//       <KeyMetrics metrics={metrics} />
//       <RecentActivities activities={activities} />
//       <SummaryCard title="Summary" content={summaryContent} />
//     </div>
//   );
// };

// export default Dashboard;
