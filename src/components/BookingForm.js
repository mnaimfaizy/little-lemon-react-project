import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useTimeSpan } from '../hooks/useTimeSpan';
import { submitAPI } from './../api/api';

// Yup validation schema
const bookingValidationSchema = Yup.object().shape({
    date: Yup.date().required('Date is required').min(new Date(), 'Date cannot be in the past'),
    time: Yup.string().required('Time is required'),
    guests: Yup.number().required('Number of guests is required').min(1, 'At least one guest is required'),
    occasion: Yup.string().required('Occasion is required'),
  });

function BookingForm() {
    const { timeSpan } = useTimeSpan();
    const navigate = useNavigate()

    return (
      <section className='sm:p-16 p-8'>
      <h1 className='text-2xl text-center pb-4'>TABLE RESERVATION</h1>
      <Formik
        initialValues={{ date: '', time: '', guests: 1, occasion: '' }}
        validationSchema={bookingValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          const result = submitAPI(values);
          if(result) {
            navigate('/confirmation');
          }
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className='grid max-w-lg mx-auto p-6 gap-4 bg-white shadow-md rounded-lg'>
            <label htmlFor="res-date" className='font-semibold text-gray-700'>Choose date</label>
            <Field type="date" name="date" id="res-date" className='border border-gray-300 rounded-md p-2 focus:ring-primary focus:border-primary' />
            <ErrorMessage name="date" component="div" className="text-red-500 text-xs" />

            <label htmlFor="res-time" className='font-semibold text-gray-700'>Choose time</label>
            <Field as="select" name="time" id="res-time" className='border border-gray-300 rounded-md p-2 focus:ring-primary focus:border-primary'>
              {timeSpan.map((time) => <option key={time} value={time}>{time}</option>)}
            </Field>
            <ErrorMessage name="time" component="div" className="text-red-500 text-xs" />

            {/* Continue with the rest of the form fields using <Field> and <ErrorMessage> */}

            <label htmlFor="guests" className='font-semibold text-gray-700'>Number of guests</label>
            <Field type="number" name="guests" id="guests" className='border border-gray-300 rounded-md p-2 focus:ring-primary focus:border-primary' />
            <ErrorMessage name="guests" component="div" className="text-red-500 text-xs" />

            <label htmlFor="occasion" className='font-semibold text-gray-700'>Occasion</label>
            <Field as="select" name="occasion" id="occasion" className='border border-gray-300 rounded-md p-2 focus:ring-primary focus:border-primary'>
                <option>Birthday</option>
                <option>Anniversary</option>
            </Field>
            <ErrorMessage name="occasion" component="div" className="text-red-500 text-xs" />
            
            <button type="submit" disabled={isSubmitting} className='mt-4 bg-primary text-white p-2 rounded-md'>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </section>

    );
}

export default BookingForm;