import React, { useState, useEffect } from "react";
import { Rnd } from "react-rnd";
import PropTypes from "prop-types";
import initialConstants from "../../initialConstants";
import Dropdown from "react-bootstrap/Dropdown";
import CloseButton from "../common/CloseButton";

const Notification = ({ alerts, deleteAlertHandler }) => {
  const [x] = useState(initialConstants.notificationPosition_x);
  const [y] = useState(initialConstants.notificationPosition_y);
  const [width] = useState(initialConstants.notificationWidth);
  const [height] = useState(initialConstants.notificationHeight);
  const [current, setCurrent] = useState(alerts[alerts.length - 1]);
  const [notifications, setNotifications] = useState(alerts);

  useEffect(() => {
    const pair =
      notifications.length === alerts.length
        ? current
        : alerts[alerts.length - 1];
    setCurrent(pair);
    setNotifications(alerts);
  }, [current, alerts]);

  const selectHandler = e => {
    const data = e.target.text.split(" ");
    const pair = data[0];
    const value = data[1];
    const notification = notifications.find(
      n => n.pair === pair && n.value === value
    );
    setCurrent(notification);
  };

  const closeHandler = () => {
    debugger;
    deleteAlertHandler(alerts.indexOf(current));
  };

  return (
    <Rnd
      className="p-2 select default text-center widget"
      default={{ x, y, width, height }}
      bounds="parent"
      enableResizing="false"
    >
      <CloseButton closeHandler={closeHandler} />
      <h3 className="text-center">
        <p> 🔔</p>
        <Dropdown onChange={selectHandler}>
          <Dropdown.Toggle className="default inner">
            <p>
              Alert on {current.pair} {current.value}
            </p>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {alerts.map((a, key) => (
              <Dropdown.Item key={key} onClick={selectHandler}>
                {a.pair} {a.value}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </h3>
      a
    </Rnd>
  );
};

Notification.propTypes = {
  alerts: PropTypes.array.isRequired,
  deleteAlertHandler: PropTypes.func.isRequired
};

export default Notification;

//>
//         <p>
//           {last.value} {last.pair.slice(-3)}
//         </p>
