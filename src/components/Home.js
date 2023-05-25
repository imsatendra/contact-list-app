import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const contacts = useSelector((state) => state);

  const dispatch = useDispatch();

  const deleteContact = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    alert("Contact deleted successfully!")
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-5 text-left">
          <span className="text-danger display-6">
            Click here to add contacts: &nbsp;&nbsp;
          </span>
          <Link to="/add" className="p-3 btn btn-outline-dark">
            Add Contact
          </Link>
        </div>
        <div className="col-md-12 mx-auto">
          <table className="table table-striped">
            <thead className="text-white bg-primary text-right ">
              <tr className="text-dark">
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Number</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, id) => (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.number}</td>
                  <td>
                    <Link
                      to={`/edit/${contact.id}`}
                      className="  btn btn-small btn-success me-2"
                    >
                      Edit
                    </Link>

                    <button
                      type="button"
                      onClick={() => deleteContact(contact.id)}
                      className=" btn btn-small btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
