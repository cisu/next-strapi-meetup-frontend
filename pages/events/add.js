import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, {useState} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import Layout from '@/components/Layout';
import {API_URL} from '@/config/index';
import styles from '@/styles/Form.module.scss';

const AddEventPage = () => {
  const [values, setValues] = useState({
    name: '',
    performers: '',
    venue: '',
    address: '',
    date: '',
    time: '',
    description: '',
  });

  const router = useRouter();

  //  submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(values);

    // Validation
    const hasEmptyFields = Object.values(values).some(element => element === '')

    if(hasEmptyFields) {
      toast.error('Please fill all fields')
    }

    const res = await fetch(`${API_URL}/events`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })

    if(!res.ok) {
      toast.error('Something went wrong')
    } else {
      const evt = await res.json()
      router.push(`/events/${evt.slug}`)
    }

  };

  //   input change
  const handleInputChange = e => {
    const {name, value} = e.target;
    setValues({...values, [name]: value});
  };

  return (
    <Layout title='Add New Event'>
      <Link href='/events'>Go Back</Link>

      <h1>Add Event</h1>

      <ToastContainer />

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}>
          {/* name */}
          <div>
            <label htmlFor='name'>Event Name</label>
            <input
              type='text'
              id='name'
              name='name'
              value={values.name}
              onChange={handleInputChange}
            />
          </div>

          {/* performers  */}
          <div>
            <label htmlFor='performers'>Performers</label>
            <input
              type='text'
              id='performers'
              name='performers'
              value={values.performers}
              onChange={handleInputChange}
            />
          </div>

          {/* venue  */}
          <div>
            <label htmlFor='venue'>Venue</label>
            <input
              type='text'
              id='venue'
              name='venue'
              value={values.venue}
              onChange={handleInputChange}
            />
          </div>

          {/* address  */}
          <div>
            <label htmlFor='address'>Address</label>
            <input
              type='text'
              id='address'
              name='address'
              value={values.address}
              onChange={handleInputChange}
            />
          </div>

          {/* date  */}
          <div>
            <label htmlFor='date'>Date</label>
            <input
              type='date'
              id='date'
              name='date'
              value={values.date}
              onChange={handleInputChange}
            />
          </div>

          {/* time  */}
          <div>
            <label htmlFor='time'>Time</label>
            <input
              type='text'
              id='time'
              name='time'
              value={values.time}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* description */}
        <div className={styles.description}>
          <label htmlFor='description'>Description</label>
          <textarea
            name='description'
            id='description'
            value={values.description}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <input type="submit" value="Add Post" className='btn'/>
      </form>
    </Layout>
  );
};

export default AddEventPage;
