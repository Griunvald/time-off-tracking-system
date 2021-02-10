import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { openModal } from '../actions/modalActions';

import { useDispatch, useSelector } from 'react-redux';
import { logOutFirebase } from '../firebase/firebaseService';
import {
  Menu,
  Container,
  MenuItem,
  Header,
  HeaderContent,
  ItemContent,
  Item,
  Button,
  Image,
  Dropdown,
} from 'semantic-ui-react';

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuthenticated = useSelector((state) => state.auth.authenticated);
  const currentUser = useSelector((state) => state.auth.currentUser);

  const handleLogOut = async () => {
    try {
      await logOutFirebase();
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Menu borderless inverted fixed="top">
        <Container>
          <Item>
            <ItemContent>
              <Header as={Link} to="/" inverted>
                <HeaderContent as="h1">WHITEBOARD</HeaderContent>
              </Header>
            </ItemContent>
          </Item>
          <MenuItem position="right">
            {isAuthenticated ? (
              <>
                <Image
                  avatar
                  spaced="right"
                  src={
                    currentUser.photoURL ||
                    'https://graph.facebook.com/100179352095773/picture'
                  }
                />
                <Dropdown pointing="top right" text={currentUser.displayName}>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      text="Log Out"
                      onClick={handleLogOut}
                    ></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            ) : (
              <>
                <Button
                  secondary
                  onClick={() =>
                    dispatch(
                      openModal({
                        modalType: 'LoginModal',
                      })
                    )
                  }
                >
                  Log in
                </Button>
                <Button
                  inverted
                  color="green"
                  onClick={() =>
                    dispatch(openModal({ modalType: 'SignupModal' }))
                  }
                >
                  Sign up
                </Button>
              </>
            )}
          </MenuItem>
        </Container>
      </Menu>
    </div>
  );
};

export default Navbar;
