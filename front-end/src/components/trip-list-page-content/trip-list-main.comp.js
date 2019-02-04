import React from 'react';
import TripList from "./trips-list/trips-list.comp";
import SidebarFilter from "./sidebar-filter/sidebar-filter.comp";
import "./trip-list-main.css";

export default function TripListPageMain(props) {
  return (
    <section>
      <div className="container">
        <div className="row py-5 trip-list-main">
            <div className="col-sm-9 col-12">
                <TripList tripList = {props.tripList}/>
            </div>
            <div className="col-sm-3 col-12">
                <SidebarFilter/>
            </div>
        </div>
      </div>
    </section>
  )
}
