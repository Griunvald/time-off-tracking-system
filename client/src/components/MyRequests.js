import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import firebase from './../config/firebase';
import { Table, Icon, Label } from 'semantic-ui-react';
const moment = require('moment');
const db = firebase.firestore();

const MyRequests = () => {
  useEffect(() => {
    const requestRef = db
      .collection('users_requests')
      .doc('user_one@mail.com')
      .collection('user_one@mail.com');

    requestRef.onSnapshot((snapshot) => {
      let arr = [];
      snapshot.forEach((doc) => arr.push(doc.data()));
      dispatch({ type: 'GET_USER_REQUESTS', payload: arr });
    });
  }, []);
  const dispatch = useDispatch();
  let requestsData = [];
  requestsData.push(useSelector((state) => state.userRequests.requests));
  console.log(requestsData);

  return (
    <div>
      <h3 style={{ padding: '80px 0 20px' }}>My requests</h3>
      <Table celled stripped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Created at</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Cancel</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {requestsData[0].map((item) => (
            <Table.Row>
              <Table.Cell>
                {moment.unix(item.createdAt.seconds).toString().slice(0, -18)}
              </Table.Cell>
              <Table.Cell>
                <Label horizontal color="yellow">
                  {item.status}
                </Label>
              </Table.Cell>
              <Table.Cell>
                <Icon name="remove" />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default MyRequests;
