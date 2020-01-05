import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

const Form = props => {
  const { handleSubmit, register, errors } = useForm();
  const emailRegex = /\S+@\S+\.\S+/;

  const onSubmit = (data, e) => {
    props.submitMessage(data);
    e.target.reset();
  };

  return (
    <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <input
          className="is-invalid"
          type="text"
          name="title"
          placeholder="Add title..."
          ref={register({ required: "Required" })}
        />
        {errors.title && (
          <div className="invalid-feedback">Title is required.</div>
        )}
      </div>
      <div className="form-group">
        <input
          className="is-invalid"
          type="text"
          name="email"
          placeholder="Add email..."
          ref={register({
            required: "Email is required.",
            pattern: {
              value: emailRegex,
              message: "Invalid email."
            }
          })}
        />
        {errors.email && (
          <div className="invalid-feedback">{errors.email.message}</div>
        )}
      </div>
      <div className="form-group">
        <input
          className="is-invalid"
          type="textfield"
          name="message"
          placeholder="Write message..."
          ref={register({ required: "Required" })}
        />
        {errors.message && (
          <div className="invalid-feedback">Message is required.</div>
        )}
      </div>
      <input
        type="submit"
        value="Send Message"
        className="btn btn-dark btn-block"
      />
    </form>
  );
};

Form.propTypes = {
  submitMessage: PropTypes.func.isRequired
};

export default Form;
