import React from "react";
import AreaChart from "./AreaChart";
import Comments from "./Comments";
import DonutChart from "./DonutChart";
import Orders from "./Orders";
import Tasks from "./Tasks";
import TasksPanel from "./TasksPanel";
import Tickets from "./Tickets";
import TransactionsPanel from "./TransactionsPanel";

function Dashboard(props) {
  return (   
    <div id="page-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">
                Dashboard <small>Statistics Overview</small>
            </h1>
            <ol className="breadcrumb">
              <li className="active">
                <i className="fa fa-dashboard" /> Dashboard
              </li>
            </ol>
          </div>
        </div>
        <div className="row">
          <Comments />
          <Tasks />
          <Orders />
          <Tickets />
        </div>
        <AreaChart />
        <div className="row">
          <DonutChart />
          <div className="col-lg-4">
            <TasksPanel />
          </div>
          <div className="col-lg-4">
            <TransactionsPanel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;


        