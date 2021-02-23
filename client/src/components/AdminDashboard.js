import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import firebase from './../config/firebase';
import { firebaseLooper } from '../utils/firebaseLooper';
import { Table, Label } from 'semantic-ui-react';

const db = firebase.firestore();
const moment = require('moment');

const AdminDashboard = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const emailList = [];
    const requstsList = [];
    const usersRef = db.collection('users');

    usersRef.get().then((snapshot) => {
      const emails = firebaseLooper(snapshot);
      emails.forEach((el) => {
        emailList.push(el.email);
        const requestsRef = db
          .collection('users_requests')
          .doc(el.email)
          .collection(el.email);

        requestsRef.get().then((snapshot) => {
          const requests = firebaseLooper(snapshot);
          if (requests.length > 0) {
            requstsList.push(...requests);
            dispatch({ type: 'GET_ALL_USERS_REQUESTS', payload: requstsList });
          }
        });
      });
      console.log(requstsList);
    });
  }, [dispatch]);
  const allRequests = useSelector((state) => state.admin.requests);

  if (currentUser && allRequests.length !== 0) {
    return (
      <div>
        <h3 style={{ padding: '80px 0 20px' }}>Admin Dashbord</h3>
        <Table celled stripped="true">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Requested</Table.HeaderCell>
              <Table.HeaderCell>From</Table.HeaderCell>
              <Table.HeaderCell>To</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {allRequests.map &&
              allRequests.map((item) => (
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

export default AdminDashboard;
