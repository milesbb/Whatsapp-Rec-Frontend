import { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  Image,
  InputGroup,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ATTEMPT_CHAT, searchUsers } from "../../redux/actions/profileActions";
import { socket } from "../ChatMain/ChatMain";

const Search = () => {
  const [participants, setParticipants] = useState([]);
  const [searchString, setSearchString] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchedUsers = useSelector((state) => {
    return state.loadedProfile.allUsers;
  });

  const currentUser = useSelector((state) => {
    return state.loadedProfile.currentUser;
  });

  const search = () => {
    dispatch(searchUsers(searchString, currentUser));
  };

  const addParticipant = (user) => {
    setParticipants([...participants, user]);
    console.log(participants);
  };

  const removeParticipant = (user) => {
    let newParticipants = participants.filter(
      (participant) => participant._id !== user._id
    );
    setParticipants([...newParticipants]);
    console.log(participants);
  };

  useEffect(() => {
    addParticipant(currentUser);
  }, []);

  const startChat = () => {
    socket.emit("checkChats", participants)
    dispatch({ type: ATTEMPT_CHAT, payload: participants });
    navigate("/chat");
  };

  return (
    <div className="" style={{ height: "80vh", width: "100vw" }}>
      <div className="d-flex">
        <div className="w-75">
          <h1 className="pt-3">Search for other users!</h1>
          <div className="w-75 mx-auto">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Enter an email or username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={searchString}
                onChange={(e) => {
                  setSearchString(e.target.value);
                }}
              />

              <Button variant="outline-secondary" onClick={search}>
                Search
              </Button>
            </InputGroup>
            <Container
              style={{
                boxShadow: "inset 5px 5px 15px 5px rgba(0,0,0,0.23)",
                borderRadius: "30px",
                height: "60vh",
              }}
              className="overflow-auto"
            >
              {searchedUsers.length === 0 ? (
                <p className="pt-5 text-secondary">
                  Try searching someone's email or username!
                </p>
              ) : (
                <>
                  {searchedUsers.map((user) => (
                    <div key={user._id}>
                      <Row className="my-4">
                        <Col>
                          <Image
                            style={{ borderRadius: "500px" }}
                            src={user.avatar}
                          />
                        </Col>
                        <Col className="my-4">{user.username}</Col>
                        <Col>
                          {participants.includes(user) ? (
                            <Button
                              variant="danger"
                              className="mt-3"
                              onClick={() => {
                                removeParticipant(user);
                              }}
                            >
                              Remove User
                            </Button>
                          ) : (
                            <Button
                              className="mt-3"
                              onClick={() => {
                                addParticipant(user);
                              }}
                            >
                              Add User
                            </Button>
                          )}
                        </Col>
                      </Row>{" "}
                      <hr></hr>
                    </div>
                  ))}
                </>
              )}
            </Container>
          </div>
        </div>
        <div
          style={{ boxShadow: "-2px 2px 15px -4px #000000", height: "80vh" }}
          className="w-25 overflow-auto"
        >
          <h2 className="pt-1">Added participants</h2>
          <Container className="mt-4">
            {participants.length === 0 ? (
              <p>No participants added yet</p>
            ) : (
              <>
                {participants.map((person, i) => {
                  return (
                    <div key={i}>
                      <Row>
                        <Col>
                          <Image
                            style={{ borderRadius: "500px" }}
                            src={person.avatar}
                          />
                        </Col>
                        <Col className="my-3">{person.username}</Col>
                        <Col>
                          {person._id === currentUser._id ? (
                            <p className="mt-3">You</p>
                          ) : (
                            <Button
                              variant="danger"
                              onClick={() => {
                                removeParticipant(person);
                              }}
                            >
                              Remove
                            </Button>
                          )}
                        </Col>
                      </Row>
                      <hr></hr>
                    </div>
                  );
                })}
                <Button
                  className="mt-1 mb-4"
                  variant="success"
                  onClick={startChat}
                >
                  Start Chat!
                </Button>
              </>
            )}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Search;
