import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import firebase from './../config/firebase';
import { firebaseLooper } from '../utils/firebaseLooper';
import { Table, Label, Loader, Button } from 'semantic-ui-react';
import {
  getAllUsersRequests,
  updateStatus,
} from '../actions/adminDashboardActions';

const db = firebase.firestore();
const moment = require('moment');

const AdminDashboard = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  let isLoading = useSelector((state) => state.admin.loading);
  const requestUpdateListener = useSelector((state) => state.admin.lastStatus);
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
          }
        });
      });
      setTimeout(() => {
        dispatch(getAllUsersRequests(requstsList));
      }, 1000);
    });
  }, [dispatch, requestUpdateListener]);

  const changeStatus = (status, email, id) => {
    const docRef = db
      .collection('users_requests')
      .doc(email)
      .collection(email)
      .doc(id);

    return docRef
      .update({
        status,
      })
      .then(() => {
        dispatch(updateStatus({ status, id }));
      })
      .catch((error) => {
        console.error('Error updating document: ', error);
      });
  };

  const allRequests = useSelector((state) => state.admin.requests);

  if (currentUser && allRequests.length !== 0) {
    return (
      <div>
        <Loader active={isLoading} size="massive">
          Loading requests...
        </Loader>
        <h3 style={{ padding: '80px 0 20px' }}>Admin Dashbord</h3>
        <Table celled stripped="true">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Full Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Requested</Table.HeaderCell>
              <Table.HeaderCell>From</Table.HeaderCell>
              <Table.HeaderCell>To</Table.HeaderCell>
              <Table.HeaderCell>Reason</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {allRequests.map &&
              allRequests.map((item) => (
                <Table.Row key={item.id}>
                  <Table.Cell singleLine>{item.user}</Table.Cell>
                  <Table.Cell singleLine>{item.email}</Table.Cell>
                  <Table.Cell singleLine>
                    {moment
                      .unix(item.createdAt.seconds)
                      .toString()
                      .slice(3, -18)}
                  </Table.Cell>
                  <Table.Cell singleLine>
                    {moment
                      .unix(item.startDate.seconds)
                      .toString()
                      .slice(0, -18)}
                  </Table.Cell>
                  <Table.Cell singleLine>
                    {moment.unix(item.endDate.seconds).toString().slice(0, -18)}
                  </Table.Cell>
                  <Table.Cell>{item.text}</Table.Cell>
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
                  <Table.Cell singleLine>
                    <div>
                      <Button
                        size="mini"
                        color="green"
                        onClick={() =>
                          changeStatus('approved', item.email, item.id)
                        }
                      >
                        Approve
                      </Button>
                      <Button
                        size="mini"
                        color="red"
                        onClick={() =>
                          changeStatus('declined', item.email, item.id)
                        }
                      >
                        Decline
                      </Button>
                    </div>
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
