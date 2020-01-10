import React, { useState } from "react";
import { Rnd } from "react-rnd";
import PropTypes from "prop-types";
import initialConstants from "../../initialConstants";

const Notification = ({ alerts }) => {
  const [x] = useState(initialConstants.notificationPosition_x);
  const [y] = useState(initialConstants.notificationPosition_y);
  const [width] = useState(initialConstants.notificationWidth);
  const [height] = useState(initialConstants.notificationHeight);

  const current = alerts[alerts.length - 1];

  return (
    <Rnd
      className="p-2 primery-bg select text-center"
      default={{ x, y, width, height }}
      bounds="parent"
      enableResizing="false"
    >
      <h3 className="text-center">
        <p> 🔔</p>
        <p>Alert on {current.pair}</p>
        <p>
          {current.value} {current.pair.slice(-3)}
        </p>
      </h3>
    </Rnd>
  );
};

Notification.propTypes = {
  alerts: PropTypes.array.isRequired
};

export default Notification;