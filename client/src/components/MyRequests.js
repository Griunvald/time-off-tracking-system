import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import firebase from './../config/firebase';
import { Table } from 'semantic-ui-react';
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
  const requestsData = useSelector((state) => state.userRequests.requests);
  console.log(requestsData);

  return (
    <div>
      <h2>My requests</h2>
      <Table basic="very">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Created at</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>John</Table.Cell>
            <Table.Cell>Approved</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Jamie</Table.Cell>
            <Table.Cell>Approved</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Jill</Table.Cell>
            <Table.Cell>Denied</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default MyRequests;
