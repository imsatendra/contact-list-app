import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AddContact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(state => state);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handelSubmit = e => {
        e.preventDefault();

        const checkEmail = contacts.find(contact => contact.email === email && email)
        const checkNumber = contacts.find(contact => contact.number === parseInt(number) && number)

        if (!email || !number || !name) {
            return alert("Please fill in all fields!");
        }

        if (checkEmail) {
            return alert("This email already Exists!");
        }

        if (checkNumber) {
            return alert("This number already Exists!");
        }

        const data = {
            id: contacts[contacts.length - 1].id + 1,
            name,
            email,
            number
        }

        dispatch({ type: 'ADD_CONTACT', payload: data });
        alert("Contact added successfully!!")
        navigate('/');
    };

    return (
        <div className='container'>
            <h1 className='display-5 text-center fw-bold'>Add Contact</h1>
            <div className='row'>
                <div className='col-md-6 bg-info shadow mx-auto p-5'>
                    <form className='text-center' onSubmit={handelSubmit}>
                        <div className='form-group mb-3'>
                            <input type='text' placeholder='Name' className='form-control'
                                value={name} onChange={e => setName(e.target.value)} />
                        </div>
                        <div className='form-group mb-3'>
                            <input type='email' placeholder='Email' className='form-control'
                                value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className='form-group mb-3'>
                            <input type='number' placeholder='Phone Number' className='form-control'
                                value={number} onChange={e => setNumber(e.target.value)} />
                        </div>
                        <div className='form-group mb-3'>
                            <input type='submit' value='Add Contact' className='btn btn-block btn-dark' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddContact;