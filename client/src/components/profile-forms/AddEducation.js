import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addEducation } from '../../redux/profile/profile.actions';

const AddEducation = ({ addEducation, history }) => {
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: false,
        description: ''
      });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <div className="container">
      <div className="row">
      <div className="col text-center">
            <h1 className='display-2 text-primary'>Add Your Education</h1>
      <p className='lead'>
        <i className='fas fa-code-branch' /> Add any school that you
        have attended
      </p>
      <small>* = required field</small>
      <form
        onSubmit={e => {
          e.preventDefault();
          addEducation(formData, history);
        }}
      >
        <div className='form-group'>
          <input
            className="form-control"
            type='text'
            placeholder='* School'
            name='school'
            value={school}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
          className="form-control"

          type='text'
          placeholder='* Degree or Certificate'
          name='degree'
          value={degree}
          onChange={e => onChange(e)}
          required
          />
        </div>
        <div className='form-group'>
          <input
          className="form-control"
          type='text'
          placeholder='Field of Study'
          name='fieldofstudy'
          value={fieldofstudy}
          onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <h4>From Date</h4>
          <input
          type='date'
          name='from'
          value={from}
          onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <p>
            <input
            className="form-control"
            type='checkbox'
            name='current'
            checked={current}
            value={current}
            onChange={() => {
              setFormData({ ...formData, current: !current });
              toggleDisabled(!toDateDisabled);
            }}
          />{' '}
          Current School
          </p>
        </div>
        <div className='form-group'>
          <h4>To Date</h4>
          <input
          type='date'
          name='to'
          value={to}
          onChange={e => onChange(e)}
          disabled={toDateDisabled ? 'disabled' : ''}
          />
        </div>
        <div className='form-group'>
          <textarea
          className="form-control"
          name='description'
          cols='30'
          rows='5'
          placeholder='Program Description'
          value={description}
          onChange={e => onChange(e)}
          />
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
      </div>
      </div>
      </div>

    </Fragment>
  );
};


export default connect(
  null,
  { addEducation }
)(withRouter(AddEducation));