import React, {useState} from "react";
import "./AdminUserManagement.css";
import {useMutation, useQuery, useQueryClient} from "react-query";
import Table from "react-bootstrap/Table";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleInfo} from "@fortawesome/free-solid-svg-icons";
import ModalUserInfo from "../ModalUserInfo/ModalUserInfo";

const AdminUserManagement = () => {
  // Variables
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const queryClient = useQueryClient();

  // Functions using the API

  const fetchUsers = async () => {
    const response = await fetch("http://localhost:8080/api/v1/admin/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  };

  const enableUser = async (username) => {
    const response = await fetch(
      "http://localhost:8080/api/v1/admin/users/enable/" + username,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      },
    );
  };

  const disableUser = async (username) => {
    const response = await fetch(
      "http://localhost:8080/api/v1/admin/users/disable/" + username,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      },
    );
  };

  // End of Functions using the API

  // useMutations hook to call the API to enable/disable a user

  const enableUserMutation = useMutation(enableUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });

  const disableUserMutation = useMutation(disableUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });

  const handleSelectChange = async (event, user) => {
    if (event.target.value === "enable") {
      await enableUserMutation.mutate(user.username);
    } else {
      await disableUserMutation.mutate(user.username);
    }
  };

  // UseQuery hook to fetch the data from the API

  const { data, status } = useQuery({
    queryKey: "users",
    queryFn: fetchUsers,
  });

  // Function to toggle the modal and set the selected user

  const toggleModal = (user) => {
    setSelectedUser(user);
    setShowModal(!showModal);
  };

  return (
    <div className="admin-user-management-container">
      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <div>
          <h2>Usuarios</h2>
          <Table responsive>
            <thead>
              <tr>
                <th>Username</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
                <th>Info</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr key={user.username}>
                  <td>{user.username}</td>
                  <td>{user.role}</td>
                  <td>{user.enabled ? "Enabled" : "Disabled"}</td>
                  <td>
                    <select
                      defaultValue={user.enabled ? "enable" : "disable"}
                      onChange={(event) => handleSelectChange(event, user)}
                    >
                      <option value="enable">Enable</option>
                      <option value="disable">Disable</option>
                    </select>
                  </td>
                  <td>
                    <button
                      style={{ backgroundColor: "darkblue" }}
                      onClick={() => toggleModal(user)}
                    >
                      <FontAwesomeIcon icon={faCircleInfo} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}

      {showModal && (
        <ModalUserInfo user={selectedUser} closeModal={toggleModal} />
      )}
    </div>
  );
};

export default AdminUserManagement;
