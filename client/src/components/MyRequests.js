import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import firebase from './../config/firebase';
import { Table, Button, Label, Loader } from 'semantic-ui-react';
import { firebaseLooper } from '../utils/firebaseLooper';

const moment = require('moment');
const db = firebase.firestore();

const MyRequests = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const calendar = useSelector((state) => state.calendar.range);
  let isLoading = useSelector((state) => state.userRequests.loading);

  console.log(currentUser);
  useEffect(() => {
    setTimeout(() => {
      if (currentUser) {
        const requestsRef = db
          .collection('users_requests')
          .doc(currentUser.email)
          .collection(currentUser.email);

        requestsRef.get().then((snapshot) => {
          const requests = firebaseLooper(snapshot);
          console.log(requests);
          dispatch({ type: 'GET_USER_REQUESTS', payload: requests });
        });
      }
    }, 1000);
  }, [dispatch, currentUser, calendar]);

  const requests = useSelector((state) => state.userRequests.requests);

  const deleteRequest = (id) => {
    console.log(id);
    const filtered = requests.filter((request) => {
      return request.id !== id;
    });
    console.log(filtered);
    dispatch({ type: 'GET_USER_REQUESTS', payload: filtered });
    const selectedRequestRef = db
      .collection('users_requests')
      .doc(currentUser.email)
      .collection(currentUser.email)
      .doc(id);

    selectedRequestRef
      .delete()
      .then(() => {
        console.log(`Request with id ${id} was removed`);
      })
      .catch((err) => console.log(err));
  };
  if (currentUser && requests.length !== 0) {
    return (
      <div>
        <Loader active={isLoading} size="massive">
          Loading requests...
        </Loader>
        <h3 style={{ padding: '80px 0 20px' }}>My requests</h3>
        <Table celled stripped="true">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Requested</Table.HeaderCell>
              <Table.HeaderCell>From</Table.HeaderCell>
              <Table.HeaderCell>To</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {requests.map &&
              requests.map((item) => (
                <Table.Row key={item.id}>
                  <Table.Cell>
                    {moment
                      .unix(item.createdAt.seconds)
                      .toString()
                      .slice(3, -18)}
                  </Table.Cell>
                  <Table.Cell>
                    {moment
                      .unix(item.startDate.seconds)
                      .toString()
                      .slice(0, -18)}
                  </Table.Cell>
                  <Table.Cell>
                    {moment.unix(item.endDate.seconds).toString().slice(0, -18)}
                  </Table.Cell>
                  <Table.Cell>
                    <Label
                      horizontal
                      color={
                        item.status === 'pending'
                          ? 'yellow'
                          : item.status === 'approved'
                          ? 'green'
                          : 'red'
                      }
                    >
                      {item.status}
                    </Label>
                  </Table.Cell>
                  <Table.Cell>
                    <Button
                      size="mini"
                      color="red"
                      onClick={() => {
                        deleteRequest(item.id);
                      }}
                    >
                      Cancel
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </div>
    );
  } else {
    return null;
  }
};

export default MyRequests;
