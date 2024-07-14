import React from "react";

const RecentActivities = ({ activities }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-4">
      <h2 className="text-xl font-bold mb-2">Recent Activities</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id} className="mb-2">
            <p>{activity.description}</p>
            <p className="text-sm text-gray-500">{activity.timestamp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivities;
