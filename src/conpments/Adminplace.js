import React, { useState, useEffect } from 'react';
import './place.css'
import Res from '../conpments/recevation'
import UploadFile from './UploadFile';
function Admininfo() {
  const [content, setContent] = useState(<Employerlist showForm={showForm} />);

  function showList() {
    setContent(<Employerlist showForm={showForm} />);
  }

  function showForm(user) {
    setContent(<EmployerForm user={user} showList={showList} />);
  }

  return (
    <div className='container my-5'>
      {content}
    </div>
  );
}

function Employerlist(props) {
  const [Users, setUsers] = useState([]);

  function fetchUsers() {

    fetch("http://127.0.0.1:8000/api/user/", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Data not available");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data.data); // Update to setUsers(data.data) instead of setUsers(data)
      })
      .catch((error) => console.log("Error:", error));
  }

  useEffect(() => {


    fetchUsers();
  }, []);

  // Rest of your component code


  function deleteproduct(id) {
    fetch("http://127.0.0.1:8000/api/user/delete/" + id, {
      method: 'DELETE',
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
      .then((response) => response.json())
      .then((data) => fetchUsers());

  }
  return (

    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <h2 className='text-center mb-3'>List of Users</h2>
    
      <button onClick={() => props.showForm({})} type='button' className='add me-2'>Add</button>
      <button onClick={() => fetchUsers()} type='button' className='refrech'>Refresh</button>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Family Name</th>
            <th>CIN</th>
            <th>Telephone</th>
            <th>Address</th>
            <th>Login</th>
            <th>Image</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {Users.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.nom}</td>
                <td>{user.prenom}</td>
                <td>{user.cin}</td>
                <td>{user.phone}</td>
                <td>{user.adresse}</td>
                <td>{user.email}</td>
                <td>
                  <img height="60" width="60" src={'http://127.0.0.1:8000/api/'+user.img} ></img>
                </td>
                <td>{user.role}</td>

                <td style={{ width: "10px", whiteSpace: "nowrap" }}>
                  <button onClick={() => props.showForm(user)} className='refrech me-2'>Edit</button>
                  <button onClick={() => deleteproduct(user.id)} className='add'>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br></br>
      <h2 className='text-center mb-3'>List of Reservations</h2>
      <Res></Res>
    </>
  );
}

function EmployerForm(props) {


  const [filePath, setFilePath] = useState('');


  useEffect(()=>{
    setFilePath(props.user.img);
  },[])


  function handleSubmit(event) {
    event.preventDefault();

    // Retrieve form data
    const formData = new FormData(event.target);
    // Convert into object
    let user = Object.fromEntries(formData.entries());

    user.img = filePath;

    // Check validation
    if (
      !user.nom ||
      !user.prenom ||
      !user.cin ||
      !user.phone ||
      !user.adresse ||
      !user.email ||
      !user.password ||
      !user.role ||
      !user.img
    ) {
      alert("Please provide all the required fields");
      return;
    }

    console.log(user.img)

    if (props.user.id) {
      // Update existing user
      fetch(`http://127.0.0.1:8000/api/user/update/${props.user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify(user),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Data not available");
          }
          return response.json();
        })
        .then((data) => props.showList())
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      // Create new user
      fetch(`http://127.0.0.1:8000/api/user/insert`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify(user),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Data not available");
          }
          return response.json();
        })
        .then((data) => props.showList())
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }

  return (
    <>
      <br></br>
      <br></br>
      <br></br>

      <h2 className="text-center mb-3">ADD Employers</h2>
      <br></br>
      <br></br>
      <br></br>
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <form className="login" onSubmit={handleSubmit}>
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">id</label>
              <div className="col-sm-4">
                <input
                  className="form-control"
                  name="id"
                  defaultValue={props.user.id}
                  disabled
                />
              </div>
            </div>

            <div className='row mb -3'>
              <label className='col-sm-4 col-form-label'>Name</label>
              <div className='col-sm-4'>
                <input className='form-control'
                  name='nom'
                  defaultValue={props.user.nom} />

              </div>
            </div>
            <br></br>
            <div className='row mb -3'>
              <label className='col-sm-4 col-form-label'>family Name</label>
              <div className='col-sm-4'>
                <input className='form-control'
                  name='prenom'
                  defaultValue={props.user.prenom} />

              </div>
            </div>
            <br></br>
            <div className='row mb -3'>
              <label className='col-sm-4 col-form-label'>Cin</label>
              <div className='col-sm-4'>
                <input className='form-control'
                  name='cin'
                  defaultValue={props.user.cin} />

              </div>
            </div>
            <br></br>
            <div className='row mb -3'>
              <label className='col-sm-4 col-form-label'>Telephone</label>
              <div className='col-sm-4'>
                <input className='form-control'
                  name='phone'
                  defaultValue={props.user.phone} />

              </div>
            </div>
            <br></br>
            <div className='row mb -3'>
              <label className='col-sm-4 col-form-label'>Adress</label>
              <div className='col-sm-4'>
                <input className='form-control'
                  name='adresse'
                  defaultValue={props.user.adresse} />

              </div>
            </div>
            <br></br>
            <div className='row mb -3'>
              <label className='col-sm-4 col-form-label'>login</label>
              <div className='col-sm-4'>
                <input className='form-control'
                  name='email'
                  defaultValue={props.user.email} />

              </div>
            </div>
            <br></br>
            <div className='row mb -3'>
              <label className='col-sm-4 col-form-label'>Password</label>
              <div className='col-sm-4'>
                <input className='form-control'
                  name='password'
                  defaultValue={props.user.password} />
              </div>
            </div>

            <br></br>
            <div className='row mb -3'>
              <label className='col-sm-4 col-form-label'>role</label>
              <div className='col-sm-4'>
                <input className='form-control'
                  name='role'
                  defaultValue={props.user.role} />

              </div>
            </div>
            <br></br>
            <div className='row mb -3'>
              <label className='col-sm-4 col-form-label'>image</label>
              <div className='col-sm-4'>
                {/* <input className='form-control'
                  name='img'
                  defaultValue={props.user.img} /> */}

                <UploadFile filePath={filePath} setFilePath={setFilePath} />
              </div>
              
            </div>

            <div className='row'>
              <div className>

                <button type='submit' className='btn btn-primary btn-sm me-3 w-100 mt-4'>save</button>
                <button onClick={() => props.showList()} type='button' className='btn btn-secondary me-2 w-100'>Cancel</button>

              </div>
             
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br> <br></br>
            <br></br>
            <br></br>
            <br></br>

          </form>

        </div>

      </div>

    </>

  );
}

export default Admininfo;
